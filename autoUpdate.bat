@echo off
cd /d "E:\xampp\htdocs\iia_site\"
git init
git pull origin main
git add .
git commit -m "update files"
git remote add origin https://github.com/iiastudio/ea4_site
git push -u origin main