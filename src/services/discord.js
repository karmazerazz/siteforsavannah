
const WEBHOOK_URL = "https://discord.com/api/webhooks/1472986389992702149/Rqhalf_pj_UvmgfGt8NhrcYIOIMxO9P_oqTHlGp1rEaZefF4nY9iwDGFEYo7MFkWCJ_1";

export const sendNotification = async (message) => {


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
