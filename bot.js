var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
API.sendChat(botv + " Bot carregado com sucesso!");
var n = 0;

//User join
function fancyName(obj){
API.sendChat(bot + ' Bem-vindo ao nosso plug! @' + obj.username);
}
API.on(API.USER_JOIN, fancyName);
