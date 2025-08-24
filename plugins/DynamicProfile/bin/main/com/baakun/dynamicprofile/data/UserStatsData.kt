package com.baakun.dynamicprofile.data

import org.bukkit.*

/** ユーザーごとの情報を記録するデータクラス */
class UserStatsData(val user: OfflinePlayer) {
  //    /**
  //     * ユーザーのデータを保存しておくconfigファイル
  //     */
  //    private val config: Stats = allStats.getOrCreate(user.uniqueId)
  ////        CustomYaml("UserStats/${user.uniqueId}.yml")
  //    var distance:Double = 0.0
  //
  //    fun getStats(): Stats{
  //        return config
  //    }
  //

  //
  //    /**
  //     *
  //     */
  //    fun setLastLogin(){
  //        if(!whoChanged.contains(user.uniqueId)) whoChanged.add(user.uniqueId)
  //        config.LastLogin = LocalDateTime.now().toString()
  //    }
  //    fun getLastLogin(): String{
  //        return config.LastLogin
  //    }
  //
  //    /**
  //     * おすすめ看板リストを設定する
  //     */
  //    fun setRecommend(index: Int, id: Int){
  //        if(!whoChanged.contains(user.uniqueId)) whoChanged.add(user.uniqueId)
  //        config.Recommends.put(index, id)
  //    }
  //    /**
  //     * おすすめ看板リストを取得する
  //     */
  //    fun getRecommend(index: Int): Int{
  //        return config.Recommends.getOrDefault(index,-0)
  //    }
  //
  //    fun getLastLvCheck(): Long{
  //        return config.LastCheck
  //    }
  //    fun getLastLv(): Int{
  //        return config.LastLv
  //    }
  //    fun setLastLv(lv: Int){
  //        if(!whoChanged.contains(user.uniqueId)) whoChanged.add(user.uniqueId)
  //        config.LastLv = lv
  //    }
  //    fun setLastLvCheck(){
  //        if(!whoChanged.contains(user.uniqueId)) whoChanged.add(user.uniqueId)
  //        config.LastCheck = System.currentTimeMillis()
  //    }
  //    fun getNotice(): Boolean{
  //        return config.notice
  //    }
  //    fun setNotice(boolean: Boolean){
  //        if(!whoChanged.contains(user.uniqueId)) whoChanged.add(user.uniqueId)
  //        config.notice = boolean
  //    }
  //    fun addExp(exp: Int){
  //        if(!whoChanged.contains(user.uniqueId)) whoChanged.add(user.uniqueId)
  //        config.Exp = config.Exp + exp
  //    }
  //    fun setExp(exp: Int){
  //        if(!whoChanged.contains(user.uniqueId)) whoChanged.add(user.uniqueId)
  //        config.Exp = exp
  //    }
  //    /**
  //     * 行動数と、行動タイプに応じた経験値をユーザーに追加する
  //     */
  //
  //
  //
  //
  //    fun getBlockPlaced(): Int {
  //        return config.Block
  //    }
  //
  //    fun getLike(): Int{
  //        return config.Like
  //    }
  //    fun  getReceiveLike(): Int{
  //        return config.ReceiveLike
  //    }
  //    fun getJoinCount(): Int{
  //        return config.Join
  //    }
  //    fun getChatCount(): Int{
  //        return config.Chat
  //    }
  //    /**
  //     * Jumpした回数を返す
  //     */
  //    fun getJumpCount(): Int {
  //        return config.Jump
  //    }
  //
  //    fun getFlyCount(): Int {
  //        return config.Fly
  //    }
  //
  //    /**
  //     * 移動した回数を返す
  //     */
  //    fun getMoveCount(): Int {
  //        return config.Move
  //    }    /**
  //     * 移動した回数を返す
  //     */
  //    fun getVehicleCount(): Int {
  //        return config.Vehicle
  //    }
  //
  //    /**
  //     * 投票した回数を返す
  //     */
  //    fun getVoteCount(): Int {
  //        return config.Vote
  //    }
  //
  //    fun getExpCount(): Int {
  //        return config.Exp
  //    }
  //
  //
  //

}
