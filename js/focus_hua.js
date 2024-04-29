function getAddress(field) {
    const id = getQueryParameter.call({
        url: field.url,
        key: "id"
    });
    const add = 'http://103.45.68.47:6800/gy/gy_DCxU/p3p端口.php';
    const object = {
        url: add
    };
    const port = get.call(object);
    const hua = 'p3p://108.181.20.'; /*歐華*/
    const focus = 'p3p://108.181.32.'; /*焦點*/
    const id_check = id;
    const id_leng = id.length;
    const focus_logo = ["🇫⁢🇴⁢🇨⁢🇺⁢🇸", "𝔽𝕠𝕔𝕦𝕤", "ℱℴ𝒸𝓊𝓈 ", "𝐅𝐨𝐜𝐮𝐬", "🅕🅞🅒🅤🅢", "🄵🄾🄲🅄🅂", "🅵🅾🅲🆄🆂", "ғᴏᴄᴜs", "𝑭𝒐𝒄𝒖𝒔", "𝙁𝙤𝙘𝙪𝙨"];
    const hua_logo = ["🇴⁢🇺⁢🇭⁢🇦⁢🇺", "𝕆𝕦𝕙𝕒𝕦", "𝒪𝓊𝒽𝒶𝓊 ", "𝐎𝐮𝐡𝐚𝐮", " 🅞🅤🅗🅐🅤", "🄾🅄🄷🄰🅄", "🅾🆄🅷🅰🆄", "ᴏᴜʜᴀᴜ", "𝑶𝒖𝒉𝒂𝒖", "𝙊𝙪𝙝𝙖𝙪"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    idx = getRandomInt(10);
    if (id_check.slice(0, 1) == 0) {
        url = hua + port.slice(0, 9) + '/' + id_check.slice(1, id_leng) + '  ' + hua_logo[idx];
    } else {
        url = focus + port.slice(13, 22) + '/' + id + '  ' + focus_logo[idx];
    }
    return JSON.stringify({
        url: url
    });
}
