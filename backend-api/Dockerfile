# Stage 1: Build the NestJS app
FROM node:16-alpine AS builder

WORKDIR /app/backend-api

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Run the NestJS app
FROM node:16-alpine

COPY --from=builder /app/backend-api/dist ./dist
COPY --from=builder /app/backend-api/node_modules ./node_modules

EXPOSE 3001

CMD ["node", "dist/main"]
