bot = '[RAWR Bot]'
vbot = '[RAWR Bot v1.0]'
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

function name(data) {
var id = data.uid;
var msg = data.message;
var username = data.un;
var role = API.getUser(id).role;
/* method what i use to see emote,message etc. content*/
if(msg.indexOf("!commands") == 0 && role >=0) {
API.moderateDeleteChat(data.cid);
API.sendChat(username +" has sent the command!");
}}
API.on(API.CHAT, name);
