dependencies {
  compileOnly(libs.purpur.api)
  testImplementation(libs.purpur.api)
  compileOnly(libs.fawe.bukkit)
  compileOnly(libs.tab.api)
  implementation(libs.kotlin.stdlib)
}

// 他プラグインが同梱する Kotlin と名前が重なると LinkageError になる（Function1 など）ため、別名にする。
tasks.shadowJar { relocate("kotlin", "icu.oyasai.citiesskymine.libs.kotlin") }
