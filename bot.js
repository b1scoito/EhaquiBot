start = start+1
bot = '[RAWR Bot]'
vbot = '[RAWR Bot v1.0]'
Author = 'GamerBolachaBR'
if start<2 {
  API.sendChat(vbot + "Bot iniciado com sucesso!")
}Else{
  API.sendChat(vbot + "O bot já está iniciado!")
  start = start-1
}
