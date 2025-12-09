# 🚀 How to Run the Portfolio

## ⚠️ Current Status

**Node.js is not installed** on your system. You need to install it first before running the portfolio.

## 📥 Step 1: Install Node.js

1. **Download Node.js**: Go to https://nodejs.org/
2. **Choose**: LTS (Long Term Support) version - recommended
3. **Install**: Run the installer
4. **IMPORTANT**: Make sure "Add to PATH" is checked during installation
5. **Restart**: Close and reopen your terminal/PowerShell after installation

## ✅ Step 2: Verify Installation

After restarting your terminal, run:
```bash
node --version
npm --version
```

Both should show version numbers (e.g., v20.x.x and 10.x.x)

## 🎯 Step 3: Run the Portfolio

Once Node.js is installed, navigate to this folder and run:

```bash
npm install
npm run dev
```

## 🌐 Step 4: View in Browser

After `npm run dev` starts, you'll see:
```
➜  Local:   http://localhost:3000/
```

Open that URL in your browser!

---

## 🔄 Alternative: Use the Batch File

After installing Node.js, you can simply **double-click `start.bat`** and it will:
- Check if Node.js is installed
- Install dependencies automatically
- Start the server
- Open in your browser

---

## ❓ Troubleshooting

**"npm is not recognized"**
- Node.js is not installed OR not in PATH
- Restart your terminal after installing Node.js
- Reinstall Node.js and ensure "Add to PATH" is checked

**"Port 3000 already in use"**
- Another app is using port 3000
- Close that app or change the port in `vite.config.js`

---

**Your portfolio code is 100% ready - just need Node.js to run it!** ✨

