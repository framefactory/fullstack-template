#!/bin/bash
# DOCKER IMAGE STARTUP SCRIPT
# SERVER ENTRYPOINT

# make sure path for node, npm and module binaries is registered
source /root/.nvm/nvm.sh

# install node module dependencies
cd /app
npm install

# Optional: start memcached service
#service memcached start

# build client and server code
npm run build

# start server in debug mode, watching source code changes
npm run watch
