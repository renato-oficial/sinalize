const { UserService } = require("../../aplicacao/services/user_service");
const { UserRepository } = require("../../infra/repository/user_repository");
const User = require("../entity/UserModel");
const { banner } = require("./banner");

module.exports.start_command = async (ctx) => {
  const { id, first_name, last_name, username } = ctx.from;
  const user_repository = new UserRepository();
  const user_service = new UserService(user_repository);
  const new_user = new User({ id, first_name, last_name, username });

  await user_service.createUser(new_user);

  await banner(ctx);
};
