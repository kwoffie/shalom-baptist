#!/bin/bash
cd "/mnt/storage/project power/Shallom Baptist"
echo "Starting npm install at $(date)" >> /tmp/shalom-install-final.log
npm install --no-audit --no-fund --prefer-offline --fetch-timeout=300000 --fetch-retries=10 --fetch-retry-maxtimeout=180000 >> /tmp/shalom-install-final.log 2>&1
echo "Finished npm install at $(date) with exit code $?" >> /tmp/shalom-install-final.log
