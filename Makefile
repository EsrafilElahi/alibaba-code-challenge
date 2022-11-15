LAST_TAG_COMMIT := $(shell git rev-list --tags --max-count=1)
LAST_TAG := $(shell git describe --tags $(LAST_TAG_COMMIT))
LAST_COMMIT := $(shell git rev-parse HEAD)

ifeq ($(LAST_COMMIT),$(LAST_TAG_COMMIT))
	TAG := $(LAST_TAG)
else
	TAG := $(LAST_COMMIT)
endif

# base_package:
# 	docker build -f alibaba.node.Dockerfile -t alibaba-front-node:latest . --no-cache

# production:
# 	docker build -f alibaba.front.production.Dockerfile -t alibaba-front:$(TAG) -t alibaba-front:latest . --no-cache