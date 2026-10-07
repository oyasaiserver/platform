package io.oyasai.oyasaiAdminTools.utils

import com.google.gson.GsonBuilder

object JsonUtils {
  val gson = GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create()
}
