# Contact form → Google Sheets

## Fix "Failed to save to spreadsheet" (403 / access denied)

This almost always means the **Web app is not public**. Do this:

### 1. Open Apps Script

In your Google Sheet: **Extensions → Apps Script**

### 2. Paste the latest code

Copy all of `scripts/google-apps-script.gs` from this repo → paste in Apps Script → **Save**

### 3. Create a NEW deployment (required)

1. **Deploy** → **New deployment**
2. Click the gear ⚙️ → choose **Web app**
3. Set:
   - **Execute as:** Me (`your@gmail.com`)
   - **Who has access:** **Anyone** ← not "Only myself"
4. Click **Deploy**
5. **Authorize** all permissions when Google asks
6. Copy the new **Web app URL** (ends with `/exec`)

### 4. Update `.env.local`

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_NEW_DEPLOYMENT_ID/exec
```

Restart: `npm run dev`

### 5. Vercel

Update `GOOGLE_SCRIPT_URL` with the **new** URL → **Redeploy**

---

## Test the script inside Google

In Apps Script editor:

1. Select function `setupHeaders` → **Run** (adds header row once)
2. Deploy as web app, then submit the contact form on your site

## Sheet columns

| Timestamp | Name | Email | Platform | Message |
|-----------|------|-------|----------|---------|

Each form submit adds one row.
