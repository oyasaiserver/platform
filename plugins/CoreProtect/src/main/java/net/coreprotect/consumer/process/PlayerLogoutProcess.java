package net.coreprotect.consumer.process;

import java.sql.PreparedStatement;
import net.coreprotect.database.logger.PlayerSessionLogger;
import org.bukkit.Location;

class PlayerLogoutProcess {

  static void process(
      PreparedStatement preparedStmt, int batchCount, Object object, int time, String user) {
    if (object instanceof Location) {
      Location location = (Location) object;
      PlayerSessionLogger.log(preparedStmt, batchCount, user, location, time, 0);
    }
  }
}
