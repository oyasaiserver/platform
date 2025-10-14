package io.oyasai.oyasaiAdminTools.rank

data class Rank(
  val name: String,
  val groupName: String,
  val grade: Int = 0,
  val minPlayTimeHours: Int = 0,
  val minJoinDays: Int = 0,
  val minElapse: Int = 0,
  val minBuilds: Int = 0,
)
