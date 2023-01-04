var fetch = require ('node-fetch')
var fs = require ('fs')
var handler = async (m, { conn, usedPrefix }) => {
var wibu = `https://erdwpe-api.herokuapp.com/randomimg/waifu`    
var thumb = await(await fetch(wibu)).buffer()
    var pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    var res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    var txt = await res.text()
    var arr = txt.split('\n')
    var cita = arr[Math.floor(Math.random() * arr.length)]
    var thumb = await(await fetch(cita)).buffer()
    var who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    var user = global.db.data.users[who]
var tqto = `*▸ - - - —「 BIG THANKS TO My Team 」— - - - ◂*
*❉ Nizar:*
https://instaram.com/nizarrrahman.f_
*❉ Adryan:*
https://www.instagram.com/adrynngrha
*❉ Irham:* 
https://yuki_sen23
*❉ Rafie:*
https://www.instagram.com/rafiedotid
*❉ Nai Developer:*
https://instagram.com/nai_developer
`
conn.sendButtonDoc(m.chat, tqto, wm, 'Menu', '/menu', m,  { contextInfo: { externalAdReply: { showAdAttribution: true,
        mediaUrl: "https://Instagram.com/nizarrrahman.f_",
        mediaType: "VIDEO",
        description: "https://Instagram.com/nizarrrahman.f_", 
        title: 'Simple Bot Esm',
        body: wm,
        thumbnail: thumb,
        sourceUrl: sgc
    }
    } })
            }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
module.exports = handler
