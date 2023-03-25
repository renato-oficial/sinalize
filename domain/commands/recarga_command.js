const { Payment } = require("../../aplicacao/services/payment_service");

module.exports.recharge_command = async (ctx) => {
  try {
    await ctx.reply("⏳ Estou gerando o seu codigo pix para pagamento...");
    const payment = new Payment();
    const response = await payment.createOrder();
    if (!response) {
      return await ctx.reply(
        "Não conseguimos processar o seu pedido, tente mais tarde."
      );
    }

    const qrcode = response.qr_code;
    const id = response.id;

    await ctx.replyWithMarkdown(`\`${qrcode}\``);
    await ctx.replyWithMarkdown(`Número pedido: \`${id}\``);
    await ctx.replyWithMarkdown(
      "☝️ **ATENÇÃO** ‼️ Você tem 5 minutos para efetuar o pagamento. Caso o contrário, sua compra será cancelada."
    );

    setTimeout(async () => {
      const status = await payment.orderStatus(id);
      if (status.toString().includes("approved")) {
        ctx.replyWithMarkdown(
          "✅ Recebemos o seu pagamento, aproveite nosso serviço."
        );
        return;
      }
      payment.oderCancel(id);
      ctx.replyWithMarkdown(
        `🚫 O pedido com o número: *${id}* não foi pago e foi cancelado.`
      );
    }, 310000);
  } catch (error) {
    console.error(error);
  }
};
