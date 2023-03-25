module.exports.sendAfiliateDescription = (ctx) => {
  const message = `🔰 Programa de Afiliados 

    🔸 Minhas indicações: 0
    💰 Porcentagem de bônus: 4%
    📊 Total já ganho: R$ 0,00
    
    🔗 Link de indicação: https://t.me/${ctx.botInfo.username}?start=${ctx.from.id}
    
    ❤️ Além de você receber bônus, seus amigos também terão acesso aos melhores serviços fornecidos por nós!
    
    😍 Gostou da ideia? Indique agora mesmo seus amigos para o nosso Bot e ganhe bônus!
    🔰 Programa de Afiliados 
    
    🔸 Minhas indicações: 0
    💰 Porcentagem de bônus: 4%
    📊 Total já ganho: R$ 0,00
    
    🔗 Link de indicação: https://t.me/${ctx.botInfo.username}?start=${ctx.from.id}
    
    ❤️ Além de você receber bônus, seus amigos também terão acesso aos melhores serviços fornecidos por nós!
    
    😍 Gostou da ideia? Indique agora mesmo seus amigos para o nosso Bot e ganhe bônus!`;

  ctx.reply(message);
};
