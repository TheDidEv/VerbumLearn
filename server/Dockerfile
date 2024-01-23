FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm uninstall bcrypt
RUN npm install bcrypt

COPY . .

RUN npx prisma generate
#.src/ts code to ./dist js code
RUN npx tsc

EXPOSE 5000

CMD ["npm", "run", "dev"]