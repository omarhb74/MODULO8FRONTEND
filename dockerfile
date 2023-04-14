FROM node:14-alpine
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["npm","run","serve"]