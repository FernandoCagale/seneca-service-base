deploy: stop delete pull run

stop:
		docker stop consul || echo "Stop CONSUL"
		docker stop rabbitmq || echo "Stop RABBITMQ"
		docker stop redis || echo "Stop REDIS"
		docker stop mongo || echo "Stop MONGO"
		docker stop base || echo "Stop BASE"
		

delete:
		docker rm consul || echo "Stop CONSUL"
		docker rm rabbitmq || echo "Stop RABBITMQ"
		docker rm redis || echo "Stop REDIS"
		docker rm mongo || echo "Stop MONGO"
		docker rm base || echo "Stop BASE"

pull:
		docker pull registry.gitlab.com/fernandocagale/seneca-service-base:latest
		docker pull smebberson/alpine-redis
		docker pull rabbitmq:alpine
		docker pull mongo
		docker pull consul

run:
		docker run -d \
				--net=host \
				--name consul \
				--restart always \
				-p 8400:8400 \
				-p 8500:8500 \
				consul
		docker run -d \
				--net=host \
				--name mongo \
				--restart always \
				-p 27017:27017 \
				mongo
		docker run -d \
				--net=host \
				--name rabbitmq \
				--restart always \
				-p 5672:5672 \
				rabbitmq:alpine
		docker run -d \
				--net=host \
				--name redis \
				-p 6379:6379 \
				--restart always \
				smebberson/alpine-redis
		docker run -d \
				--net=host \
				--name base \
				--restart always \
				registry.gitlab.com/fernandocagale/seneca-service-base:latest
