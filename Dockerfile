FROM node:lts AS build
WORKDIR /app

COPY . .

RUN npm install
RUN export APPWRITE_KEY=placeholder PUBLIC_APPWRITE_ENDPOINT=placeholder PUBLIC_APPWRITE_PROJECT=placeholder DB0_ID=placeholder DEV_INSTANCE=placeholder && npm run build
ENV HOST=0.0.0.0
ENV PORT=80

EXPOSE 80
CMD node ./dist/server/entry.mjs