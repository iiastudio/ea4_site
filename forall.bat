@echo off
setlocal

REM 設定 GitHub 使用者名稱和存取權杖



REM 設定本地資料夾路徑和儲存庫 URL
set LOCAL_FOLDER_PATH=E:\xampp\htdocs\iia_site
set REPO_URL=https://github.com/iiastudio/ea4_site

REM 切換到本地資料夾
cd /d "%LOCAL_FOLDER_PATH%"

REM 初始化本地 Git 儲存庫
git init

REM 加入所有檔案到 Git
git add .

REM 提交更改
git commit -m "Batch upload to GitHub repository"

REM 設定遠端儲存庫
git remote add origin %REPO_URL%

REM 使用存取權杖驗證向 GitHub 上傳
git push origin master --force --quiet

REM 移除本地 Git 儲存庫


echo "Batch upload to GitHub repository completed."
pause