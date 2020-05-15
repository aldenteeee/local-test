FROM node:erbium
RUN npm install -g firebase-tools

ENTRYPOINT ["/usr/local/bin/firebase"]
