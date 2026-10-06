import sys
import math
import itertools
import os
import pickle
from PIL import Image

try:
    from scipy.spatial import cKDTree
    HAS_SCIPY = True
except ImportError:
    HAS_SCIPY = False

try:
    import mcschematic
    HAS_MCSCHEMATIC = True
except ImportError:
    HAS_MCSCHEMATIC = False

try:
    import numpy as np
    HAS_NUMPY = True
except ImportError:
    HAS_NUMPY = False

# 案D: CIELab色空間変換 (知覚的色距離マッチング用)
def _srgb_to_linear(v):
    v /= 255.0
    return v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4

def rgb_to_lab(r, g, b):
    rl, gl, bl = _srgb_to_linear(r), _srgb_to_linear(g), _srgb_to_linear(b)
    x = rl * 0.4124564 + gl * 0.3575761 + bl * 0.1804375
    y = rl * 0.2126729 + gl * 0.7151522 + bl * 0.0721750
    z = rl * 0.0193339 + gl * 0.1191920 + bl * 0.9503041
    x /= 0.95047; z /= 1.08883
    def f(v): return v ** (1/3) if v > 0.008856 else (7.787 * v + 16/116)
    return (116 * f(y) - 16, 500 * (f(x) - f(y)), 200 * (f(y) - f(z)))

def rgb_to_lab_batch(arr):
    """NumPy配列 (N, 3) の RGB→Lab 一括変換"""
    v = arr.astype(np.float64) / 255.0
    linear = np.where(v <= 0.04045, v / 12.92, ((v + 0.055) / 1.055) ** 2.4)
    r, g, b = linear[:, 0], linear[:, 1], linear[:, 2]
    x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375
    y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750
    z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041
    x /= 0.95047; z /= 1.08883
    def f(v): return np.where(v > 0.008856, np.cbrt(v), 7.787 * v + 16 / 116)
    fy = f(y)
    L = 116 * fy - 16
    a = 500 * (f(x) - fy)
    b_ch = 200 * (fy - f(z))
    return np.stack([L, a, b_ch], axis=1)

# 案A: ガンマ補正によるトーンマッピング
def apply_gamma(img, gamma):
    """PILイメージにガンマ補正を適用して返す (gamma > 1.0 で明部を圧縮)"""
    if gamma == 1.0:
        return img
    if HAS_NUMPY:
        arr = np.array(img, dtype=np.float32) / 255.0
        arr = np.power(arr, gamma) * 255.0
        return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    else:
        lut = [int(round((i / 255.0) ** gamma * 255)) for i in range(256)]
        lut_3ch = lut * 3
        return img.point(lut_3ch)

# マイクラ16色ガラスの予測インゲームレンダリング色 (底面影・アルファ考慮の真理論値)
MC_COLORS = {
    "White": (118.3, 118.3, 118.3),
    "Orange": (100.4, 59.5, 24.5),
    "Magenta": (82.9, 36.0, 100.4),
    "Light Blue": (48.0, 71.4, 100.4),
    "Yellow": (106.4, 106.4, 24.5),
    "Lime": (59.5, 94.9, 12.6),
    "Pink": (112.3, 59.5, 76.9),
    "Gray": (36.0, 36.0, 36.0),
    "Light Gray": (71.4, 71.4, 71.4),
    "Cyan": (35.6, 59.5, 71.0),
    "Purple": (59.5, 30.1, 82.9),
    "Blue": (24.1, 35.6, 82.5),
    "Brown": (48.0, 36.0, 24.5),
    "Green": (48.0, 59.5, 24.1),
    "Red": (70.5, 23.6, 23.6),
    "Black": (12.6, 12.6, 12.6)
}

