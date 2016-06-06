bot = '[RAWR Bot]'
vbot = '[RAWR Bot v1.0]'
Author = 'GamerBolachaBR'
API.sendChat(vbot + "Bot iniciado com sucesso!")
API.on(API.HISTORY_UPDATE, msc)
function msc(obj){
var media = API.getMedia();
API.sendChat(bot + "Tocando:" + media.author + " - " + media.title)
}
