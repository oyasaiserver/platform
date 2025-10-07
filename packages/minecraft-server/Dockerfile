FROM itzg/minecraft-server:java25-graalvm

COPY plugins/*.jar /overlays/plugins/

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
