var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";

API.sendChat(botv + " Bot carregado com sucesso!");

//User join
function join(obj){
API.sendChat('Bem-vindo ao nosso plug! @' + obj.username);
}
API.on(API.USER_JOIN, join);

//User left
function left(obj){
API.sendChat(bot + ' Adeus,volte sempre @' + obj.username);
}
API.on(API.USER_LEFT, left);


function media(obj){
API.getMedia(obj.title);
API.sendChat(obj.title);
}
