FROM itzg/minecraft-server:java24-graalvm

COPY ./plugins/*/build/libs/*.jar /plugins/

COPY ./infra/minecraft-server/plugins/*.jar /plugins/

COPY ./infra/minecraft-server/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
