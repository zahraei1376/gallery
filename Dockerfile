FROM node:16-alpine as builder

WORKDIR /usr/app
# RUN npm install -g npm@9.6.4
COPY ./package.json .
RUN npm install --force

COPY . .

RUN npm run build
# CMD ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /usr/app/.next /usr/share/nginx/html