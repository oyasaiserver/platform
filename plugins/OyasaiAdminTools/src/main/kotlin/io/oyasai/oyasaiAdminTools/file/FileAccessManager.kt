package io.oyasai.oyasaiAdminTools.file

import java.util.concurrent.BlockingQueue
import java.util.concurrent.LinkedBlockingQueue

object FileAccessManager {
  private val writeQueue: BlockingQueue<() -> Unit> = LinkedBlockingQueue()
  private val workerThread = Thread {
    while (true) {
      val task = writeQueue.take()
      task()
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
