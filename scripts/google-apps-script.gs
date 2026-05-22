/**
 * GOOGLE SHEETS CONTACT FORM — Setup
 *
 * 1. Create a new Google Sheet (e.g. "Portfolio Inquiries")
 * 2. Row 1 headers (optional): Timestamp | Name | Email | Platform | Message
 * 3. Extensions → Apps Script → paste this file → Save
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL → paste into .env.local as GOOGLE_SCRIPT_URL
 * 6. Restart: npm run dev
 * 7. On Vercel: add GOOGLE_SCRIPT_URL in Environment Variables → redeploy
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.platform || "",
      data.message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/** Optional: run once in Apps Script to add header row */
function setupHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Platform", "Message"]);
  }
}
