comandos = 'true'
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
    if(comandos == 'true'){
    API.sendChat(vbot + " Bot criado por " + autor)
    }else{
      API.senChat("Desculpe os comandos estão desabilitados")
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
  if(msg=="!disablecmd"){
    if(perm >= 1){
      API.sendChat("Os comandos estão desabilitados! " + comandos)
    }else{
      API.sendChat("Você não tem permissão suficiente")
    }
  }
}


API.on(API.HISTORY_UPDATE,msc);
API.on(API.USER_JOIN,usrjn);
API.on(API.CHAT,cmds);



