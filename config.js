import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['17245423663', '𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀', true],
  ['24105114159'], 
  ['24102150169'] 
] //Numeros de owner 

global.mods = ['17245423663'] 
global.prems = ['17245423663', '17245423663', '17245423663']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝚈𝚄𝙼𝙴𝙺𝙾' 
global.author = '𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff\n' 
global.dygp = 'https://chat.whatsapp.com/CL0rq2IZaUC14T748pthdQ'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/or7nbc2.jpg' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
