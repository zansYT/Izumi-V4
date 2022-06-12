const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	Balance : $${toCommas(getBalance(sender, balance))}
  Note : *_Bot Ini Masih Dalam Pengembangan Jika Ada Fitur Yang Eror Silakan Hubungi Owner!!!_*
  
  _Ada Bug? Ketik ${prefix}report Bug mu_
  ${readmore}
  *❒ Main Menu ❒*
  ✾ ${prefix}menu
  ✾ ${prefix}owner
  ✾ ${prefix}donasi
  ✾ ${prefix}speed
  ✾ ${prefix}runtime
  ✾ ${prefix}cekprem
  ✾ ${prefix}listprem
  ✾ ${prefix}daftarprem
  ✾ ${prefix}rules
  ✾ ${prefix}sewabot
  ✾ ${prefix}izumi (Text)
  ✾ ${prefix}simi (Text)

  *❒ Converter/Tools*
  ✾ ${prefix}stiker <ReplyGambar/Caption>
  ✾ ${prefix}toimg <ReplyStiker>
  ✾ ${prefix}tovid <ReplyStiker>

  *❒ Downloader*
  ✾ ${prefix}play <Querry>
  ✾ ${prefix}youtube <LinkYt>
  ✾ ${prefix}ytmp4 <LinkYt>
  ✾ ${prefix}ytmp3 <LinkYt>
  ✾ ${prefix}ytmp3vn <LinkYt>
  ✾ ${prefix}getvideo
  ✾ ${prefix}getmusic
  ✾ ${prefix}igv <Instagram Video/Reels>
  ✾ ${prefix}igf <Instagram Image>
  ✾ ${prefix}facebook <LinkFb>
  ✾ ${prefix}mediafire <LinkMediaFire>
  
  *❒ Random Menu ❒*
  ✾ ${prefix}quotes
  ✾ ${prefix}gombalan
  ✾ ${prefix}katagalau
  ✾ ${prefix}cecan
  ✾ ${prefix}cogan
  ✾ ${prefix}naruto
  ✾ ${prefix}loli
  ✾ ${prefix}waifu
  ✾ ${prefix}husbu
  ✾ ${prefix}yaoi

  *❒ Primbon Menu*
  ✾ ${prefix}artimimpi *mimpi*
  ✾ ${prefix}artinama *nama*
  
  *❒ Premium User*
  ✾ ${prefix}asupan
  ✾ ${prefix}xnxx link
  ✾ ${prefix}ahegao
  ✾ ${prefix}bloewjob
  ✾ ${prefix}hentai
  ✾ ${prefix}masturbation
  ✾ ${prefix}pussy
  ✾ ${prefix}tiktok (Link Tiktok)
  ✾ ${prefix}tiktokaudio (Link Tiktok)
  
  *❒ Textpro Menu ❒*
  ✾ ${prefix}thunder (Text)
  ✾ ${prefix}jokerlogo (Text)
  ✾ ${prefix}ninjalogo (Text1) | (Text2)
  ✾ ${prefix}skytext (Text)
  ✾ ${prefix}pornhub (Text1) | (Text2)
  ✾ ${prefix}avengers (Text) | (Text2)
  ✾ ${prefix}youtubegold (Text)
  ✾ ${prefix}youtubesilver (Text)
  ✾ ${prefix}mascotbear (Text)
  ✾ ${prefix}goldenroses (Text)
  ✾ ${prefix}hallowen (Text)
  ✾ ${prefix}grafity (Text)
  ✾ ${prefix}holografic (Text)
  ✾ ${prefix}christmas (Text)
  ✾ ${prefix}luxury (Text)
  ✾ ${prefix}harrypotter (Text)
  ✾ ${prefix}brokenglass (Text)
  ✾ ${prefix}artpapper (Text)
  ✾ ${prefix}watercolor (Text)
  ✾ ${prefix}glossymaker (Text)
  ✾ ${prefix}multicolor (Text)
  ✾ ${prefix}gluetext (Text)
  ✾ ${prefix}neonlight (Text)
  ✾ ${prefix}neondevil (Text)
  ✾ ${prefix}flaming (Text)
  ✾ ${prefix}shadow (Text)
  ✾ ${prefix}wolftext (Text)
  ✾ ${prefix}cup (Text)
  ✾ ${prefix}cup2 (Text)
  ✾ ${prefix}romantic (Text)
  ✾ ${prefix}writetext (Text)
  ✾ ${prefix}woodheart (Text)
  ✾ ${prefix}tahta (Text)
  ✾ ${prefix}waifumaker (Text)
  ✾ ${prefix}lolimaker (Text)
  ✾ ${prefix}kanekimaker (Text)
  ✾ ${prefix}guramaker (Text)
  ✾ ${prefix}leaves (Text)
  ✾ ${prefix}pornhub (Text)
  ✾ ${prefix}3d (Text)
  ✾ ${prefix}christmas (Text)
  ✾ ${prefix}logowolf (Text)
  ✾ ${prefix}logowolf2 (Text)
  
  *❒ Photo Oxy Menu ❒ (Eror)*
  ✾ ${prefix}coffecup (Text)
  ✾ ${prefix}glitch (Text1) | (Text2)
  ✾ ${prefix}undergrass (Text)
  ✾ ${prefix}lovetext (Text)
  ✾ ${prefix}lovetext2 (Text)
  ✾ ${prefix}army (Text)
  ✾ ${prefix}matrix (Text)
  ✾ ${prefix}pubg (Text)
  ✾ ${prefix}breakwall (Text)
  ✾ ${prefix}butterfly (Text)
  ✾ ${prefix}narutotext (Text)
  ✾ ${prefix}smoke (Text)
  ✾ ${prefix}burnpapper (Text)
  ✾ ${prefix}doubleheart (Text)
  
  *❒ Other Menu ❒*
  ✾ ${prefix}shortlink <Link>
  ✾ ${prefix}ssweb <Link>
  ✾ ${prefix}ssdesktop <Link>
  ✾ ${prefix}sshpfull <Link>
  ✾ ${prefix}kbbi <Kata>
  ✾ ${prefix}faktaunik
  ✾ ${prefix}ppcp
  ✾ ${prefix}darkjokes
  ✾ ${prefix}meme
  ✾ ${prefix}covid19
  ✾ ${prefix}cerpen
  ✾ ${prefix}cersex
  ✾ ${prefix}wiki <Query>
  ✾ ${prefix}igstalk <Username>
  ✾ ${prefix}say (Text)
  ✾ ${prefix}qr (Text)
  ✾ ${prefix}readmore (Text)|(Text)
  ✾ ${prefix}hitungmundur 12 10 2022
  ✾ ${prefix}translate <from> <to>
  ✾ ${prefix}lirik <Judul>
  ✾ ${prefix}grupwa <Pencarian>
  ✾ ${prefix}ytsearch <Pencarian>
  ✾ ${prefix}pinterest <Querry>
  ✾ ${prefix}getpp

  *❒ Islamic Menu ❒*
  ✾ ${prefix}quran <nomer>
  ✾ ${prefix}quranaudio <surah> <ayat>
  ✾ ${prefix}listquran <nomer>
  ✾ ${prefix}kisahnabi <Nama Nabi>

  *❒ Nulis Menu ❒*
  ✾ ${prefix}nuliskanan (Text)
  ✾ ${prefix}nuliskiri (Text)
  ✾ ${prefix}foliokanan (Text)
  ✾ ${prefix}foliokiri (Text)
  
  *❒ Vokal Menu ❒*
  ✾ ${prefix}halah
  ✾ ${prefix}hilih
  ✾ ${prefix}heleh
  ✾ ${prefix}huluh
  ✾ ${prefix}holoh
  
  *❒ Game & Fun Menu ❒*
  ✾ ${prefix}tictactoe @tag
  ✾ ${prefix}delttc
  ✾ ${prefix}suit
  ✾ ${prefix}slot
  ✾ ${prefix}tebakgambar
  ✾ ${prefix}apakah <Query>
  ✾ ${prefix}kapankah <Query>
  ✾ ${prefix}rate <Query>
  ✾ ${prefix}gantecek <Nama>
  ✾ ${prefix}cantikcek <Nama>
  ✾ ${prefix}sangecek <Nama>
  ✾ ${prefix}gaycek <Nama>
  ✾ ${prefix}lesbicek <Nama>
  ✾ ${prefix}gimana <Query>
  ✾ ${prefix}bisakah <Query>
  ✾ ${prefix}cekme
  ✾ ${prefix}dadu
  
  *❒ Payment & Bank ❒*
  ✾ ${prefix}buylimit <Jumlah>
  ✾ ${prefix}buyglimit <Jumlah>
  ✾ ${prefix}transfer @tag <jumlah>
  ✾ ${prefix}limit
  ✾ ${prefix}balance
  ✾ ${prefix}topbalance

  *❒ Group Menu ❒*
  ✾ ${prefix}linkgrup
  ✾ ${prefix}setppgrup
  ✾ ${prefix}setnamegc
  ✾ ${prefix}setdesc
  ✾ ${prefix}group <Open/Close>
  ✾ ${prefix}revoke
  ✾ ${prefix}hidetag (Text)
  ✾ ${prefix}kick <@tag>
  ✾ ${prefix}add <@tag>
  
  *❒ Owner Menu ❒*
  > evalcode
  x evalcode-2
  $ executor
  ✾ ${prefix}setppbot
  ✾ ${prefix}exif
  ✾ ${prefix}textchat
  ✾ ${prefix}leave
  ✾ ${prefix}addprem
  ✾ ${prefix}delprem
  ✾ ${prefix}broadcast

  *THANKS TO*
  - My God
  - Baileys-Md (Adiwa Jshing)
  - @irfann._x (Iyan)
  - @arsrfi.jpg (Arasya)
  - M Hadi Firmansya (Hadi Api)
  - @melcanz_ (Amel)
  - @chris.tianid (Christian ID)
  - @hardianto.xyz (Anto)`
}