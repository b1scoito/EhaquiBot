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
  API.sendChat(bot + "Agora tocando: " + media.author + " - " + media.title);
}


API.on(API.CHAT, function(data){
var id = data.uid;
var msg = data.message;
var arg = data.message;
var role = API.getUser(id).role;
if(msg.indexOf("!cookie") == 0 && role >=0){
API.moderateDeleteChat("!cookie");
API.sendChat(bot + "@" + data.un + " you have a cookie");
}
if(msg.indexOf("!skip") == 0 && role >=0){
API.moderateDeleteChat("!skip");
API.sendChat(bot + " " + media.title + " Foi pulado");
API.moderateForceSkip();
}
});
