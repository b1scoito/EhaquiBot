var bot = "[NedaBot]";
var botv = "[NedaBot v1.5]";


API.sendChat(botv + " Bot carregado com sucesso! : )");
//User join
function fancyName(obj){
API.sendChat(bot + ' Bem-vindo ao nosso plug! @' + obj.username);
}
API.on(API.USER_JOIN, fancyName);


API.on(API.HISTORY_UPDATE, callback);

function callback(a){
  var media = API.getMedia();
  API.sendChat("Agora tocando: " + media.author + " - " + media.title);
}
