FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 8080

USER node

CMD ["node", "server.js"]
