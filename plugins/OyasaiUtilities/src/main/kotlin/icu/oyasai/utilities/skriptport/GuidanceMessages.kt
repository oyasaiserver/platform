package icu.oyasai.utilities.skriptport

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer

// Guidance.sk の文言・クリック値をそのまま保持する。先頭の # と候補文中の # も元のまま。
internal object GuidanceMessages {
  val menus: Map<String, Map<String, List<String>>> =
      mapOf(
          "annai" to
              mapOf(
                  "" to
                      listOf(
                          "&6--- 案内メニュー ---",
                          "<click:run_command:/annai start>&a[① はじめまして]&r",
                          "<click:run_command:/annai likes>&a[② イイね看板]&r",
                          "<click:run_command:/annai spawn>&a[③ スポーン]&r",
                          "<click:run_command:/annai kanko>&a[④ 観光]&r",
                          "<click:run_command:/annai rank>&a[⑤ 住宅展示場]&r",
                          "<click:run_command:/annai village>&a[⑥ はじめて村]&r",
                          "<click:run_command:/annai shigen>&a[⑦ 資源ワールド]&r",
                          "<click:run_command:/annai end>&a[⑧ 案内終了]&r",
                      ),
                  "start" to
                      listOf(
                          "&6--- 出会い・ガイドブック ---",
                          "#<click:suggest_command:はじめまして〜！ここは建築サーバーです！建築しますか？観光しますか？>&fはじめまして〜！ここは建築サーバーです！建築しますか？観光しますか？",
                          "#<click:suggest_command:この色が違う床を踏むとガイドブックが手に入ります。これを読めば序盤は大体何すればいいかわかりますよ>&fこの色が違う床を踏むとガイドブックが手に入ります。これを読めば序盤は大体何すればいいかわかりますよ",
                      ),
                  "likes" to
                      listOf(
                          "&6--- イイね看板（likes看板）---",
                          "#<click:suggest_command:このSociallikesと書いてある看板を右クリック、または扉を開ける方の手で押してみてください>&fこのSociallikesと書いてある看板を右クリック、または扉を開ける方の手で押してみてください",
                          "#<click:suggest_command:そうするとイイねができて、イイねをすると1000円、されると2ポイントもらえます！>&fそうするとイイねができて、イイねをすると1000円、されると2ポイントもらえます！",
                          "#<click:suggest_command:likes看板は建築が完成した時に、建築を見てもらうために建てるものです。作り方はガイドブックに書いてありますよ>&flikes看板は建築が完成した時に、建築を見てもらうために建てるものです。作り方はガイドブックに書いてありますよ",
                      ),
                  "spawn" to
                      listOf(
                          "&6--- スポーン地点 ---",
                          "#<click:suggest_command:#/spawnコマンドを打ってみてください。これでいつでもロビーに戻ってこれます>&f/spawnコマンドを打ってみてください。これでいつでもロビーに戻ってこれます",
                          "#<click:suggest_command:ここではビーコンに乗ることで色々な街やワールドにアクセスできます>&fここではビーコンに乗ることで色々な街やワールドにアクセスできます",
                          "#<click:suggest_command:別ワールドに飛びたければ正面のゲート、観光するなら外側のゲートがおすすめです>&f別ワールドに飛びたければ正面のゲート、観光するなら外側のゲートがおすすめです",
                      ),
                  "kanko" to
                      listOf(
                          "&6--- 観光案内 ---",
                          "#<click:suggest_command:観光する時の注意点ですが、他人の建築とその周辺ではブロックを置いたり壊したりしないでください>&f観光する時の注意点ですが、他人の建築とその周辺ではブロックを置いたり壊したりしないでください",
                          "#<click:suggest_command:チェストなどから盗む・モブを倒すのも禁止です>&fチェストなどから盗む・モブを倒すのも禁止です",
                          "#<click:suggest_command:それさえ気を付けてもらえれば自由に見て回って大丈夫です！>&fそれさえ気を付けてもらえれば自由に見て回って大丈夫です！",
                          "#<click:suggest_command:建築したくなったらいつでも言ってください。それではごゆっくり～>&f建築したくなったらいつでも言ってください。それではごゆっくり～",
                      ),
                  "rank" to
                      listOf(
                          "&6--- 住宅展示場・ランク説明 ---",
                          "#<click:suggest_command:おやさい鯖にはランク制度があり、ここにそれぞれ指標が載っています>&fおやさい鯖にはランク制度があり、ここにそれぞれ指標が載っています",
                          "#<click:suggest_command:ピンクの上のレベルは撤去対象となりますが、罰則は特にありません>&fピンクの上のレベルは撤去対象となりますが、罰則は特にありません",
                          "#<click:suggest_command:ランクを上げる方法は建築するだけ！>&fランクを上げる方法は建築するだけ！",
                          "#<click:suggest_command:ランクが上がると使える機能が増えます。例えば、上級になれば自由に飛べて、匠までいけばクリエと建築補助ツールが使えるようになります！>&fランクが上がると使える機能が増えます。例えば、上級になれば自由に飛べて、匠までいけばクリエと建築補助ツールが使えるようになります！",
                      ),
                  "village" to
                      listOf(
                          "&6--- はじめて村・建築開始 ---",
                          "#<click:suggest_command:ここははじめて村です。初めての方には最初の１軒だけここで建ててもらっています>&fここははじめて村です。初めての方には最初の１軒だけここで建ててもらっています",
                          "#<click:suggest_command:この辺で好きな空き地を一つ選びましょう>&fこの辺で好きな空き地を一つ選びましょう",
                          "#<click:suggest_command:決まったら、テレポート先を設定するので、角に立って/sethome aと打ちましょう。>&f決まったら、テレポート先を設定するので、角に立って/sethome aと打ちましょう。",
                          "#<click:suggest_command:#/home aで設定した場所にテレポートできます>&f/home aで設定した場所にテレポートできます",
                          "#<click:suggest_command:aの部分を変えればいくつでも設定可能です！>&faの部分を変えればいくつでも設定可能です！",
                          "#<click:suggest_command:次に建材ですが、自然からは採取せずにメニューのショップを利用するようにしてください。>&f次に建材ですが、自然からは採取せずにメニューのショップを利用するようにしてください",
                          "#<click:suggest_command:試しに適当なブロックを買って目印として置いておきましょう>&f試しに適当なブロックを買って目印として置いておきましょう",
                          "#<click:suggest_command:あとは /c で作業台、/d でゴミ箱、/bp でバックパック、/ec でエンダーチェストが開きます。>&fあとは /c で作業台、/d でゴミ箱、/bp でバックパック、/ec でエンダーチェストが開きます。",
                      ),
                  "shigen" to
                      listOf(
                          "&6--- 資源ワールド・お金の稼ぎ方 ---",
                          "#<click:suggest_command:#/warp kouzanと打ちましょう>&f/warp kouzanと打ちましょう",
                          "#<click:suggest_command:ここで採掘してお金を稼ぎます。しゃがんだ状態で掘れば一括破壊になります>&fここで採掘してお金を稼ぎます。しゃがんだ状態で掘れば一括破壊になります",
                          "#<click:suggest_command:もしアイテムで溢れてラグくなれば、このボタンを押して掃除できます！>&fもしアイテムで溢れてラグくなれば、このボタンを押して掃除できます！",
                      ),
                  "end" to
                      listOf(
                          "&6--- 資源ワールド・お金の稼ぎ方 ---",
                          "#<click:suggest_command:大体の流れはわかりましたか？>&f大体の流れはわかりましたか？",
                          "#<click:suggest_command:もう建築を始めてもらって大丈夫です。何かあったらいつでも聞いてください>&fもう建築を始めてもらって大丈夫です。何かあったらいつでも聞いてください",
                          "#<click:suggest_command:それではよきおやさいライフを～！>&fそれではよきおやさいライフを～！",
                      ),
              ),
          "annai-en" to
              mapOf(
                  "" to
                      listOf(
                          "&6--- Main menu ---",
                          "<run command:/annai-en start>&a[① Welcome]&r",
                          "<run command:/annai-en likes>&a[② Likes Sign]&r",
                          "<run command:/annai-en spawn>&a[③ Spawn]&r",
                          "<run command:/annai-en kanko>&a[④ Sightseeing]&r",
                          "<run command:/annai-en rank>&a[⑤ Housing Showcase]&r",
                          "<run command:/annai-en village>&a[⑥ Starter Village]&r",
                          "<run command:/annai-en shigen>&a[⑦ Resource World]&r",
                          "<run command:/annai-en end>&a[⑧ Have fun]&r",
                          "<run command:/annai-en vtp>&a[⑨ vtp]&r",
                      ),
                  "start" to
                      listOf(
                          "&6--- Welcome here ---",
                          "#<click:suggest_command:Hello! Should I guide you in English?>&fHello! Should I guide you in English?",
                          "#<click:suggest_command:Welcome to Oyasai building server! Are you here to build, or to explore?>&fWelcome to Oyasai building server! Are you here to build, or to explore?",
                          "#<click:suggest_command:Step on these gray floor to get a guide book.>&fStep on these gray floor to get a guide book.",
                          "#<click:suggest_command:It helps you understanding what to do.>&fIt helps you understanding what to do.",
                      ),
                  "likes" to
                      listOf(
                          "&6--- Likes Sign ---",
                          "#<click:suggest_command:Click this sign with hand which you open doors.>&fClick this sign with hand which you open doors.",
                          "#<click:suggest_command:This is called Likesboard. Click this to give [Like] to the builds. Giver gets money, and receiver gets points.>&fThis is called Likesboard. Click this to give [Like] to the builds. Giver gets money, and receiver gets points.",
                          "#<click:suggest_command:You can make one when you finished building. So people can come and see your creation.>&fYou can make one when you finished building. So people can come and see your creation.",
                          "#<click:suggest_command:Also guide book shows how to make it.>&fAlso guide book shows how to make it.",
                      ),
                  "spawn" to
                      listOf(
                          "&6--- Spawn point ---",
                          "#<click:suggest_command:Type this command →/spawn>&fType this command →/spawn",
                          "#<click:suggest_command:This takes you to the lobby. This here has access to many towns and worlds.>&fThis takes you to the lobby. This here has access to many towns and worlds.",
                          "#<click:suggest_command:Straight this way is mainly for going to another worlds. If you wanna touring around, I recommend portals at side area.>&fStraight this way is mainly for going to another worlds. If you wanna touring around, I recommend portals at side area.",
                      ),
                  "kanko" to
                      listOf(
                          "&6--- Sightseeing ---",
                          "#<click:suggest_command:When you exploring, be careful not breaking or placing blocks near the other guy's builds.>&fWhen you exploring, be careful not breaking or placing blocks near the other guy's builds.",
                          "#<click:suggest_command:Stealing is not allowed, and also killing any mobs is not allowed too.>&fStealing is not allowed, and also killing any mobs is not allowed too.",
                          "#<click:suggest_command:From now, you can explore everywhere as long as you follow these rules.>&fFrom now, you can explore everywhere as long as you follow these rules.",
                          "#<click:suggest_command:Please tell me if you wanna start building. Have a good time!>&fPlease tell me if you wanna start building. Have a good time!",
                      ),
                  "rank" to
                      listOf(
                          "&6--- Housing Showcase ---",
                          "#<click:suggest_command:This server has color rank system. These are showing how much skill needed in each rank.>&fThis server has color rank system. These are showing how much skill needed in each rank.",
                          "#<click:suggest_command:Builds on pink section have chance of getting removed. But don't worry, there's no penalty for that!>&fBuilds on pink section have chance of getting removed. But don't worry, there's no penalty for that!",
                          "#<click:suggest_command:The only way of your rank up is to build.>&fThe only way of your rank up is to build.",
                          "#<click:suggest_command:Higher ranks you get, more commands you can use!>&fHigher ranks you get, more commands you can use!",
                          "#<click:suggest_command:For example, Cyan rank can fly for free. Red rank can use creative mode and Worldedit.>&fFor example, Cyan rank can fly for free. Red rank can use creative mode and Worldedit.",
                      ),
                  "village" to
                      listOf(
                          "&6--- Starter Village ---",
                          "#<click:suggest_command:This village has everyone's first builds.>&fThis village has everyone's first builds.",
                          "#<click:suggest_command:Pick one plot you want.>&fPick one plot you want.",
                          "#<click:suggest_command:If you decided, type this command →/sethome a>&fIf you decided, type this command →/sethome a",
                          "#<click:suggest_command:Then type ->/home a, to teleport to that place.>&fThen type ->/home a, to teleport to that place.",
                          "#<click:suggest_command:You can set multiple homes by changing [a] part.>&fYou can set multiple homes by changing [a] part.",
                          "#<click:suggest_command:You can buy building materials from menu shop.>&fYou can buy building materials from menu shop.",
                          "#<click:suggest_command:Please don't gather resources from nature.>&fPlease don't gather resources from nature.",
                          "#<click:suggest_command:Let's try buy something, and place it down here.>&fLet's try buy something, and place it down here.",
                          "#<click:suggest_command:Additionally, typing /c opens the workbench, /d opens the trash can, /bp opens the backpack, and /ec opens the Ender Chest.>&fAdditionally, typing /c opens the workbench, /d opens the trash can, /bp opens the backpack, and /ec opens the Ender Chest.",
                      ),
                  "shigen" to
                      listOf(
                          "&6--- Resource World ---",
                          "#<click:suggest_command:Type this command →/warp kouzan>&fType this command →/warp kouzan",
                          "#<click:suggest_command:Mining in here to make money. You can activate Veinminer by mining while sneaking.>&fMining in here to make money. You can activate Veinminer by mining while sneaking.",
                          "#<click:suggest_command:When you start feeling laggy, press this button to clear all drops. >&fWhen you start feeling laggy, press this button to clear all drops. ",
                      ),
                  "end" to
                      listOf(
                          "&6--- Have a good time ---",
                          "#<click:suggest_command:Did you get most of important things?>&fDid you get most of important things?",
                          "#<click:suggest_command:So now you can start building. Tell me if you had some trouble>&fSo now you can start building. Tell me if you had some trouble",
                          "#<click:suggest_command:Enjoy your beautiful life in Oyasai!>&fEnjoy your beautiful life in Oyasai!",
                      ),
                  "vtp" to
                      listOf(
                          "&6--- Description of vtp ---",
                          "#<click:suggest_command:After you finished first building, type →/vtp [biome name]>&fAfter you finished first building, type →/vtp [biome name]",
                          "#<click:suggest_command:Spam this until you find a good spot to build.>&fSpam this until you find a good spot to build.",
                      ),
              ),
      )

  private val legacy = LegacyComponentSerializer.legacyAmpersand()
  private val click = Regex("<(?:click:(run_command|suggest_command):|run command:)(.*?)>")

  fun component(text: String): Component {
    val match = click.find(text) ?: return legacy.deserialize(text)
    val action =
        if (match.groupValues[1] == "suggest_command")
            ClickEvent.suggestCommand(match.groupValues[2])
        else ClickEvent.runCommand(match.groupValues[2])
    return legacy
        .deserialize(text.substring(0, match.range.first))
        .append(legacy.deserialize(text.substring(match.range.last + 1)).clickEvent(action))
  }
}
