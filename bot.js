var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
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

API.sendChat("Tocou: " + media.title);

function name(data) {
var id = data.uid;
var msg = data.message;
var username = data.un;
var role = API.getUser(id).role;
if(msg.indexOf("!commands") == 0 && role >=0) {
API.sendChat(username + " has sent the command!");
}}
API.on(API.CHAT, name);
