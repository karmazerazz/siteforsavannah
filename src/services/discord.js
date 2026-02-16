
const WEBHOOK_URL = "https://discord.com/api/webhooks/1452069008164786307/yl6pDWbu-Xpk7-BBE0bk_Iw61rdab93Zr2x7jlmSpb_w4XMwrjYocZEGmjIVLxMkTvF";

export const sendNotification = async (message) => {
  if (!WEBHOOK_URL || WEBHOOK_URL.includes("YOUR_DISCORD_WEBHOOK_URL")) {
    console.warn("Discord Webhook URL not configured.");
    return;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message,
        username: "Love Bot ❤️",
        avatar_url: "https://i.imgur.com/4M34hi2.png" // Optional heart icon
      }),
    });

    if (!response.ok) {
      console.error("Failed to send notification:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};
