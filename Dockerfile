############################
# 1. Compile the dependencies
############################
FROM node:12.2.0-alpine as front_builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./front .
RUN yarn install && yarn run build

############################
# 2. Compile the backend
############################
FROM golang:1.12 as api_builder
WORKDIR /app
COPY ./api/* ./
COPY go.mod .
COPY go.sum .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build

############################
# 3. Combine into our final image
############################
FROM alpine
RUN mkdir /www
COPY --from=front_builder /app/build/* /www/
COPY --from=api_builder /app/stack /api
RUN ls -al /www
ENV GIN_MODE=release
EXPOSE 8080
ENTRYPOINT [ "/api" ]