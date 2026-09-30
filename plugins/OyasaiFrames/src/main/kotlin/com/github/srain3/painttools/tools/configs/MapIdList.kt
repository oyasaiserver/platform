package com.github.srain3.painttools.tools.configs

import com.github.srain3.painttools.tools.FileBox
import org.bukkit.configuration.file.FileConfiguration

/** MapID_List.ymlを扱うObject */
object MapIdList {
  /** MapID_TagList.ymlを保管する変数 */
  private lateinit var mapIdListCfg: FileConfiguration

  /** MapID_TagList.ymlをロード */
  fun loadMapIdConfig() {
    mapIdListCfg = FileBox.getCfg("MapID_TagList.yml")
  }

  /** MapID_TagList.ymlへセーブ */
  fun saveMapIdConfig() {
    FileBox.saveFile("MapID_TagList.yml", mapIdListCfg)
  }

  /**
   * MapID_TagList.ymlへ値を保存する
   *
   * @param id 保存する値(ID)
   */
  fun saveID(id: Int) {
    val list = mapIdListCfg.getIntegerList("ID")
    list.add(id)
    mapIdListCfg.set("ID", list)
    mapIdListCfg.set("LastID", id)
  }

  /**
   * MapID_TagList.ymlにIDがあるか確認する
   *
   * @param id 確認する値(ID)
   * @return true=存在する | false=存在しない
   */
  fun checkID(id: Int): Boolean {
    return mapIdListCfg.getIntegerList("ID").contains(id)
  }

  /** MapID_TagList.ymlのLastIDを取得して返す */
  fun getLastID(): Int {
    return mapIdListCfg.getInt("LastID", 0)
  }

  /** LockListを追加する */
  fun setLockID(id: Int) {
    val list = mapIdListCfg.getIntegerList("LockID")
    list.add(id)
    mapIdListCfg.set("LockID", list)
    saveMapIdConfig()
  }

  /**
   * LockListにIDがあるか確認する
   *
   * @return あればtrue 無ければfalse
   */
  fun checkLockID(id: Int): Boolean {
    return mapIdListCfg.getIntegerList("LockID").contains(id)
  }

  /** LockListからIDを消す */
  fun removeLockID(id: Int): Boolean {
    val list = mapIdListCfg.getIntegerList("LockID")
    return if (list.contains(id)) {
      list.remove(id)
      mapIdListCfg.set("LockID", list)
      saveMapIdConfig()
      true
    } else {
      false
    }
  }
}
