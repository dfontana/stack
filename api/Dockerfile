FROM golang:1.12
WORKDIR /app
# Download dependencies only if those mod/sum changed
COPY go.mod .
COPY go.sum .
RUN go mod download
RUN go get github.com/githubnemo/CompileDaemon
# Then the rest
COPY . .

CMD CompileDaemon -color=true -command="./api"
