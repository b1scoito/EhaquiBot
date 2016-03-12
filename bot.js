var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
var n;
var media = API.getMedia();

API.sendChat(botv + " Bot carregado com sucesso!");

//User join
function fancyName(obj){
API.sendChat('Bem-vindo ao nosso plug! @' + obj.username);
}
API.on(API.USER_JOIN, fancyName);

//User left
function fancyName(obj){
API.sendChat(bot + ' Adeus,volte sempre @' + obj.username);
}
API.on(API.USER_LEAVE, fancyName);

API.on(API.GRAB_UPDATE, callback);

while(n == 0){
  API.sendChat("Tocando: " + media.author + " - " + media.title);
  ++n;
}

API.on(API.CHAT, function(data){
if(data.type === "cookies!" && data.message === "!cookie"){
API.moderateDeleteChat(data.cid);
API.sendChat("cookies!");
}
});
