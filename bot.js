var bot = "[NedaBot]";
var botv = "[NedaBot v1.0]";
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

API.on(API.CHAT, myFunction);
 
var u = API.getUsers();
 
function myFunction(a){
if(a.message === '!teste'){
for(var i in u){
if(u[i].id === a.uid){
  API.sendChat("oiawdwa");
}}}}
