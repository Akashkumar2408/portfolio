@echo off
echo ========================================
echo   Node.js Auto-Installation Helper
echo ========================================
echo.

REM Check if Node.js is already installed
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js is already installed!
    node --version
    npm --version
    echo.
    echo Ready to install dependencies...
    echo.
    call npm install
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo [SUCCESS] Dependencies installed!
        echo.
        echo Starting development server...
        echo.
        call npm run dev
    )
    pause
    exit /b 0
)

echo [INFO] Node.js not found. Starting installation process...
echo.

REM Try to download Node.js installer
echo Downloading Node.js installer...
echo This may take a few minutes...
echo.

powershell -Command "& {Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi' -OutFile '%TEMP%\nodejs-installer.msi' -UseBasicParsing; Write-Host 'Download complete!'}"

if exist "%TEMP%\nodejs-installer.msi" (
    echo.
    echo [OK] Download complete!
    echo.
    echo Starting installer...
    echo IMPORTANT: Make sure "Add to PATH" is checked during installation!
    echo.
    start /wait msiexec.exe /i "%TEMP%\nodejs-installer.msi"
    
    echo.
    echo [INFO] Installation complete!
    echo.
    echo Please RESTART this terminal window, then run:
    echo   npm install
    echo   npm run dev
    echo.
) else (
    echo.
    echo [ERROR] Download failed.
    echo.
    echo Please install Node.js manually:
    echo   1. Visit: https://nodejs.org/
    echo   2. Download the LTS version
    echo   3. Run the installer
    echo   4. Make sure "Add to PATH" is checked
    echo   5. Restart terminal and run: npm install ^&^& npm run dev
    echo.
)

pause

