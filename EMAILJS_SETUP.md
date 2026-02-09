# EmailJS Setup Guide for Brizon Multimedia

## 📧 Where do the messages go?

Messages from your contact form will be sent directly to your email address: **brizonmultimedia@gmail.com**

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a FREE account
3. Verify your email address

### Step 2: Create an Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (**brizonmultimedia@gmail.com**)
5. Give it a name like "brizon-service"
6. Note down your **Service ID**

### Step 3: Create an Email Template
1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use these settings:

**Template Name:** `brizon-contact-form`

**Subject:** `New Contact Form Message from {{from_name}}`

**HTML Content:**
```html
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><small>Sent from Brizon Multimedia Website</small></p>
```

4. Click "Save"
5. Note down your **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update Your Website Code
Open `src/app/page.tsx` and replace these placeholders:

```typescript
// Line 31 - Replace with your actual Public Key
emailjs.init("YOUR_PUBLIC_KEY");

// Line 41 - Replace with your actual Service ID
'YOUR_SERVICE_ID',

// Line 42 - Replace with your actual Template ID  
'YOUR_TEMPLATE_ID',
```

## 🎯 That's it!

Now when someone fills out your contact form:
- The message goes directly to **brizonmultimedia@gmail.com**
- You'll get an email with the person's name, email, and message
- The form will show a success message to the user

## 📱 Alternative: WhatsApp Integration

If you prefer WhatsApp instead of email, you can also:
1. Create a WhatsApp Business account
2. Use the WhatsApp API to receive messages
3. Update the form to send WhatsApp messages

## 🔧 Need Help?

If you run into any issues:
1. Check that all IDs are correctly copied
2. Ensure your Gmail is connected to EmailJS
3. Test the template in EmailJS dashboard
4. Contact EmailJS support (they're very helpful!)

**Your visitors will now be able to contact you directly through your website!** 🎉
