import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Spam honeypot check
    if (data.honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!data.nome || !data.email || !data.telefone || !data.empresa) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 422 }
      );
    }

    // In a production setup with PostgreSQL / Payload, this persists directly to DB.
    console.log("Novo lead recebido:", data);

    return NextResponse.json({
      success: true,
      message: "Lead recebido com sucesso. Nossa equipe entrará em contato.",
    });
  } catch (error) {
    console.error("Erro no processamento do formulário:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor ao processar formulário." },
      { status: 500 }
    );
  }
}
