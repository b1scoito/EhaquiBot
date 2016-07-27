comandos = 'false'
bot = '[Bolacha Bot]'
vbot = '[Bolacha Bot v1.0]'
autor = 'GamerBolachaBR'
API.sendChat(vbot + "Bot iniciado com sucesso!")

function msc(music){
var media = API.getMedia();
API.sendChat(bot + " Tocando:" + media.author + " - " + media.title)
}

function usrjn(userjoin){
  API.sendChat(bot + " Bem-vindo(a) " + userjoin.username)
}

function cmds(cmd){
  var id=cmd.uid;
  var msg=cmd.message;
  var perm=API.getUser(id).role;
  if(msg=="!bot"){
    if(comandos == 'false'){
    API.sendChat(vbot + " Bot criado por " + autor)
    }else{
      API.senChat("Desculpe os comandos estão desabilitados")
    }
  }
  if(msg=="!Bolacha"){
    if(comandos == 'false'){
      API.sendChat(bot + " Bolacha >>> All")
    }
  }
  if(msg=="!skip"){
    if(comandos == 'true'){
    if(perm >= 2){
      API.sendChat(bot + " Sua musica foi pulada!")
      API.moderateForceSkip();
    }else{
      API.sendChat(bot + " Permissão insuficiente!")
    }
    }else{
      API.senChat("Desculpe os comandos estão desabilitados")
    }
  }
  if(msg=="!cmd"){
    if(perm >= 1){
      comandos = 'true'
      API.sendChat("Os comandos estão desabilitados!")
    }else{
      API.sendChat("Você não tem permissão suficiente")
    }
  }
}


API.on(API.HISTORY_UPDATE,msc);
API.on(API.USER_JOIN,usrjn);
API.on(API.CHAT,cmds);



