#!/usr/bin/env python
from livereload import Server, shell
server = Server()
server.watch('index.html')
server.serve()
