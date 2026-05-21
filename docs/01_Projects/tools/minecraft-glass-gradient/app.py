import sys
import os
import threading
import traceback

from PyQt6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QLabel, QLineEdit, QCheckBox, QComboBox, QPushButton, QProgressBar,
    QFrame
)
from PyQt6.QtCore import Qt, pyqtSignal, QObject
from PyQt6.QtGui import QFont

# Setup standard path to find the processing logic
sys.path.append(os.path.dirname(__file__))

try:
    from minecraft_glass_layering import process_image
except ImportError:
    print("Warning: Backend logic not found. Generation will fail.")
    def process_image(*args, **kwargs):
        raise NotImplementedError("Backend scripts are missing.")

class WorkerSignals(QObject):
    finished = pyqtSignal(str)
    error = pyqtSignal(str)

class DropZone(QFrame):
    fileDropped = pyqtSignal(str)
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setAcceptDrops(True)
        self.setStyleSheet("""
            QFrame {
                border: 2px dashed #666;
                border-radius: 10px;
                background-color: #2b2b2b;
            }
        """)
        
        layout = QVBoxLayout(self)
        self.label = QLabel("ここに画像をドラッグ＆ドロップしてください\n\n(PNG, JPG)")
        self.label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.label.setFont(QFont("Arial", 14))
        self.label.setStyleSheet("color: #ccc; border: none;")
        layout.addWidget(self.label)
        
    def dragEnterEvent(self, event):
        if event.mimeData().hasUrls():
            event.accept()
        else:
            event.ignore()
            
    def dropEvent(self, event):
        urls = event.mimeData().urls()
        if urls:
            path = urls[0].toLocalFile()
            ext = os.path.splitext(path)[1].lower()
            if ext in ['.png', '.jpg', '.jpeg']:
                self.label.setText(f"選択済み:\n{os.path.basename(path)}")
                self.fileDropped.emit(path)
            else:
                self.label.setText("エラー: 画像ファイルのみ対応しています\n(PNG, JPG)")

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("🟩 Minecraft Glass Gradient Tool")
        self.resize(600, 650)
        self.selected_file = None
        
        self.signals = WorkerSignals()
        self.signals.finished.connect(self.on_generation_success)
        self.signals.error.connect(self.on_generation_error)
        
        self.setup_ui()
        
    def setup_ui(self):
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        
        main_layout = QVBoxLayout(central_widget)
        main_layout.setContentsMargins(20, 20, 20, 20)
        main_layout.setSpacing(15)
        
        # Header
        header = QLabel("🟩 Minecraft Glass")
        header.setFont(QFont("Arial", 24, QFont.Weight.Bold))
        main_layout.addWidget(header)
        
        desc = QLabel("画像をMinecraftのガラスの重なりで表現する設計図を生成します。\n計算処理はフルパワーで実行されます。")
        desc.setStyleSheet("color: #aaa;")
        main_layout.addWidget(desc)
        
        # Settings Layout
        settings_frame = QFrame()
        settings_frame.setStyleSheet("QFrame { background-color: #333; border-radius: 8px; padding: 10px; }")
        settings_layout = QVBoxLayout(settings_frame)
        
        row1 = QHBoxLayout()
        row1.addWidget(QLabel("最大サイズ (px):"))
        self.size_entry = QLineEdit("128")
        self.size_entry.setFixedWidth(60)
        row1.addWidget(self.size_entry)
        
        self.keep_size_cb = QCheckBox("元のサイズを維持")
        self.keep_size_cb.toggled.connect(self.on_keep_size_toggle)
        row1.addWidget(self.keep_size_cb)
        row1.addStretch()
        settings_layout.addLayout(row1)
        
        row2 = QHBoxLayout()
        row2.addWidget(QLabel("層の数:"))
        self.layers_entry = QLineEdit("4")
        self.layers_entry.setFixedWidth(60)
        row2.addWidget(self.layers_entry)
        
        row2.addWidget(QLabel("向き:"))
        self.orient_combo = QComboBox()
        self.orient_combo.addItems(["floor", "wall"])
        row2.addWidget(self.orient_combo)
        row2.addStretch()
        settings_layout.addLayout(row2)
        
        main_layout.addWidget(settings_frame)
        
        # Drop Zone
        self.drop_zone = DropZone()
        self.drop_zone.setMinimumHeight(150)
        self.drop_zone.fileDropped.connect(self.on_file_selected)
        main_layout.addWidget(self.drop_zone)
        
        # Status
        self.status_label = QLabel("待機中...")
        self.status_label.setStyleSheet("color: #4caf50; font-weight: bold;")
        self.status_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        main_layout.addWidget(self.status_label)
        
        self.progress = QProgressBar()
        self.progress.setRange(0, 100)
        self.progress.setValue(0)
        self.progress.setTextVisible(False)
        main_layout.addWidget(self.progress)
        
        # Button
        self.generate_btn = QPushButton("✨ 設計図 (.schem) を生成する")
        self.generate_btn.setMinimumHeight(50)
        self.generate_btn.setFont(QFont("Arial", 16, QFont.Weight.Bold))
        self.generate_btn.setStyleSheet("""
            QPushButton {
                background-color: #007bff;
                color: white;
                border-radius: 8px;
            }
            QPushButton:hover {
                background-color: #0056b3;
            }
            QPushButton:disabled {
                background-color: #555;
            }
        """)
        self.generate_btn.clicked.connect(self.start_generation)
        main_layout.addWidget(self.generate_btn)
        
    def on_keep_size_toggle(self, checked):
        self.size_entry.setEnabled(not checked)
        
    def on_file_selected(self, path):
        self.selected_file = path
        self.status_label.setText("準備完了")
        self.status_label.setStyleSheet("color: #4caf50;")
        
    def start_generation(self):
        if not self.selected_file:
            self.status_label.setText("エラー: 画像をドロップしてください")
            self.status_label.setStyleSheet("color: #f44336;")
            return
            
        try:
            layers_val = int(self.layers_entry.text())
        except ValueError:
            layers_val = 4
            self.layers_entry.setText("4")
            
        if self.keep_size_cb.isChecked():
            max_size_val = 8192
        else:
            try:
                max_size_val = int(self.size_entry.text())
            except ValueError:
                max_size_val = 128
                self.size_entry.setText("128")
                
        orient_val = self.orient_combo.currentText()
        output_prefix = os.path.splitext(self.selected_file)[0] + "_miniled"
        
        self.generate_btn.setEnabled(False)
        self.progress.setRange(0, 0) # Indeterminate mode
        self.status_label.setText("CPUフルパワー計算中... (画面が固まることがありますが正常です)")
        self.status_label.setStyleSheet("color: #ff9800;")
        
        threading.Thread(
            target=self.run_process, 
            args=(self.selected_file, output_prefix, max_size_val, layers_val, orient_val),
            daemon=True
        ).start()
        
    def run_process(self, input_path, output_prefix, max_size, layers, orient):
        try:
            process_image(input_path, output_prefix, max_size=max_size, layers=layers, orientation=orient)
            self.signals.finished.emit(output_prefix)
        except Exception as e:
            err = traceback.format_exc()
            self.signals.error.emit(err)

    def on_generation_success(self, output_prefix):
        self.progress.setRange(0, 100)
        self.progress.setValue(100)
        self.generate_btn.setEnabled(True)
        self.status_label.setText(f"完了！ 保存先:\n{output_prefix}_schem.schem")
        self.status_label.setStyleSheet("color: #4caf50;")

    def on_generation_error(self, err_trace):
        self.progress.setRange(0, 100)
        self.progress.setValue(0)
        self.generate_btn.setEnabled(True)
        self.status_label.setText("計算中にエラーが発生しました。コンソールを確認してください。")
        self.status_label.setStyleSheet("color: #f44336;")
        print(err_trace)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    
    # Apply a dark theme palette
    app.setStyle("Fusion")
    palette = app.palette()
    from PyQt6.QtGui import QColor
    palette.setColor(palette.ColorRole.Window, QColor(53, 53, 53))
    palette.setColor(palette.ColorRole.WindowText, Qt.GlobalColor.white)
    palette.setColor(palette.ColorRole.Base, QColor(42, 42, 42))
    palette.setColor(palette.ColorRole.AlternateBase, QColor(66, 66, 66))
    palette.setColor(palette.ColorRole.ToolTipBase, Qt.GlobalColor.white)
    palette.setColor(palette.ColorRole.ToolTipText, Qt.GlobalColor.white)
    palette.setColor(palette.ColorRole.Text, Qt.GlobalColor.white)
    palette.setColor(palette.ColorRole.Button, QColor(53, 53, 53))
    palette.setColor(palette.ColorRole.ButtonText, Qt.GlobalColor.white)
    palette.setColor(palette.ColorRole.BrightText, Qt.GlobalColor.red)
    palette.setColor(palette.ColorRole.Link, QColor(42, 130, 218))
    palette.setColor(palette.ColorRole.Highlight, QColor(42, 130, 218))
    palette.setColor(palette.ColorRole.HighlightedText, Qt.GlobalColor.black)
    app.setPalette(palette)
    
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
