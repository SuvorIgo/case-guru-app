FROM node:18

WORKDIR /app

COPY package*.json ./

RUN nom install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]