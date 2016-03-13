var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
var nmedia = API.getNextMedia();
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

API.sendChat("Tocando: " + media.author + " - " + media.title);
API.sendChat("Proxima musica: " + nmedia.author + " - " + nmedia.title);
