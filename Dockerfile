FROM node:14.19-buster

WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG=myapp:*
EXPOSE 3000
CMD ["npm", "run", "start"]
