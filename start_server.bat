@echo off
echo Starting local server at http://localhost:8000
start "" http://localhost:8000/index.html
python server.py
pause