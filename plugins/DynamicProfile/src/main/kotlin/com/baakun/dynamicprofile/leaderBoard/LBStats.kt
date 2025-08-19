package com.baakun.dynamicprofile.leaderBoard

import com.baakun.dynamicprofile.exp.BehType
import com.baakun.dynamicprofile.exp.BehType.*
import com.google.gson.annotations.Expose
import java.util.*

data class LBStats(
    @Expose
    var uuid: UUID = UUID.randomUUID(),
    @Expose
    var exp: Int =0,
    @Expose
    var move: Int = 0,
    @Expose
    var vehicle: Int = 0,
    @Expose
    var fly: Int = 0,
    @Expose
    var jump: Int = 0,
    @Expose
    var block: Int = 0,
    @Expose
    var chat:Int = 0,
    @Expose
    var vote: Int = 0,
    @Expose
    var like: Int = 0,
    @Expose
    var receiveLike: Int = 0,
    @Expose
    var join: Int = 0) {
    /**
     * 動作タイプと回数を入力し、プレイヤーのStatsに登録する。
     *
     * @param type
     * 動作タイプ
     * @param count
     * 動作を追加でした回数
     */
    fun add(type: BehType, count: Int){
        when(type){
            MOVE -> move += count
            VEHICLE -> vehicle += count
            FLY -> fly += count
            JUMP -> jump += count
            PLACE_BLOCK -> block += count
            CHAT -> chat += count
            VOTE -> vote += count
            LIKE -> like += count
            RECEIVE_LIKE -> receiveLike += count
            JOIN -> join += count
            else -> {}
        }
    }
}