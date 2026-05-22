/**
 * GOOGLE SHEETS CONTACT FORM
 *
 * SETUP (important — fixes "Failed to save" / 403 errors):
 * 1. Create a Google Sheet, open Extensions → Apps Script
 * 2. Paste this code, Save
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone   ← must be "Anyone", not "Only myself"
 * 4. Authorize when prompted
 * 5. Copy the /exec URL → GOOGLE_SCRIPT_URL in .env.local
 * 6. After ANY code change: Deploy → Manage deployments → Edit → New version → Deploy
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var name = "";
    var email = "";
    var platform = "";
    var msg = "";

    if (e.postData && e.postData.contents) {
      var contentType = e.postData.type || "";

      if (contentType.indexOf("application/json") > -1) {
        var json = JSON.parse(e.postData.contents);
        name = json.name || "";
        email = json.email || "";
        platform = json.platform || "";
        msg = json.message || "";
      } else {
        var params = e.parameter;
        name = params.name || "";
        email = params.email || "";
        platform = params.platform || "";
        msg = params.message || "";
      }
    } else if (e.parameter) {
      name = e.parameter.name || "";
      email = e.parameter.email || "";
      platform = e.parameter.platform || "";
      msg = e.parameter.message || "";
    }

    sheet.appendRow([new Date(), name, email, platform, msg]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function setupHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Platform", "Message"]);
  }
}
