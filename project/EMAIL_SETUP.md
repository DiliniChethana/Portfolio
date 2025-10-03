# Email Configuration Guide

## Setting up EmailJS for Direct Email Sending

To enable direct email sending from your contact form, follow these steps:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: Portfolio Contact: {{subject}}

Hello Dilini,

You received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
{{from_name}}
```

4. Note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" -> "General"
2. Copy your **Public Key**

### 5. Update the Code
In `src/components/Contact.tsx`, replace the placeholder values:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
};
```

### 6. Uncomment EmailJS Code
In the `handleSubmit` function, uncomment the EmailJS implementation and comment out the mock implementation.

### Current Status
The contact form is currently set up with a mock implementation that simulates email sending. Once you configure EmailJS with the steps above, emails will be sent directly without opening any email client.

### Test the Implementation
1. Fill out the contact form
2. Click "Send Message"
3. Check that the email arrives in your inbox (dilinichethi@gmail.com)

### Fallback Option
The "Copy Message" button is still available as a backup option if direct sending fails.