
# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
RUN chmod  +x ./production_entrypoint.sh


# # for test
# FROM node:lts as dependencies
# WORKDIR /my-project
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# FROM node:lts as builder
# WORKDIR /my-project
# COPY . .
# COPY --from=dependencies /my-project/node_modules ./node_modules
# RUN yarn build

# FROM node:lts as runner
# WORKDIR /my-project
# ENV NODE_ENV production
# # If you are using a custom next.config.js file, uncomment this line.
# # COPY --from=builder /my-project/next.config.js ./
# COPY --from=builder /my-project/public ./public
# COPY --from=builder /my-project/.next ./.next
# COPY --from=builder /my-project/node_modules ./node_modules
# COPY --from=builder /my-project/package.json ./package.json

# EXPOSE 3000
# CMD ["yarn", "start"]