# Quick Email Setup Guide

## ⚡ Fast Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to: **https://www.emailjs.com/**
2. Click **Sign Up** (free account)
3. Verify your email address

### Step 2: Connect Gmail
1. In EmailJS dashboard, click **Email Services**
2. Click **Add New Service**
3. Choose **Gmail**
4. Click **Connect Account**
5. Sign in with: **youngtechwork@gmail.com**
6. Allow permissions
7. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Click **Email Templates** in dashboard
2. Click **Create New Template**
3. **Template Name:** Contact Form
4. **Subject:** New Contact from YOUNG tech Portfolio - {{from_name}}
5. **Content:** Copy and paste this:

```
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project Type: {{project_type}}
Timeline: {{timeline}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

6. **To Email:** `youngtechwork@gmail.com`
7. **From Name:** `{{from_name}}`
8. **Reply To:** `{{from_email}}`
9. Click **Save**
10. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Click **Account** → **General**
2. Find **Public Key** (also called API Key)
3. **Copy it** (looks like: `xxxxxxxxxxxxx`)

### Step 5: Update Configuration
1. Open: `src/config/emailjs.config.js`
2. Replace the three values:
   ```javascript
   serviceId: 'service_xxxxxxx',     // Your Service ID
   templateId: 'template_xxxxxxx',   // Your Template ID
   publicKey: 'xxxxxxxxxxxxx'        // Your Public Key
   ```
3. Save the file

### Step 6: Test It!
1. Restart your dev server: `npm run dev`
2. Go to contact form
3. Fill it out and submit
4. Check **youngtechwork@gmail.com** - you should receive the email!

## ✅ That's It!

Once configured, all form submissions will be sent to your email automatically.

## 🆘 Troubleshooting

- **Not receiving emails?** Check spam folder
- **Error in console?** Double-check your IDs are correct
- **Need help?** See `EMAIL_SETUP_INSTRUCTIONS.md` for detailed help

---

**Free Tier:** 200 emails/month - Perfect for a portfolio!

