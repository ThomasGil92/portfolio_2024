import { Resend } from "resend";

import { NowRequest, NowResponse } from "@vercel/node";

import ContactEmail from "../emails/ContactEmail";

export default async function handler(req: NowRequest, res: NowResponse) {
  const resend = new Resend(process.env.VITE_RESEND_API_KEY);
  console.log(process.env.VITE_RESEND_API_KEY);
  
  const body = req.body;
  try {
    const response = await resend.emails.send({
      from: "thomas-gil.fr",
      to: ["tgil849@gmail.com"],
      subject: "Hello world",
      react: ContactEmail({
        firstName: JSON.parse(body.value.firstName),
        lastName: JSON.parse(body.value.firstName),
        files: JSON.parse(body.value.base64File as string),
      }),
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
