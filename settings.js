const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'lW7MqmH8',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia & english
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
global.botname = "Arulbot" //namabot kalian
global.ownername= "ᴹᴿ᭄ Arulོ ×፝֟͜×" //nama kalian
global.myweb ="https://chat.whatsapp.com/GAuAnrTrjLlKhAUPoS5xM2" //bebas asal jan hapus
global.youtube = "tiktok.com/@sabun_boy" //bebas asal jan hapus
global.github = "https://Arulllllllllllll" //bebas
global.email = "zazilong0@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.owner = ["62895340684706"] //ganti agar fitur owner bisa di gunakan
global.Is3 = ['6285716255200','6285805103554','6285760457273','628967797241','6283165743032','6289637638627','6288271189937','6282283040853','628985990277','6282172130153','6285755271790','6281261003143','6283867274949','6282320715861','6282286298258','6282260274665','6285760976353','6283185833020','62895410368053','6285363361163','6283157483068','6289652333947','62895340684706'] // nomor anggota kelas
global.ownernomer = "62895340684706" // nomor wa kalian
global.ownernomerr = "+62895340684706" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay

global.packname = 'ᴹᴿ᭄ Arulོ ×፝֟͜×' //sticker wm ubah
global.author = 'WhatsApp Bot' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',    
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
	tigo: '*🙅‍♀️ Anda Tidak Terdaftar Dalam Database XII IPS3*',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
