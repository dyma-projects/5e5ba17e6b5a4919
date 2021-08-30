FROM node:alpine
WORKDIR /app/
# COPY package.json .
# RUN npm i
COPY . .

EXPOSE 4200 49153 
# 49153 if live reload doesn't work.
# Add it to the docker-compose if needed

# ENTRYPOINT ["npm", "start"]
ENTRYPOINT [ "tail", "-f", "/dev/null" ]