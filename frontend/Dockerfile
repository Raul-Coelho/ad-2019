FROM node:12.16.1

WORKDIR /frontend

COPY package*.json /frontend/

RUN npm install

COPY ./ frontend/

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:docker"]
