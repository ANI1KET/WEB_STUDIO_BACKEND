# Stage 1: Base for build
FROM node:23-alpine AS base

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY src ./src
COPY tsconfig.build.json ./tsconfig.build.json

RUN npm run build
RUN npm prune --production


# Stage 2: Final runtime image
FROM node:23-alpine AS prod

# Set timezone to Asia/Kolkata
ENV TZ=Asia/Kolkata
RUN ln -sf /usr/share/zoneinfo/Asia/Kolkata /etc/localtime

RUN apk add --no-cache openssl

WORKDIR /app

COPY --from=base /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

CMD ["node", "dist/main.js"]
