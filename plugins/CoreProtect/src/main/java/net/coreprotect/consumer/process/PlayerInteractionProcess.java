package net.coreprotect.consumer.process;

import java.sql.PreparedStatement;
import net.coreprotect.database.logger.PlayerInteractLogger;
import org.bukkit.Material;
import org.bukkit.block.BlockState;

class PlayerInteractionProcess {

  static void process(
      PreparedStatement preparedStmt, int batchCount, String user, Object object, Material type) {
    if (object instanceof BlockState block) {
      PlayerInteractLogger.log(preparedStmt, batchCount, user, block, type);
    }
  }
}
