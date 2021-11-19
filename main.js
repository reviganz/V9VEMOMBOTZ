const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./Revibotz.js')
nocache('./Revibotz.js', module => console.log(`${module} telah di update!`))

const starts = async (Revibotz = new WAConnection()) => {
    Revibotz.logger.level = 'warn'
    Revibotz.version = [2,2142,12]
//function _0x3ab7(_0x323e7b,_0xf98192){var _0x19281d=_0x1928();return _0x3ab7=function(_0x3ab720,_0x21b17e){_0x3ab720=_0x3ab720-0x1bc;var _0x34c2b2=_0x19281d[_0x3ab720];return _0x34c2b2;},_0x3ab7(_0x323e7b,_0xf98192);}var _0x3ccdec=_0x3ab7;function _0x1928(){var _0x3e76b1=['31092mOhVGa','60XhHTIy','9209120wvQyih','30KoevrD','4261710hEoKWp','33472oxxMwt','94rPJnNt','551642pNnrId','Opera','3102920jecioL','9197784MfyLqh','3.0','Zero\x20YT7','browserDescription'];_0x1928=function(){return _0x3e76b1;};return _0x1928();}(function(_0x2afb88,_0x3230a3){var _0x5142ea=_0x3ab7,_0x5104b1=_0x2afb88();while(!![]){try{var _0x45924c=parseInt(_0x5142ea(0x1bd))/0x1*(parseInt(_0x5142ea(0x1be))/0x2)+-parseInt(_0x5142ea(0x1bc))/0x3+parseInt(_0x5142ea(0x1c6))/0x4*(-parseInt(_0x5142ea(0x1c7))/0x5)+parseInt(_0x5142ea(0x1c9))/0x6*(parseInt(_0x5142ea(0x1bf))/0x7)+parseInt(_0x5142ea(0x1c1))/0x8+parseInt(_0x5142ea(0x1c2))/0x9+-parseInt(_0x5142ea(0x1c8))/0xa;if(_0x45924c===_0x3230a3)break;else _0x5104b1['push'](_0x5104b1['shift']());}catch(_0x4cf233){_0x5104b1['push'](_0x5104b1['shift']());}}}(_0x1928,0xe60d9),zeroyt7[_0x3ccdec(0x1c5)]=[_0x3ccdec(0x1c4),_0x3ccdec(0x1c0),_0x3ccdec(0x1c3)]);
    console.log(banner)
    Revibotz.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Revibotz.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Revibotz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./Ndyie.json') && Revibotz.loadAuthInfo('./Ndyie.json')
    Revibotz.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    Revibotz.on('open', () => {
        success('2', 'Terhubung Jangan Lupa Subscribe YT EDIT 3D')
    })
    await Revibotz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Ndyie.json', JSON.stringify(Revibotz.base64EncodedAuthInfo(), null, '\t'))

    Revibotz.on('chat-update', async (message) => {
        require('./Revibotz.js')(Revibotz, message, _welkom)
    })
Revibotz.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await Revibotz.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await Revibotz.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await Revibotz.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(Revibotz.user.jid)) {
        Revibotz.sendMessage(anu.jid, "Halo Saya Venom Botz Jika Ada Perlu Ketik #menu", "conversation")
      }
      if (!isWelkom) return
      if (anu.action == "add" && !mem.includes(Revibotz.user.jid)) {
        mdata = await Revibotz.groupMetadata(anu.jid)
        memeg = mdata.participants.length
        num = anu.participants[0]
        let v = Revibotz.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        wel = `Halo @${anu_user} \nWelcome In ${mdata.subject} \nJangan Lupa Follow Sosial Media Ownerku\n• Youtube : https://youtube.com/channel/UC9WgqpVGWW87R3RWjmAxZgg\n• Instagram : https://instagram.com/venom_botz\n• Tiktok : https://vt.tiktok.com/ZSehHMmY9/\n• Github : https://github.com/reviganz`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/Jqn8mQ8/20211013-212323.jpg`
        )

        but = [
          { buttonId: 'add', buttonText: { displayText: 'Welcome Member Baru' }, type: 1 }
        ]
        sendButImage(mdata.id, wel, "©Created : Venom Botz", buff, but)
      }
      if (!isWelkom) return
      if (anu.action == "remove" && !mem.includes(Revibotz.user.jid)) {
        mdata = await Revibotz.groupMetadata(anu.jid)
        num = anu.participants[0]
        let w = Revibotz.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        memeg = mdata.participants.length
        out = `Mari Kita Doakan Bersama-Sama Buat Yang Keluar \nSayonara @${anu_user} Semoga Tenang Di Alam Sana`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/Jqn8mQ8/20211013-212323.jpg`
        )

        but = [
          { buttonId: 'remove', buttonText: { displayText: 'Selamat Tinggal' }, type: 1 }
        ]
        sendButImage(mdata.id, out, "©Created : Venom Botz", buff, but)
      }
      if (anu.action == "promote") {
        const mdata = await Revibotz.groupMetadata(anu.jid)
        anu_user = Revibotz.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await Revibotz.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        Revibotz.sendMessage(mdata.id, teks, MessageType.text)
      }

      if (anu.action == "demote") {
        anu_user = Revibotz.contacts[mem]
        num = anu.participants[0]
        const mdata = await Revibotz.groupMetadata(anu.jid)
        try {
          ppimg = await Revibotz.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        )
        teks = `@${num.split("@")[0]} Telah didemote`
        Revibotz.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
