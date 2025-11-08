// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje } = await req.json();
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Leads Esteban <leads@estebanfirpo.com>",
      to: process.env.LEADS_TO!,
            replyTo: email,
      subject: `Nuevo lead: ${nombre}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`,
      html: `
        <h2>Nuevo lead</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error != null) {
      return NextResponse.json({ ok: false, error: error.message ?? "Send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? "Unexpected error" }, { status: 500 });
  }
}