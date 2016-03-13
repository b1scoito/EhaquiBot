var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
var nmedia = API.getNextMedia();
var media = API.getMedia();
var songt = API.getTimeElapsed();
var n = 3;

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

while(n > 1){
API.sendChat(songt);
--n;
}
if(songt >=2){
  API.sendChat("Tocando: " + media.author + " - " + media.title);
}
