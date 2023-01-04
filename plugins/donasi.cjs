var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [081386945391]
│ • GOPAY [081386945391]
│ • BCA
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281386945391
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
