# Simple implementation of AMQP protocol for queues in Node JS using RabbitMQ

To run locally, after cloning the repo:

```
npm install
npm run publisher // for publisher
npm run consumer  // for consumer
```

you will need to have RabbitMQ installed on your system or use a docker image (as I did)

I used the image rabbitmq:management

```
docker pull rabbitmq:management
```

and started with this parameters:

```
docker run -d -p 8080:15672 -p 5672:5672 --hostname my-rabbit --name some-rabbit rabbitmq:management
````