# マイクラのブロックIDマッピング
MC_BLOCK_IDS = {
    "White": "minecraft:white_stained_glass",
    "Orange": "minecraft:orange_stained_glass",
    "Magenta": "minecraft:magenta_stained_glass",
    "Light Blue": "minecraft:light_blue_stained_glass",
    "Yellow": "minecraft:yellow_stained_glass",
    "Lime": "minecraft:lime_stained_glass",
    "Pink": "minecraft:pink_stained_glass",
    "Gray": "minecraft:gray_stained_glass",
    "Light Gray": "minecraft:light_gray_stained_glass",
    "Cyan": "minecraft:cyan_stained_glass",
    "Purple": "minecraft:purple_stained_glass",
    "Blue": "minecraft:blue_stained_glass",
    "Brown": "minecraft:brown_stained_glass",
    "Green": "minecraft:green_stained_glass",
    "Red": "minecraft:red_stained_glass",
    "Black": "minecraft:black_stained_glass"
}

def get_blended_color(bg, layer_colors, alpha=0.5):
    """
    複数層のガラスを重ねた時の結果色をアルファブレンディング式で計算する
    bg: 一番奥に見える背景色 (R, G, B)
    layer_colors: 奥から手前への順で並んだガラスの色のリスト
    """
    c_dst = bg
    for src in layer_colors:
        # srcが手前、c_dstが奥(背景) 色の合成
        r = src[0] * alpha + c_dst[0] * (1 - alpha)
        g = src[1] * alpha + c_dst[1] * (1 - alpha)
        b = src[2] * alpha + c_dst[2] * (1 - alpha)
        c_dst = (r, g, b)
    return c_dst

def build_palette(layers=4, bg_color=(255, 255, 255), alpha=0.5):
    # キャッシュファイルのパス生成（プロジェクトルートの 03_Outputs/cache/ に保存）
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    cache_dir = os.path.join(project_root, "03_Outputs", "cache")
    os.makedirs(cache_dir, exist_ok=True)
    cache_file = os.path.join(cache_dir, f"palette_cache_{layers}L_bg{bg_color[0]}-{bg_color[1]}-{bg_color[2]}_a{int(alpha*100)}.pkl")
    
    if os.path.exists(cache_file):
        print(f"📦 キャッシュされたパレット辞書を読み込んでいます: {os.path.basename(cache_file)}...")
        try:
            with open(cache_file, 'rb') as f:
                palette = pickle.load(f)
            print(f"完了！ ユニーク色数 = {len(palette):,} 色")
            return palette
        except Exception as e:
            print(f"キャッシュの読み込みに失敗しました。再計算します。({e})")
            
    print(f"⛏️ 新しい {layers} 層のパレット辞書を計算・生成しています。(初回のみ時間がかかります)")

    # DPアプローチ: (R,G,B)をキーとして、それを生成できる「最良のブロック組み合わせ(tuple)」を保持する
    # 完全に同じRGBになる組み合わせが無数に存在するため、キーをRGBに限定して組み合わせを上書きしていくことでメモリ爆発を防ぐ
    
    # 0層（背景色のみ）
    current_dp = {
        bg_color: () 
    }
    
    color_names = list(MC_COLORS.keys())
    
    for L in range(1, layers + 1):
        next_dp = {}
        for prev_c, prev_combo in current_dp.items():
            for c_name in color_names:
                new_glass = MC_COLORS[c_name]
                r = new_glass[0] * alpha + prev_c[0] * (1 - alpha)
                g = new_glass[1] * alpha + prev_c[1] * (1 - alpha)
                b = new_glass[2] * alpha + prev_c[2] * (1 - alpha)
                
                final_rgb = (int(round(r)), int(round(g)), int(round(b)))
                new_combo = prev_combo + (c_name,)
                
                # 同じ色に到達しても、新しく上書きする(あるいは何もしない)ことでユニーク色数サイズの辞書に抑える
                # 今回はただ1つの「その色に到達するレシピ」が分かれば良いので上書きでOK
                if final_rgb not in next_dp:
                    next_dp[final_rgb] = new_combo
                    
        current_dp = next_dp
        print(f"  {L}層目の計算完了: 保持しているユニーク色数 = {len(current_dp):,} 色")

    # cKDTree等で検索しやすくするため、既存の [(final_color, combo), ...] 形式のリストに変換
    palette = []
    for final_rgb, combo in current_dp.items():
        palette.append((final_rgb, combo))
        
    # キャッシュを保存
    print(f"💾 計算したパレット辞書をキャッシュとして保存しています...")
    try:
        with open(cache_file, 'wb') as f:
            pickle.dump(palette, f)
        print("保存完了！次回からは瞬時に起動します。")
    except Exception as e:
        print(f"キャッシュの保存に失敗しました: {e}")
        
    return palette

