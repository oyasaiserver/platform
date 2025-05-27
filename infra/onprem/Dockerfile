FROM docker:28.1.1-cli

RUN apk add --no-cache docker-cli-compose bash

ARG SHA
ENV SHA=${SHA}

WORKDIR /app

COPY compose/compose.yaml .
COPY infra/onprem/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]