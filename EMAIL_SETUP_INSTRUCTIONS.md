# Email Setup Instructions for Contact Form

The contact form is now configured to send emails using EmailJS. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (free tier allows 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (youngtechwork@gmail.com)
5. Copy the **Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
New contact form submission from YOUNG tech portfolio:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project Type: {{project_type}}
Timeline: {{timeline}}

Message:
{{message}}

---
This email was sent from the YOUNG tech portfolio contact form.
```

4. Set **To Email** to: `youngtechwork@gmail.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{from_email}}`
7. Click **Save**
8. Copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update the Contact Form

1. Open `src/components/Contact.jsx`
2. Find these lines (around line 30-32):
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID'
   const publicKey = 'YOUR_PUBLIC_KEY'
   ```
3. Replace with your actual values:
   ```javascript
   const serviceId = 'service_xxxxxxx'  // Your EmailJS Service ID
   const templateId = 'template_xxxxxxx' // Your EmailJS Template ID
   const publicKey = 'xxxxxxxxxxxxx'      // Your EmailJS Public Key
   ```

## Step 6: Install Dependencies

Run this command in your terminal:
```bash
npm install
```

This will install the EmailJS package.

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email (youngtechwork@gmail.com) - you should receive the message!

## Alternative: Quick Setup Script

If you prefer, you can also add the EmailJS script directly in `index.html` and use it without installing the package. But the current setup with the npm package is recommended.

## Troubleshooting

- **Email not received?** Check spam folder
- **Error in console?** Make sure all IDs are correct
- **Form not submitting?** Check browser console for errors
- **Need more emails?** EmailJS free tier: 200/month, paid plans available

## Security Note

The Public Key is safe to expose in frontend code. EmailJS uses it to identify your account but doesn't allow unauthorized access.

---

**Need help?** Visit EmailJS documentation: https://www.emailjs.com/docs/