def calculate_luminance_map(pixels, width, height):
    """画像からピクセルごとの目標輝度(0〜15)を算出する。
    案E: 2パスでヒストグラム正規化。明るい画像全体が輝度max張りつきになるのを防ぐ。"""
    raw_lum = {}
    lum_min = float('inf')
    lum_max = float('-inf')
    for x in range(width):
        for y in range(height):
            pixel = pixels[x, y]
            if len(pixel) > 3 and pixel[3] == 0:
                continue  # 透明ピクセルはスキップ
            r, g, b = pixel[:3]
            y_val = 0.299 * r + 0.587 * g + 0.114 * b
            raw_lum[(x, y)] = y_val
            if y_val < lum_min: lum_min = y_val
            if y_val > lum_max: lum_max = y_val
    lum_range = lum_max - lum_min
    lum_map = [[0 for _ in range(height)] for _ in range(width)]
    for x in range(width):
        for y in range(height):
            if (x, y) not in raw_lum:
                continue
            y_val = raw_lum[(x, y)]
            normalized = (y_val - lum_min) / lum_range if lum_range > 0 else 0.0
            lum_map[x][y] = int(round(normalized * 15))
    return lum_map

def optimize_light_placement(lum_map, width, height):
    """目標輝度を満たすため、マンハッタン距離による滲みを考慮してライトブロックを疎に配置する"""
    # 最終的なライトブロックの配置レベル (置かない場合は0)
    placement_map = [[0 for _ in range(height)] for _ in range(width)]
    # 現在のシミュレートされた光レベル空間
    simulated_light = [[0 for _ in range(height)] for _ in range(width)]
    
    # 目標輝度が高い順(15から1へ)に処理していく
    for target in range(15, 0, -1):
        for x in range(width):
            for y in range(height):
                # このピクセルがターゲット輝度以上を求めており、まだシミュレーション上で光が足りていない場合
                if lum_map[x][y] >= target and simulated_light[x][y] < lum_map[x][y]:
                    # ここにライトブロックを配置
                    placement_level = lum_map[x][y]
                    placement_map[x][y] = placement_level
                    
                    # この光源から周囲へ光の拡散(滲み)をシミュレート
                    # 光レベルLの光源は周囲|dx|+|dy|の範囲で L - (|dx|+|dy|) の明るさを生む
                    # 最短距離での計算を簡略化(実際はZ軸の空気やガラス透過分も減衰するが、今回はXY平面の近似で十分機能する層単位の計算)
                    radius = placement_level
                    for dx in range(-radius, radius + 1):
                        for dy in range(-radius, radius + 1):
                            dist = abs(dx) + abs(dy) # マンハッタン距離
                            nx, ny = x + dx, y + dy
                            
                            # ガラスによる透過減衰(1)を含めると実際はさらに減るが、ここでは同一層(空気内)を伝播する光として扱う
                            if 0 <= nx < width and 0 <= ny < height and dist <= placement_level:
                                arriving_light = placement_level - dist
                                if simulated_light[nx][ny] < arriving_light:
                                    simulated_light[nx][ny] = arriving_light
    return placement_map

