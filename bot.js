API.sendChat(botv + " Bot carregado com sucesso!");

var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";

//User join
function fancyName(obj){
API.sendChat('Bem-vindo ao nosso plug! @' + obj.username);
}
API.on(API.USER_JOIN, fancyName);

//User left
function fancyName(obj){
API.sendChat(bot + ' Adeus,volte sempre @' + obj.username);
}
API.on(API.USER_LEFT, fancyName);
