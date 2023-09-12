FROM node:18-alpine3.16

WORKDIR /app


COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 4000

CMD ["npm", "run","start:production"]