def process_image(input_path, output_prefix, max_size=256, layers=4, orientation="floor"):
    print(f"[{input_path}] の読み込み中...")
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # 最大サイズに収まるようにアスペクト比を維持して計算
    scale = min(max_size / width, max_size / height)
    # 小さな画像を「元のサイズを維持」設定などで無理やり巨大化(Upscale)させないように、倍率の上限を1.0にする
    if scale > 1.0:
        scale = 1.0
        
    blocks_x = int(width * scale)
    blocks_y = int(height * scale)
    # 最低でも1x1は確保
    blocks_x = max(1, blocks_x)
    blocks_y = max(1, blocks_y)
    print(f"出力量(最大{max_size}): 横 {blocks_x} x 縦 {blocks_y} ブロック, 向き: {orientation}")
    
    # NEARESTを使用して1ピクセル＝1ブロックの色をサンプリング
    small_img = img.resize((blocks_x, blocks_y), Image.Resampling.NEAREST)
    pixels = small_img.load()
    
    # -- 設定項目 --
    BACKGROUND = (255, 255, 255)    # 新しい画像は明るいので昼の空や白背景(白)を前提に設定
    ALPHA = 0.40                    # 検証により証明された真のガラス不透明度(40%)
    
    palette = build_palette(layers=layers, bg_color=BACKGROUND, alpha=ALPHA)
    
    tree = None
    if HAS_SCIPY:
        print("scipy.spatial.cKDTree を使い、マッピングを高速化します...")
        tree = cKDTree([p[0] for p in palette])
    else:
        print("Scipyがないため線形探索を行います。時間がかかります。")
        
    # 各出力用の画像を用意
    preview_img = Image.new("RGB", (blocks_x, blocks_y))
    preview_pixels = preview_img.load()
    
    layer_imgs = [Image.new("RGB", (blocks_x, blocks_y), (0,0,0)) for _ in range(layers)]
    layer_pixels = [layer_imgs[i].load() for i in range(layers)]
    
    # Schematicの初期化
    if HAS_MCSCHEMATIC:
        schem = mcschematic.MCSchematic()
        print("MCSchematic を使用して .schem ファイルも生成します。")
        
        # 光レベル(Luminance)マップの計算と最適化配置の決定
        print("miniLED: スパース配置光源のシミュレーション計算中...")
        target_lum_map = calculate_luminance_map(pixels, blocks_x, blocks_y)
        light_placement = optimize_light_placement(target_lum_map, blocks_x, blocks_y)
    
    print("ピクセルごとに最適なガラスの重ね合わせを計算中...")
    
    # NumPyとScipyが使用可能な場合は、CPUマルチスレッドを使って全ピクセルを一括計算
    flat_indices = None
    alpha_flat = None
    if tree and HAS_NUMPY:
        print("⚡ CPUマルチスレッド(NumPy/SciPy)機能で全ピクセルを爆速一括計算中...")
        pixels_array = np.array(small_img)  # RGBA
        alpha_flat = pixels_array[:, :, 3].reshape(-1)
        flat_pixels = pixels_array[:, :, :3].reshape(-1, 3)
        # workers=-1 means use all available cores
        _, flat_indices = tree.query(flat_pixels, workers=-1)
    
    color_cache = {}
    
    # 変換処理
    for y in range(blocks_y):
        for x in range(blocks_x):
            # 透明ピクセルはスキップ (アルファ=0)
            pixel_alpha = alpha_flat[y * blocks_x + x] if alpha_flat is not None else pixels[x, y][3]
            if pixel_alpha == 0:
                continue

            if flat_indices is not None:
                idx = flat_indices[y * blocks_x + x]
                best_final_color, best_combo = palette[idx]
            else:
                target = pixels[x, y][:3] # Ensure RGB
                if target in color_cache:
                    best_final_color, best_combo = color_cache[target]
                else:
                    if tree:
                        dist, idx = tree.query(target)
                        best_final_color, best_combo = palette[idx]
                    else:
                        min_dist = float('inf')
                        best_combo = None
                        best_final_color = None
                        for final_color, combo in palette:
                            dist = (target[0]-final_color[0])**2 + (target[1]-final_color[1])**2 + (target[2]-final_color[2])**2
                            if dist < min_dist:
                                min_dist = dist
                                best_final_color = final_color
                                best_combo = combo
                    color_cache[target] = (best_final_color, best_combo)

            # プレビュー画像に合成色を書き込み
            preview_pixels[x, y] = (int(best_final_color[0]), int(best_final_color[1]), int(best_final_color[2]))
            
            # 各レイヤーデータへの書き込み
            for i in range(layers):
                c_name = best_combo[i]
                # プレビュー保存用に元の色をintに変換（MC_COLORSは計算用のfloatになっているため）
                layer_color = MC_COLORS[c_name]
                layer_pixels[i][x, y] = (int(layer_color[0]), int(layer_color[1]), int(layer_color[2]))
                
                # Schematicへのブロック配置
                if HAS_MCSCHEMATIC:
                    block_id = MC_BLOCK_IDS[c_name]
                    
                    if orientation == "wall":
                        mc_x = x
                        mc_y = blocks_y - 1 - y
                        mc_glass_depth = i * 2       # ガラス層: Z=0, 2, 4, 6...
                        mc_light_depth = i * 2 + 1   # 空気の層(バックライト): Z=1, 3, 5, 7...
                        
                        schem.setBlock((mc_x, mc_y, mc_glass_depth), block_id)
                        
                        # 光源配置シミュレーションによって必要と判断されたライトをギャップに配置
                        placed_light_level = light_placement[x][y]
                        if placed_light_level > 0:
                            light_block_id = f"minecraft:light[level={placed_light_level}]"
                            schem.setBlock((mc_x, mc_y, mc_light_depth), light_block_id)
                            
                    elif orientation == "floor":
                        mc_x = x
                        mc_z = y  
                        mc_glass_height = i * 2      # ガラス層: Y=0, 2, 4, 6...
                        mc_light_height = i * 2 + 1  # 空気の層: Y=1, 3, 5, 7...
                        
                        schem.setBlock((mc_x, mc_glass_height, mc_z), block_id)
                        
                        placed_light_level = light_placement[x][y]
                        if placed_light_level > 0:
                            light_block_id = f"minecraft:light[level={placed_light_level}]"
                            schem.setBlock((mc_x, mc_light_height, mc_z), light_block_id)
                    
    # 画像の保存
    preview_path = f"{output_prefix}_preview.png"
    preview_img.save(preview_path)
    print(f"完了！ 【プレビュー画像】を保存しました: {preview_path}")
    
    for i in range(layers):
        layer_path = f"{output_prefix}_layer{i+1}.png"
        layer_imgs[i].save(layer_path)
        print(f"完了！ 【設計図Layer {i+1} (奥から{i+1}層目)】を保存しました: {layer_path}")

    # Schematicの保存
    if HAS_MCSCHEMATIC:
        import os
        schem_dir = os.path.dirname(os.path.abspath(output_prefix)) or "."
        schem_name = os.path.basename(output_prefix) + "_schem"
        schem_path = os.path.join(schem_dir, schem_name + ".schem")
        # mcschematicのsave関数: 第1引数はディレクトリパス、第2引数はファイル名(拡張子なし)
        schem.save(schem_dir, schem_name, mcschematic.Version.JE_1_20_1)
        print(f"完了！ 【Schematicデータ】を保存しました: {schem_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("使い方: python minecraft_glass_layering.py <入力画像パス> <出力ファイル名の接頭辞> [最大サイズ(デフォルト256)] [層の数] [向き: floor または wall]")
        print("例: python minecraft_glass_layering.py input.png output_gradient 256 4 floor")
        sys.exit(1)
        
    in_path = sys.argv[1]
    out_prefix = sys.argv[2]
    max_s = int(sys.argv[3]) if len(sys.argv) > 3 else 256
    L = int(sys.argv[4]) if len(sys.argv) > 4 else 4
    orient = sys.argv[5].lower() if len(sys.argv) > 5 else "floor"
    
    process_image(in_path, out_prefix, max_s, L, orient)
