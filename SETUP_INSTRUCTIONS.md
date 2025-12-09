# Setup Instructions

## Node.js is Required

To run this React portfolio, you need Node.js installed on your system.

## Quick Setup

### Step 1: Install Node.js

1. Download Node.js from: **https://nodejs.org/**
2. Choose the **LTS (Long Term Support)** version
3. Run the installer and follow the setup wizard
4. **Important:** Make sure to check "Add to PATH" during installation
5. Restart your terminal/command prompt after installation

### Step 2: Verify Installation

Open a new terminal and run:
```bash
node --version
npm --version
```

Both commands should show version numbers.

### Step 3: Install Dependencies

In the project directory, run:
```bash
npm install
```

This will install all required packages (React, Vite, etc.)

### Step 4: Start Development Server

```bash
npm run dev
```

The server will start and you'll see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### Step 5: Open in Browser

Open your browser and navigate to: **http://localhost:3000**

## Alternative: Use npx (if Node.js is installed but npm not in PATH)

If you have Node.js but npm isn't working, try:
```bash
npx vite
```

## Troubleshooting

### "node is not recognized"
- Node.js is not installed or not in PATH
- Restart your terminal after installing Node.js
- Reinstall Node.js and ensure "Add to PATH" is checked

### "Port 3000 already in use"
- Another application is using port 3000
- Change the port in `vite.config.js` or stop the other application

### "npm install fails"
- Check your internet connection
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

## Need Help?

If you continue to have issues:
1. Make sure Node.js is properly installed
2. Restart your computer after installing Node.js
3. Use a fresh terminal window
4. Check that you're in the correct project directory

