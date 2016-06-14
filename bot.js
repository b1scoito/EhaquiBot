var bot = '[STG Bot]'
var vbot = '[STG Bot v1.0]'
var author = 'GamerBolachaBR'
API.sendChat(vbot + "Bot iniciado com sucesso!")

API.on(API.HISTORY_UPDATE,function(music){
var media = API.getMedia();
API.sendChat(bot + " Tocando:" + media.author + " - " + media.title)
}
)

API.on(API.USER_LEAVE,function(userleave){
  API.sendChat(bot + " O usuario:" +  userleave.username + " Deixou a sala!")
}
)

API.on(API.USER_JOIN,function(userjoin){
  API.sendChat(bot + " Bem-vindo(a) " + userjoin.username)
}
)

API.on(API.HISTORY_UPDATE,function(songm){
  var songtm = API.getTimeRemaining();
  if songtm>=7 {
    API.sendChat(bot + " Sua musica é grande de mais!")
    API.moderateForceSkip();
  }
}
)

API.on(API.CHAT, 
function(cmd) {
  var id=cmd.uid;
  var msg=cmd.message;
  var perm=API.getUser(id).role;
  if(msg=="!bot"){
    API.sendChat(vbot + " Bot criado por GamerBolachaBR")
  }
  if(msg=="!stg"){
    API.sendChat(bot + " STG, Song To Going!") 
  }
  if(msg=="!skip"){
    if(perm >= 2){
      API.sendChat(bot + " Sua musica foi pulada!")
      API.moderateForceSkip();
    }else{
      API.sendChat(bot + " Permissão insuficiente!")
    }
  }
}
)
