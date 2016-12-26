bot = '[EhBalada Bot]'
v = '2.0'
vbot = '[EhBalada Bot v2.0]'
autor = 'Biiscoitao'
API.sendChat(vbot + "Bot iniciado com sucesso!")

function msc(music){
var media = API.getMedia();
API.sendChat(bot + " Tocando:" + media.author + " - " + media.title)
}

function usrjn(userjoin){
  API.sendChat(bot + " Seja bem-vindo(a) a Balada Ehaqui! " + userjoin.username)
}

function cmds(cmd){
  var id=cmd.uid;
  var msg=cmd.message;
  var perm=API.getUser(id).role;
  var use=API.getUser(id);
  if(msg=="!bot"){
    API.sendChat(vbot + " Bot criado por " + autor)
  }
  if(msg=="!biscoito"){
      API.sendChat(bot + " È Bolacha!")
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
    API.sendChat(bot + " " + v + " beta.")
  }
  if(msg=="!jooj"){
    API.sendChat(bot + " Um bom jooj para você " + use.username + "!" )
  }
   if(msg=="!cookie"){
      API.sendChat(bot + " Tome seu cookie!" + use.username + "!" )
  }
   if(msg=="!boli"){
      API.sendChat(bot + " Boliiiiiii")
  }                 
   if(msg=="!bolacha"){
      API.sendChat(bot + " È Biscoito!")
  }   
   if(msg=="!chapolin"){
      API.sendChat(bot + " Não contavam com minha astúcia!")
  }  
 if(msg=="!comandos"){
      API.sendChat(bot + "!bot, !biscoito, !v, !jooj, !cookie, !boli, !bolacha")
  }
  }

API.on(API.HISTORY_UPDATE,msc);
API.on(API.USER_JOIN,usrjn);
API.on(API.CHAT,cmds);
