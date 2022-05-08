FROM node:16.15-alpine as build

WORKDIR /usr/app

COPY ./ ./

RUN npm install && \
    npm run build

FROM node:16.15-alpine

ENV NODE_ENV=production

WORKDIR /usr/app

COPY --from=build /usr/app/.next /usr/app/.next
COPY ./package*.json ./

RUN npm install --global pm2 && \
    npm install && \
    chown -R node:node /usr/app

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
