from PyQt5.QtCore import *
from PyQt5.QtWebEngineWidgets import *
from PyQt5.QtWidgets import QApplication
from threading import Timer
import sys
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
ip_addr=s.getsockname()[0]
s.close()
def ui(location):
    qt_app = QApplication(sys.argv)
    web = QWebEngineView()
    web.setWindowTitle("FRBA")
    web.resize(900, 800)
    web.setZoomFactor(1.5)
    web.load(QUrl(location))
    web.show()
    sys.exit(qt_app.exec_())

# if __name__ == "__main__":
Timer(1,lambda: ui("http://{}".format(ip_addr)+":5000")).start()