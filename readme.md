## Operations

- `docker-compose up`: Launch backend api & frontend ui, both with hot reloading.
- `docker build . -t stack`: Build the production image, tagged as "stack"
- `docker run -p 80:8080 stack`: Run the latest stack image mapping host 80 to container 8080
