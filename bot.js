var bot = "[BislachaBot]";
var botv = "[BislachaBot v1.0]";
var media = API.getMedia();
var id = data.uid;
var msg = data.message;
var role = API.getUser(id).role;

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
API.on(API.USER_LEAVE, left);

API.sendChat("Tocando: " + media.author + " - " + media.title);

API.on(API.CHAT, function(data){
if(msg.indexOf("!cookie") == 0 && role >=0){
API.moderateDeleteChat(data.cid);
API.sendChat(data.un + " COOOOKIEEEEEE");
}
});
