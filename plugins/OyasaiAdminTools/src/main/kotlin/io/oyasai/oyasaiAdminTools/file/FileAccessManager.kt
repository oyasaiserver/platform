package io.oyasai.oyasaiAdminTools.file

import java.util.concurrent.BlockingQueue
import java.util.concurrent.LinkedBlockingQueue

object FileAccessManager {
  private const val RETRY_LIMIT = 5
  private val writeQueue: BlockingQueue<() -> Unit> = LinkedBlockingQueue()
  private val workerThread = Thread {
    while (true) {
      val task = writeQueue.take()
      if (task == null) {
        Thread.sleep(50)
        continue
      }
      for (attempt in 1..RETRY_LIMIT) {
        try {
          task()
          break
        } catch (e: Exception) {
          if (attempt == RETRY_LIMIT) {
            e.printStackTrace()
          } else {
            Thread.sleep(100L * attempt)
          }
        }
      }
    }
  }

  init {
    workerThread.isDaemon = false
    workerThread.start()
  }

  fun submitWriteTask(task: () -> Unit) {
    writeQueue.put(task)
  }
}
