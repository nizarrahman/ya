var handler = async(m, { conn, text, usedPrefix, command }) => {

var str = `*Kamu Nanya *\n\nSilahkan follow github saya dibawah ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']
    
module.exports = handler
