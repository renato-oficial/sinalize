const { UserService } = require("../../aplicacao/services/user_service");
const User = require("../../domain/entity/UserModel");
const { UserRepository } = require("../../infra/repository/user_repository");

describe("math module", () => {
  it("Crie usuário usando UserRepo/Serv, retorne obj. Verifique se tem 'id', retorne [ Object ].", async () => {
    const user_repository = new UserRepository();
    const user_service = new UserService(user_repository);

    const user = {
      id: "5406166623",
      first_name: "Renato",
      last_name: "A.",
      username: "renato_office",
    };

    const newUser = new User({ ...user });
    const result = await user_service.createUser(newUser);
    expect(result).toHaveProperty("id");
  });

  it("Testar se usuário 5406166623 foi atualizado, +25 sinais, retorne [ TRUE ].", async () => {
    const user_repository = new UserRepository();
    const user_service = new UserService(user_repository);
    const result = await user_service.updateUser("5406166623", { sinais: 25 });
    expect(result).toBeTruthy();
  });

  it("Atualizar usuário usando UserRepo/Serv, passar id + id convidado, retorne [ TRUE ].", async () => {
    const user_repository = new UserRepository();
    const user_service = new UserService(user_repository);

    const result = await user_service.inserInvitedUser(
      "5406166623",
      "0000000000"
    );
    expect(result).toBeTruthy();
  });

  it("Deletar usuário usando UserRepo/Serv, passar ID, retorne [ TRUE ].", async () => {
    const user_repository = new UserRepository();
    const user_service = new UserService(user_repository);

    const result = await user_service.deleteUser("5406166623");
    expect(result).toBeTruthy();
  });
});
