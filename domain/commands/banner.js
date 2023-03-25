const path = require("path");
const { Markup } = require("telegraf");

module.exports.banner = async (ctx) => {
  const description = [
    `• Bem-vindo ${ctx.from.first_name}\n`,
    `• PIN de cliente: ${ctx.from.id}`,
    "• Para recarregar envie /recarga",
    "• Ou clique no botão recarregar \n",
    `• Canal: @${ctx.botInfo.username}`,
    `• Nosso suporte: @suporte_numero`,
  ];

  await ctx.telegram.sendPhoto(
    ctx.from.id,
    {
      source: path.join(__dirname, "..", "..", "images", "capa.png"),
    },
    {
      caption: description.join("\n"),
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        [
          Markup.button.callback("• Sinais", "sinais"),
          Markup.button.callback("• Afiliados", "/afiliados"),
          ,
        ],
        [
          Markup.button.callback("• Nosso FAQ", "faq"),
          Markup.button.callback("• Recarregar", "/recarregar"),
        ],
      ]),
    }
  );
};
