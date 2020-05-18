FROM node:12.16.1

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . /backend/

EXPOSE 80

CMD ["npm", "start"]