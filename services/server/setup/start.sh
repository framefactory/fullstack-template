#!/bin/bash
# DOCKER IMAGE STARTUP SCRIPT
# SERVER ENTRYPOINT

# make sure path for node, npm and module binaries is registered
source /root/.nvm/nvm.sh

# install node module dependencies
cd /app
npm install

# start server in debug mode, watching source code changes
npm run server-dev