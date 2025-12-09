# Node.js Installation Helper Script
# This script helps download and set up Node.js

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Node.js Installation Helper" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is already installed
$nodeInstalled = $false
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "✅ Node.js is already installed: $nodeVersion" -ForegroundColor Green
        $nodeInstalled = $true
    }
} catch {
    $nodeInstalled = $false
}

if ($nodeInstalled) {
    Write-Host ""
    Write-Host "Node.js is ready! You can now run:" -ForegroundColor Green
    Write-Host "  npm install" -ForegroundColor Yellow
    Write-Host "  npm run dev" -ForegroundColor Yellow
    exit 0
}

Write-Host "❌ Node.js is not installed" -ForegroundColor Red
Write-Host ""

# Check if we can download Node.js
Write-Host "Attempting to download Node.js installer..." -ForegroundColor Yellow
Write-Host ""

$downloadUrl = "https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi"
$installerPath = "$env:TEMP\nodejs-installer.msi"

try {
    Write-Host "Downloading Node.js installer..." -ForegroundColor Cyan
    Write-Host "URL: $downloadUrl" -ForegroundColor Gray
    Write-Host "Save to: $installerPath" -ForegroundColor Gray
    Write-Host ""
    
    # Download using Invoke-WebRequest
    Invoke-WebRequest -Uri $downloadUrl -OutFile $installerPath -UseBasicParsing
    
    if (Test-Path $installerPath) {
        Write-Host "✅ Download complete!" -ForegroundColor Green
        Write-Host ""
        Write-Host "The installer has been downloaded to:" -ForegroundColor Yellow
        Write-Host "  $installerPath" -ForegroundColor White
        Write-Host ""
        Write-Host "Would you like to run the installer now? (Y/N)" -ForegroundColor Cyan
        $response = Read-Host
        
        if ($response -eq 'Y' -or $response -eq 'y') {
            Write-Host ""
            Write-Host "Starting Node.js installer..." -ForegroundColor Yellow
            Write-Host "Please follow the installation wizard." -ForegroundColor Yellow
            Write-Host "IMPORTANT: Make sure 'Add to PATH' is checked!" -ForegroundColor Red
            Write-Host ""
            
            Start-Process -FilePath "msiexec.exe" -ArgumentList "/i `"$installerPath`"" -Wait
            
            Write-Host ""
            Write-Host "Installation complete!" -ForegroundColor Green
            Write-Host "Please RESTART your terminal, then run:" -ForegroundColor Yellow
            Write-Host "  npm install" -ForegroundColor White
            Write-Host "  npm run dev" -ForegroundColor White
        } else {
            Write-Host ""
            Write-Host "You can manually run the installer from:" -ForegroundColor Yellow
            Write-Host "  $installerPath" -ForegroundColor White
        }
    }
} catch {
    Write-Host ""
    Write-Host "❌ Automatic download failed" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js manually:" -ForegroundColor Yellow
    Write-Host "  1. Visit: https://nodejs.org/" -ForegroundColor Cyan
    Write-Host "  2. Download the LTS version" -ForegroundColor White
    Write-Host "  3. Run the installer" -ForegroundColor White
    Write-Host "  4. Make sure 'Add to PATH' is checked" -ForegroundColor Red
    Write-Host "  5. Restart your terminal" -ForegroundColor White
    Write-Host "  6. Then run: npm install && npm run dev" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan

