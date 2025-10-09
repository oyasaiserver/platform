FROM itzg/minecraft-server:java24-graalvm

COPY ./plugins/*/build/libs/*.jar /overlays/plugins/
COPY ./packages/plugins/dist/*.jar /overlays/plugins/
COPY ./infra/minecraft-server/plugins/*.jar /overlays/plugins/

COPY ./infra/minecraft-server/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
