import { ContactForm, contactFormSchema } from "@/entities/contactForm";
import { google } from "googleapis";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const data: ContactForm = await req.json();
    contactFormSchema.parse(data);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.SPREADSHEET_RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [data.name, data.email, data.phone, data.company, data.position],
        ],
      },
    });

    console.log("Data appended successfully:", response.data);

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid data" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    console.error("Error:", error);

    return new Response(
      JSON.stringify({ success: false, error: "Internal Server Error" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
}
