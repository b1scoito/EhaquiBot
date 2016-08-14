var on=1;
bot = '[Bolacha Bot]'
v = '1.5'
vbot = '[Bolacha Bot v1.5]'
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
    API.sendChat(vbot + " Bot criado por " + autor)
  }
  if(msg=="!Bolacha"){
      API.sendChat(bot + " Bolacha >>> All")
  }
  if(msg=="!skip"){
    if(perm >= 2){
      API.sendChat(bot + " Sua musica foi pulada!")
      API.moderateForceSkip();
    }else{
      API.sendChat(bot + " Permissão insuficiente!")
    }
  }
  if(msg=="!v"){
    API.sendChat(v + " beta.")
  }
  if(msg=="!kill"){
    on=0;
  }
}

if(on == 1){
API.on(API.HISTORY_UPDATE,msc);
API.on(API.USER_JOIN,usrjn);
API.on(API.CHAT,cmds);
}
