FROM node:slim

COPY . .

RUN npm install

CMD ["node", "index.js"]

EXPOSE 8000

