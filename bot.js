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

function callback(boom) {
API.sendChat(boom + ' boom');
}
