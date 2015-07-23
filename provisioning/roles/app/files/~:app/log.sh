#! /bin/bash
cd `dirname $0`
node index.js 1>> /var/log/nodejs/access.log 2>> /var/log/nodejs/error.log
