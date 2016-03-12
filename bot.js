var bot = "[BislachaBot]";
var botv = "[BislachaBot v1.0]";
var media = API.getMedia();

if(boton == 0)
{
API.sendChat(botv + " Bot carregado com sucesso!");

var boton = 1;
//User join
function join(j){
API.sendChat('Bem-vindo ao nosso plug! @' + j.username);
}
API.on(API.USER_JOIN, join);

//User left
function left(l){
API.sendChat(bot + ' Adeus,volte sempre @' + l.username);
}
API.on(API.USER_LEAVE, left);

API.on(API.GRAB_UPDATE, callback);

function callback(obj) {
var media = API.getMedia();
API.sendChat(obj.user.username + " tocando " + media.author + " - " + media.title);
}
}else{
 API.sendChat("O bot ja está online D:")
}
