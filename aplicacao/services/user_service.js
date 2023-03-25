class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user) {
    try {
      if (!user) return;
      const { id } = user;
      // Verifica se o usuário já existe
      const userExist = await this.getUserById(id);
      if (userExist.length) return;

      // Cria um novo usuário
      return await this.userRepository.createUser(user);
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(id) {
    try {
      if (!id) return;
      return await this.userRepository.findById(String(id));
    } catch (error) {
      console.error(error);
    }
  }

  async inserInvitedUser(hosteUser, convidado_id) {
    try {
      if (!hosteUser || !convidado_id) return;

      // Verifica se o usuário já existe
      const userExist = await this.getUserById(String(convidado_id));
      if (userExist.length) return;

      return await this.userRepository.insertAfiliate(
        hosteUser,
        String(convidado_id)
      );
    } catch (error) {
      console.error(error);
    }
  }
  async updateUser(id, update) {
    try {
      if (!id || !update) return;
      const old_user = await this.getUserById(String(id));
      if (!old_user) return;
      return await this.userRepository.updateUser(String(id), update);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(id) {
    try {
      if (!id) return;
      return await this.userRepository.deleteUser(String(id));
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { UserService };
