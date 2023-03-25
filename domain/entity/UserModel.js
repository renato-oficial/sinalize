module.exports = class User {
  constructor({
    id,
    first_name,
    last_name,
    username,
    sinais = 0,
    afiliados = [],
    ganhos = 0,
    convite,
  }) {
    this.id = String(id);
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.sinais = sinais;
    this.afiliados = afiliados;
    this.ganhos = ganhos;
    this.convite = convite;
  }
};
