FROM balenalib/amd64-alpine-node:latest

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
