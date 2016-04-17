var bot = "[teste bot]";
var botv = "[teste 0]";


API.sendChat(botv + " Bot carregado com sucesso! : )");
//User join
function joi(join){
API.sendChat(bot + ' Bem-vindo ao nosso plug! @' + join.username);
}
API.on(API.USER_JOIN, joi);

function leav(leave){
API.sendChat(bot + ' Bem-vindo ao nosso plug! @' + leave.username);
}
API.on(API.USER_LEAVE, leav);


API.on(API.HISTORY_UPDATE, callback);

function callback(media){
  var media = API.getMedia();
  API.sendChat(bot + "Agora tocando: " + media.author + " - " + media.title);
}


API.on(API.CHAT, function(data){
var id = data.uid;
var msg = data.message;
var arg = data.message;
var role = API.getUser(id).role;
if(msg.indexOf("!cookie") == 0 && role >=0){
API.sendChat(bot + "@" + data.un + " you have a cookie");
}
if(msg.indexOf("!cake") == 0 && role >=0){
API.sendChat(bot + "@" + data.un + " the cake is a lie...man...don't belive!");
}
if(msg.indexOf("!q-p") == 0 && role >=0){
API.sendChat(bot + " q-q (VOCÊ) p-p");
}
});
