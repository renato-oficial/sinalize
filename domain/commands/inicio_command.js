const path = require("path");
const { Markup } = require("telegraf");
const { UserService } = require("../../aplicacao/services/user_service");
const { UserRepository } = require("../../infra/repository/user_repository");
const User = require("../entity/UserModel");

module.exports.start_command = async (ctx) => {
  const { id, first_name, last_name, username } = ctx.from;
  const user_repository = new UserRepository();
  const user_service = new UserService(user_repository);
  const new_user = new User({ id, first_name, last_name, username });

  await user_service.createUser(new_user);

  const description = [
    `• Bem-vindo ${ctx.from.first_name}\n`,
    `• PIN de cliente: ${ctx.from.id}`,
    "• Para recarregar envie /recarga",
    "• Ou clique no botão recarregar \n",
    `• Canal: @${ctx.botInfo.username}`,
    `• Nosso suporte: @suporte_numero`,
  ];

  ctx.telegram.sendPhoto(
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
