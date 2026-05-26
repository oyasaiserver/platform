package io.oyasai.anybuilder.carbuilder2.model

enum class CarBuilder2EntityType {
  Body,
  Wheel,
  Wheel2,
  HeadLight,
}

enum class CarBuilder2DisplayType {
  LightBlock,
  BrakeBlock,
  WinkerLeft,
  WinkerRight,
}

enum class CarBuilder2BaseDataType(val configName: String) {
  Body("Body"),
  Wheel("Wheel"),
  Wheel2("Wheel2"),
  HeadLight("HeadLight"),
}
