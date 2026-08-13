package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.CustomYaml
import java.time.LocalDateTime
import java.util.UUID
import kotlin.math.max

/** 宣伝履歴データ */
object PublicityHistory {
  private val yaml = CustomYaml("PublicityHistory.yml")
  private val data = mutableMapOf<Int, PublicityData>()
  private var lastID = 0

  fun loadYAML() {
    Thread(
            {
              yaml.getKeys(false).forEach { num ->
                val timeStr = yaml.getString("${num}.TimeStamp") ?: return@forEach
                val time = LocalDateTime.parse(timeStr) ?: return@forEach
                val userStr = yaml.getString("${num}.User") ?: return@forEach
                val user = UUID.fromString(userStr) ?: return@forEach
                val id = yaml.getInt("${num}.SLID", -999999)
                if (id == -999999) return@forEach
                val dataID = num.toIntOrNull() ?: return@forEach

                data[dataID] = PublicityData(dataID, time, user, id)
                lastID = max(lastID, dataID)
              }

              SLDatabase.syncPublicityHistory(data.values.toList())
            },
            "SL3-loadPublicityHistoryData",
        )
        .start()
  }

  fun addData(user: UUID, slid: Int) {
    val time = LocalDateTime.now()
    val dataID = lastID + 1
    lastID++

    val pData = PublicityData(dataID, time, user, slid)
    data[dataID] = pData
    yaml.set("${dataID}.TimeStamp", time.toString())
    yaml.set("${dataID}.User", user.toString())
    yaml.set("${dataID}.SLID", slid)
    yaml.save()

    SLDatabase.savePublicityHistory(pData)
  }

  fun delSLID(slid: Int) {
    data.toMap().forEach { (num, pData) ->
      if (pData.slid == slid) {
        data.remove(num)
        yaml.set("$num", null)
      }
    }
    yaml.save()

    SLDatabase.deletePublicityHistoryBySLID(slid)
  }

  fun getData(): Map<Int, PublicityData> {
    return data.toMap()
  }
}
