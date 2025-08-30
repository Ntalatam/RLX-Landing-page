import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

const {
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REDIRECT_URI,
  GMAIL_REFRESH_TOKEN,
  GMAIL_SENDER_EMAIL,
} = process.env;

const oAuth2Client = new google.auth.OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { first_name, last_name, email, company, industry, message } = req.body;

  const mailBody = [
    `Red_launch Customer Inquiry`,
    `--------------------------`,
    `First Name: ${first_name}`,
    `Last Name: ${last_name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Industry: ${industry}`,
    "",
    `Message:`,
    message,
  ].join("\n");

  const rawMessage = [
    `From: RLX Landing Page <${GMAIL_SENDER_EMAIL}>`,
    `To: ${GMAIL_SENDER_EMAIL}`,
    `Subject: New Contact Form Submission`,
    "Content-Type: text/plain; charset=utf-8",
    "",
    mailBody,
  ].join("\n");

  const encodedMessage = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  try {
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedMessage,
      },
    });
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: "Failed to send email", details: err.message });
  }
}