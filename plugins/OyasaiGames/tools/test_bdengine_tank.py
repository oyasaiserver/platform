"""bdengine_tank.py の分類と座標の確認。python3 test_bdengine_tank.py で実行する。"""

import bdengine_tank as tool


def box(x, y, z, sx, sy, sz, block="polished_tuff"):
    m = [sx, 0, 0, x, 0, sy, 0, y, 0, 0, sz, z, 0, 0, 0, 1]
    return '{id:"minecraft:block_display",block_state:{id:"minecraft:%s"},transformation:[%s],Tags:["t"]}' % (
        block,
        ",".join("%gf" % v for v in m),
    )


def sample():
    # 前が -x の戦車: 車体 6x1.5x3、砲塔（側壁と天板）2x0.8x2、砲身 3m（x=-2.5 から前へ）、後部の細い棒（車体の一部）。
    parts = [
        box(-3, 0, -1.5, 6, 1.5, 3),
        box(-1, 1.5, -1, 2, 0.6, 2),
        box(-1, 2.1, -1, 2, 0.2, 2),
        box(-4.5, 1.8, -0.1, 3, 0.2, 0.2),
        box(2.5, 1.45, -0.05, 0.5, 0.1, 0.1),
    ]
    return "summon block_display ~ ~ ~ {Passengers:[" + ",".join(parts) + "]}"


def main():
    model = tool.convert(sample(), "-x", 6.0)
    groups = [p["group"] for p in model["parts"]]
    assert groups == ["HULL", "TURRET", "TURRET", "BARREL", "HULL"], groups
    assert model["scale"] == 1.0, model["scale"]
    # 砲塔の回転中心は車体の上面（y=1.5）の中央、砲身は付け根から 3m。
    assert [round(v, 2) for v in model["pivot"]] == [0.0, 1.5, 0.0], model["pivot"]
    assert round(model["gunLength"], 2) == 3.0, model["gunLength"]
    assert round(model["gunRoot"][2], 2) == 1.5, model["gunRoot"]
    # 縮尺: 全長 12m を指定すると 2 倍。
    assert tool.convert(sample(), "-x", 12.0)["scale"] == 2.0
    print("ok")


if __name__ == "__main__":
    main()
