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

API.on(API.CHAT_COMMAND, callback);

API.on(API.GRAB_UPDATE, callback);

function callback(obj) {
var media = API.getMedia();
alert(obj.user.username + " toucou " + media.author + " - " + media.title);
}
