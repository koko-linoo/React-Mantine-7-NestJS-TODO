# Stage 1: Build the NestJS app
FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY prisma ./prisma/

COPY . .

RUN npx prisma generate

RUN npm run build

# Stage 2: Run the NestJS app
FROM node:alpine

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3001

CMD ["node", "dist/main"]
