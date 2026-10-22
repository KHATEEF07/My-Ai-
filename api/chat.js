export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use POST for chat." });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "AI key is not configured in Vercel."
    });
  }

  const messages = req.body?.messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({
      error: "Please send a chat message."
    });
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
          instructions:
            "You are Khateef AI, a friendly and helpful personal AI assistant. Help with questions, writing, learning and coding. Be honest about your capabilities.",
          input: messages
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(502).json({
        error: data.error?.message || "AI request failed."
      });
    }

    return res.status(200).json({
      reply: data.output_text || "Please try again."
    });
  } catch (error) {
    return res.status(500).json({
      error: "Could not connect to the AI service."
    });
  }
}
