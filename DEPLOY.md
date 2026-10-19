# Shalom Baptist Church — Production Deployment (Self-Hosted)

This site is a static Next.js app (no database, no API keys). It runs via `next start` behind an Nginx reverse proxy with SSL.

## 1. On your VPS (Ubuntu/Debian)

### Install prerequisites
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx certbot python3-certbot-nginx curl git

# Install Node.js (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # should be 20.x
npm -v
```

### Create a deploy user
```bash
sudo adduser --system --group --home /home/shalom shalom
sudo usermod -aG www-data shalom
```

### Copy the project
From your development machine:
```bash
scp -r "/mnt/storage/project power/Shallom Baptist" shalom@<VPS_IP>:~/shalom-baptist
```
Or upload via SFTP / Git clone.

## 2. Deploy on the VPS

Run these as the `shalom` user:

```bash
cd ~/shalom-baptist
npm install --omit=dev
npm run build
```

### Systemd service (keeps the app alive)
Create `/etc/systemd/system/shalom-baptist.service`:

```ini
[Unit]
Description=Shalom Baptist Church Next.js App
After=network.target

[Service]
Type=simple
User=shalom
Group=www-data
WorkingDirectory=/home/shalom/shalom-baptist
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=5
StandardOutput=append:/var/log/shalom-baptist.log
StandardError=append:/var/log/shalom-baptist.log

[Install]
WantedBy=multi-user.target
```

Then enable and start it:
```bash
sudo systemctl daemon-reload
sudo systemctl enable shalom-baptist
sudo systemctl start shalom-baptist
sudo systemctl status shalom-baptist
```

The app now listens on `http://localhost:3000` and restarts automatically on reboot.

## 3. Nginx reverse proxy + SSL

Create `/etc/nginx/sites-available/shalom-baptist`:

```nginx
server {
    listen 80;
    server_name shalombaptist.org www.shalombaptist.org;   # <-- change to your domain

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
    }
}
```

Enable it and get an SSL certificate:
```bash
sudo ln -s /etc/nginx/sites-available/shalom-baptist /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# SSL via Let's Encrypt
sudo certbot --nginx -d shalombaptist.org -d www.shalombaptist.org
```

Certbot will auto-configure HTTPS and set up auto-renewal. Test renewal:
```bash
sudo certbot renew --dry-run
```

Your site is now live at **https://shalombaptist.org**.

## 4. Updating the site later

When you make changes:
```bash
# on your dev machine, then push to the VPS:
scp -r <changed files> shalom@<VPS_IP>:~/shalom-baptist/

# on the VPS:
cd ~/shalom-baptist
npm install --omit=dev
npm run build
sudo systemctl restart shalom-baptist
```

## 5. Logs & troubleshooting

```bash
# App logs
sudo journalctl -u shalom-baptist -f
# or
tail -f /var/log/shalom-baptist.log

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Check app is listening
sudo ss -tlnp | grep 3000
```

---

## Files included in this repo for deployment

| File | Purpose |
|------|---------|
| `deploy/shalom-baptist.service` | systemd unit (copy to `/etc/systemd/system/`) |
| `deploy/nginx-shalom-baptist.conf` | Nginx config (copy to `/etc/nginx/sites-available/`) |
| `deploy/deploy.sh` | One-command deploy helper |

Next step: I'll drop those three files into the repo so you have them ready.