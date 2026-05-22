# Contact form → Google Sheets

Submissions from **Send inquiry** are saved as new rows in your Google Sheet.

## Setup (one time)

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet (e.g. **Portfolio Inquiries**).
2. Optional: in row 1 add headers: `Timestamp` | `Name` | `Email` | `Platform` | `Message`

### 2. Add the Apps Script

1. In the sheet: **Extensions** → **Apps Script**
2. Delete any sample code and paste everything from `scripts/google-apps-script.gs` in this repo
3. **Save** the project (name it e.g. Portfolio Contact)

### 3. Deploy as web app

1. Click **Deploy** → **New deployment**
2. Gear icon → **Web app**
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. **Deploy** → authorize when prompted
5. Copy the **Web app URL** (ends with `/exec`)

### 4. Add to your project

Create `.env.local` in the project root:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID_HERE/exec
```

Restart the dev server:

```bash
npm run dev
```

### 5. Deploy on Vercel

1. Project → **Settings** → **Environment Variables**
2. Add `GOOGLE_SCRIPT_URL` with the same URL
3. **Redeploy**

## Test

1. Open `/contact`
2. Fill out the form and click **Send inquiry**
3. Check your Google Sheet — a new row should appear

## Troubleshooting

| Issue | Fix |
|--------|-----|
| "Contact form is not configured" | Add `GOOGLE_SCRIPT_URL` to `.env.local` and restart |
| Row not appearing | Redeploy Apps Script after code changes; use **New deployment** |
| Permission error | Run deployment as **Me** with **Anyone** access |
