FROM node:14.16.1-buster

WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG=myapp:*
EXPOSE 3000
CMD ["npm", "run", "start"]
