FROM node:20.5.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 9229

ENV NODE_ENV=development

CMD ["npm", "start:debug"]
