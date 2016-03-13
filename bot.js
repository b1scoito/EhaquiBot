var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
API.sendChat(botv + " Bot carregado com sucesso!");
var n = 0;

//User join
function fancyName2(obj2){
API.sendChat('Bem-vindo ao nosso plug! @' + obj2.username);
}
API.on(API.USER_JOIN, fancyName2);
