FROM node:12.8-stretch

WORKDIR /app
COPY . .
RUN npm install --production
ENV DEBUG=myapp:*
EXPOSE 3000
CMD ["node", "/app/bin/www"]
#CMD ["npm", "run", "start"]
