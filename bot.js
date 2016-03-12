var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";

API.sendChat(botv + " Bot carregado com sucesso!");

//User join
function join(j){
API.sendChat('Bem-vindo ao nosso plug! @' + j.username);
}
API.on(API.USER_JOIN, join);

//User left
function left(l){
API.sendChat(bot + ' Adeus,volte sempre @' + l.username);
}
API.on(API.USER_LEFT, left);


function media(m){
API.getMedia(m.title);
API.sendChat(m.title);
}
