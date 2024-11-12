#FROM node:20
#WORKDIR /app
#COPY package*.json ./
#COPY prisma ./prisma/
#RUN npm install
#COPY . .
#RUN npm run build
#RUN npx prisma generate
#CMD [ "/bin/bash", "-c", "npx prisma migrate dev; npm run start:prod" ]

#FROM node:20
#WORKDIR /app
#COPY package*.json ./
#COPY prisma ./prisma/
#RUN npm install
#COPY . .
#RUN npm run build
#RUN npx prisma generate
#CMD [ "/bin/bash", "-c", "npx prisma migrate dev; npm run start:prod" ]

#FROM node:20 AS prod-stage
#COPY --from=build-stage /app/dist ./dist
#COPY --from=build-stage /app/prisma ./prisma
##COPY prisma ./prisma/
##RUN npx prisma generate
##ENV DATABASE_URL="postgres://root:root@localhost:5432/boilerbase?sslmode=disable"
#CMD [ "/bin/bash", "-c", "npx prisma migrate dev; npm run start:prod" ]

#FROM node:20 AS build
#WORKDIR /usr/src/app
#COPY package.json .
##COPY package-lock.json .
#RUN npm install
#COPY . .
#RUN npx prisma generate
#RUN npm run build
#
#FROM node:20-slim
#RUN apt update && apt install libssl-dev dumb-init -y --no-install-recommends
#WORKDIR /usr/src/app
#COPY --chown=node:node --from=build /usr/src/app/dist ./dist
#COPY --chown=node:node --from=build /usr/src/app/.env .env
#COPY --chown=node:node --from=build /usr/src/app/package.json .
##COPY --chown=node:node --from=build /usr/src/app/package-lock.json .
#RUN npm install --omit=dev
#COPY --chown=node:node --from=build /usr/src/app/node_modules/.prisma/client  ./node_modules/.prisma/client
#COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
#
#RUN npx prisma generate
#
#ENV NODE_ENV=production
#EXPOSE 3000
#CMD ["dumb-init", "node", "dist/src/main"]

FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["/bin/bash", "-c", "npx prisma generate; npx prisma migrate dev; npm run start:prod"]