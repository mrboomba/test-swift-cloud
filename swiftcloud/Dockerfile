FROM node:18-alpine3.16

WORKDIR /app


COPY ./package.json .
COPY . .
RUN npm install -g typescript
RUN npm install
RUN npm run build

EXPOSE 4000

CMD ["npm", "run","start"]
