@echo off
cd /d "E:\xampp\htdocs\iia_site"  REM 導航到包含要備份的檔案的資料夾，用實際的路徑取代 "path/to/your/folder"
git init
git add .
git commit -m "Add backup files"
git remote add origin https://github.com/iiastudio/ea4_site  REM 將 <repository_url> 替換為你的 GitHub repository 的 URL 或名稱
git push -u origin master