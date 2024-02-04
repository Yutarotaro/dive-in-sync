import cv2
import numpy as np

def convert_color_in_image(image_path, target_color_rgb, replacement_color_rgb):
    # 画像を読み込む
    image = cv2.imread(image_path)

    # RGBからHSVに色空間を変換
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # 指定された元の色と置換色をRGBからHSVに変換
    target_color_hsv = cv2.cvtColor(np.uint8([[target_color_rgb]]), cv2.COLOR_RGB2HSV)[0][0]
    replacement_color_bgr = replacement_color_rgb[::-1]  # OpenCVはBGR形式を使用

    # HSV色空間での色の範囲を定義（ここでは範囲を広めに取っています）
    lower_bound = np.array([target_color_hsv[0] - 10, 100, 100])
    upper_bound = np.array([target_color_hsv[0] + 10, 255, 255])

    # マスクを作成して、特定の色範囲内のピクセルを選択
    mask = cv2.inRange(hsv_image, lower_bound, upper_bound)

    # マスクされた部分を新しい色で置き換え
    image[mask > 0] = replacement_color_bgr

    # 結果を表示
    cv2.imshow('Converted Image', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

# 使用例: 青色の範囲を赤色に変更する
convert_color_in_image('icon.png', [0, 0, 255], [255, 0, 0])

