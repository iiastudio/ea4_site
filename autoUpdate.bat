@echo off
cd /d "E:\xampp\htdocs\iia_site"
git init
git add .
git commit -m "Add backup files"
git remote add origin https://github.com/iiastudio/ea4_site
git push -u origin master