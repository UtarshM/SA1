# 📧 EmailJS Setup Guide for Contact Form

## Overview
The contact form is configured to send emails using EmailJS, a free service that allows you to send emails directly from your website without a backend server.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for up to 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the connection steps
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Scalezix Academy contact form.
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

### Step 5: Update Your Code
Open `src/pages/Contact.tsx` and replace these values (around line 30):

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

**Example:**
```typescript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'xYz123AbC456';
```

---

## 📝 EmailJS Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (academy@scalezix.com)

---

## 🎯 Testing Your Setup

1. After updating the credentials, rebuild your app:
   ```bash
   npm run build
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Go to the Contact page
4. Fill out the form and submit
5. Check your email inbox (the one you connected to EmailJS)

---

## 🔒 Security Notes

### ✅ Safe to Commit
- Service ID
- Template ID
- Public Key

These are **public keys** and are safe to include in your frontend code. They're meant to be exposed.

### ❌ Never Commit
- Your EmailJS account password
- Private API keys (if you upgrade to paid plan)

---

## 💰 EmailJS Free Plan Limits

- **200 emails/month** - Free forever
- **50 emails/day** - Rate limit
- **1 email service** - Can connect one email account
- **3 email templates** - Can create up to 3 templates

**Need more?** Upgrade to paid plan starting at $7/month for 1,000 emails.

---

## 🛠️ Alternative: Using Environment Variables (Optional)

For better security, you can use environment variables:

### 1. Create `.env` file in root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. Update `src/pages/Contact.tsx`:
```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

### 3. Add to `.gitignore`:
```
.env
```

---

## 📧 Email Template Examples

### Professional Template
```
Subject: New Enquiry: {{subject}}

Hello Scalezix Academy Team,

You have received a new enquiry from your website.

Contact Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was automatically sent from the Scalezix Academy contact form.
Please respond to: {{from_email}}
```

### Simple Template
```
New Contact Form Submission

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}
```

---

## 🔧 Troubleshooting

### Issue: "Failed to send email"
**Solutions:**
1. Check your Service ID, Template ID, and Public Key are correct
2. Verify your email service is connected in EmailJS dashboard
3. Check browser console for specific error messages
4. Ensure you haven't exceeded the 200 emails/month limit

### Issue: "Email not received"
**Solutions:**
1. Check your spam/junk folder
2. Verify the email address in EmailJS service settings
3. Test the template in EmailJS dashboard (Test button)
4. Wait a few minutes (sometimes there's a delay)

### Issue: "CORS error"
**Solutions:**
1. Make sure you're using the correct Public Key (not Private Key)
2. Check that your domain is allowed in EmailJS settings
3. For localhost testing, EmailJS should work by default

---

## 📱 Auto-Reply to Users (Optional)

You can set up an auto-reply to users who submit the form:

### 1. Create a second template:
```
Subject: Thank you for contacting Scalezix Academy

Dear {{from_name}},

Thank you for reaching out to Scalezix Academy!

We have received your enquiry regarding: {{subject}}

Our team will review your message and respond within 24-48 hours with relevant cohort details.

In the meantime, feel free to explore our programs at:
https://scalezixacademy.com/programs

Best regards,
Scalezix Academy Team

---
This is an automated response. Please do not reply to this email.
```

### 2. Update Contact.tsx to send two emails:
```typescript
// Send to you
await emailjs.send(serviceId, templateId, templateParams, publicKey);

// Send auto-reply to user
await emailjs.send(
  serviceId,
  'template_autoreply', // Your auto-reply template ID
  {
    to_email: formData.email,
    from_name: formData.name,
    subject: formData.subject
  },
  publicKey
);
```

---

## 🎉 You're All Set!

Once configured, your contact form will:
- ✅ Send emails to academy@scalezix.com
- ✅ Show success/error messages to users
- ✅ Reset the form after successful submission
- ✅ Display loading state while sending
- ✅ Handle errors gracefully

---

## 📞 Need Help?

- **EmailJS Documentation:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support:** [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
- **Video Tutorial:** Search "EmailJS React tutorial" on YouTube

---

**Last Updated:** December 24, 2025
