FROM itzg/minecraft-server:java24-graalvm

COPY ./packages/plugins/jars/*.jar /overlays/plugins/

COPY ./infra/minecraft-server/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
