const cron = require("node-cron");
const {
  autoCloseRFQs,
  rfqReminder
} = require("../automations/rfqAutomation");

// Runs every day at 12:00 AM
// cron.schedule("0 0 * * *", async () => {
//   console.log("⏰ Running RFQ automations...");
//   await autoCloseRFQs();
//   await rfqReminder();
// });
// cron.schedule("*/15 * * * * *", async () => {
//   console.log("⏰ [TEST] Cron triggered at", new Date().toLocaleTimeString());

//   await autoCloseRFQs();
//   await rfqReminder();

//   console.log("✅ [TEST] RFQ automation cycle finished");
// });
