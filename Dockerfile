FROM node:20-alpine

RUN apk add --no-cache libc6-compat openssl ghostscript graphicsmagick postgresql-client

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps
RUN npm install --legacy-peer-deps --save-dev typescript @types/react @types/node

ARG CACHEBUST=1
RUN echo "Cache bust: $CACHEBUST"
COPY . .

RUN npx prisma generate

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm run build

EXPOSE 7331
ENV PORT=7331
ENV HOSTNAME="0.0.0.0"

COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["npx", "next", "start", "-p", "7331"]
