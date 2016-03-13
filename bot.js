var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
var media = API.getMedia();
var songt = API.getTimeElapsed();
var n;

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

for(n;n == 1;++n){
  API.sendChat("Tocou: " + media.title);
}
if(n == 1) {
  --n;
}
