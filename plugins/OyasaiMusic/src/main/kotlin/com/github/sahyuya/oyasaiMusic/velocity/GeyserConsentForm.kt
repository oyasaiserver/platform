package com.github.sahyuya.oyasaiMusic.velocity

import java.util.function.Consumer
import org.geysermc.geyser.api.connection.GeyserConnection

/** Never link Cumulus types through Velocity's cross-plugin class lookup.
 * Geyser (and potentially Floodgate) may each expose their own Cumulus copy.
 */
internal object GeyserConsentForm {
  fun send(connection: GeyserConnection, content: String, finish: (Boolean?) -> Unit): Boolean {
    val api = GeyserConnection::class.java
    val form = build(api.classLoader, content, finish)
    val formType = Class.forName("org.geysermc.cumulus.form.Form", true, api.classLoader)
    return api.getMethod("sendForm", formType).invoke(connection, form) as Boolean
  }

  internal fun build(loader: ClassLoader, content: String, finish: (Boolean?) -> Unit): Any {
    fun type(name: String) = Class.forName("org.geysermc.cumulus.$name", true, loader)
    val modal = type("form.ModalForm")
    val builderType = type("form.ModalForm\$Builder")
    val responseType = type("response.ModalFormResponse")
    val builder = modal.getMethod("builder").invoke(null)
    fun text(name: String, value: String) {
      builderType.getMethod(name, String::class.java).invoke(builder, value)
    }
    text("title", "拡張音域パック：最終確認")
    text("content", content)
    text("button1", "キャンセル（変更しない）")
    text("button2", "同意してダウンロード")
    builderType.getMethod("validResultHandler", Consumer::class.java).invoke(builder,
      Consumer<Any> { response -> finish(!(responseType.getMethod("clickedFirst").invoke(response) as Boolean)) })
    builderType.getMethod("closedOrInvalidResultHandler", Runnable::class.java)
      .invoke(builder, Runnable { finish(null) })
    return builderType.getMethod("build").invoke(builder)
  }
}
