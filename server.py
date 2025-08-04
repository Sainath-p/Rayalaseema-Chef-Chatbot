#!/usr/bin/env python3
"""
Simple HTTP Server for Rayalaseema Chef Chatbot
Run this file to start a local server and avoid CORS issues.

Usage:
    python server.py
    
Then open: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🍛 Rayalaseema Chef Server starting...")
        print(f"📍 Server running at: http://localhost:{PORT}")
        print(f"🌐 Opening browser automatically...")
        print(f"🛑 Press Ctrl+C to stop the server")
        
        # Automatically open the browser
        webbrowser.open(f"http://localhost:{PORT}")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n🛑 Server stopped. Thank you for using Rayalaseema Chef!")

if __name__ == "__main__":
    main()
