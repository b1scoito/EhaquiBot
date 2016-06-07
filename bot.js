bot = '[STG Bot]'
vbot = '[STG Bot v1.0]'
Author = 'GamerBolachaBR'
API.sendChat(vbot + "Bot iniciado com sucesso!")

API.on(API.HISTORY_UPDATE, msc)
function msc(music){
var media = API.getMedia();
API.sendChat(bot + " Tocando:" + media.author + " - " + media.title)
}

API.on(API.USER_LEAVE, lvusr)
function lvusr(userleave){
  API.sendChat(bot + " O usuario:" +  userleave.username + " Deixou a sala!")
}

API.on(API.USER_JOIN, jnusr)
function jnusr(userjoin){
  API.sendChat(bot + " Bem-vindo(a) " + userjoin.username)
}

function commands(cmd) {
  var id=cmd.uid;
  var msg=cmd.message;
  var perm=API.getUser(id).role;
  if(msg.indexOf("!bot") && perm >= 0){
    API.sendChat("teste command!")
  }
}
API.on(API.CHAT, commands);
