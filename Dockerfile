FROM node:14.15-alpine

WORKDIR /usr/app

# Optimize docker build for caching
COPY ./package*.json ./

RUN npm install --global pm2 && \
    npm install --production

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
