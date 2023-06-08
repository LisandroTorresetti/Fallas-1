mandale-mecha:
	docker-compose -f docker-compose.yaml up -d --build
.PHONY: mandale-mecha

delete-app:
	docker-compose -f docker-compose.yaml stop -t 1
	docker-compose -f docker-compose.yaml down
.PHONY: delete-app