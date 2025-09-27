FROM itzg/minecraft-server:java24-graalvm

COPY ./plugins/*/build/libs/*.jar /plugins/

COPY ./docker/minecraft-server/plugins/*.jar /plugins/

COPY ./docker/minecraft-server/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
