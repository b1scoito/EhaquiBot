bot = '[RAWR Bot]'
vbot = '[RAWR Bot v1.0]'
Author = 'GamerBolachaBR'
API.sendChat(vbot + "Bot iniciado com sucesso!")



API.on(API.HISTORY_UPDATE, msc)
function msc(music){
var media = API.getMedia();
API.sendChat(bot + "Tocando:" + media.author + " - " + media.title)
}

API.on(API.USER_LEAVE, lvusr)
function lvusr(userleave){
  API.sendChat(bot + "O usuario:" +  userleave.username + " Deixou a sala!")
}
