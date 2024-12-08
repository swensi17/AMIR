from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

# Установка текущей директории как корневой для сервера
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Создаем сервер на порту 8000
server_address = ('', 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print('Сервер запущен на порту 8000')
print('Откройте браузер и перейдите по адресу: http://localhost:8000')
httpd.serve_forever()
