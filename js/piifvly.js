
var key = CryptoJS.enc.Base64.parse("MmFjZjdlOTFlOTg2NDY3Mw==");
var iv = CryptoJS.enc.Base64.parse("MWMyOTg4MmQzZGRmY2ZkNg==");

globalThis.aesjiam = function (word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

globalThis.aesjiem = function (word) {
    var srcs = word;
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
}

globalThis.gethh = function (text) {
    let lineLength = 76;
    let result = '';
    for (let i = 0; i < text.length; i += lineLength) {
        result += text.substring(i, i + lineLength) + '\n';
    }
    return result;
}

var rule = {
    title: '91制片厂',
    host: 'https://api2.piifvly.com',
    url: '/api.php/api/mv/list_construct',
    headers: {
        'Host': 'api2.piifvly.com',
        'User-Agent': 'okhttp/4.2.2',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    searchable: 2,
    quickSearch: 1,
    filterable: 1,
    class_name: '推薦&電視劇&綜藝&動漫',
    class_url: '1&2&3&4',
    proxy_rule: $js.toString(() => {
        if (input.url.includes('jpeg')) {
            let url = input.url
            let data = fetch(url, { toBase64: true, headers: { 'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 11; M2012K10C Build/RP1A.200720.011)' } })
            let key = CryptoJS.enc.Utf8.parse("f5d965df75336270");
            let iv = CryptoJS.enc.Utf8.parse("97b60394abc2fbe1");
            let encrypted = CryptoJS.AES.decrypt({
                ciphertext: CryptoJS.enc.Base64.parse(data)
            }, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Base64);
            let img_base64 = 'data:image/jpeg;base64,' + encrypted;
            input = [200, 'image/jpeg', img_base64, null, 1]
        } else {
            var key = CryptoJS.enc.Hex.parse("13d47399bda541b85e55830528d4e66f1791585b2d2216f23215c4c63ebace31");
            function AES_Decrypt(word) {
                var srcs = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(word));
                var decrypt = CryptoJS.AES.decrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CFB,
                    padding: CryptoJS.pad.NoPadding
                });
                return decrypt.toString(CryptoJS.enc.Utf8);
            }
            let url = input.url
            let data = fetch(url, { headers: { 'User-Agent': 'Lavf/57.83.100' } })
            var iv = CryptoJS.enc.Hex.parse(data.substring(0, 32))
            data = data.substring(32)
            let data1 = AES_Decrypt(data)
            let m3u8 = data1
            // log(m3u8)
            input = [200, 'application/vnd.apple.mpegurl', m3u8]
        }

    }),
    play_parse: true,
    lazy: $js.toString(() => {
        let url = getProxyUrl() + '&url=' + input
        input = {
            url: url,
            parse: 0,
            header: rule.headers
        }
        setResult(d)
    }),

    一级: $js.toString(() => {
        let t = Math.floor(Date.now() / 1000).toString();
        let body = JSON.stringify({ "_hash": t, "bundleId": "com.pwa.zpcpj", "limit": "16", "oauth_type": "web", "oauth_id": "8aaad42ee82d314564781ecd490636b2", "language": "zh", "id": MY_CATE, "page": MY_PAGE.toString(), "version": "1.7.0", "via": "pwa", "token": "" })
        let jmdb = aesjiam(body)
        let hhh = gethh(jmdb)
        let sign = `client=pwa&data=${hhh}&timestamp=${t}5589d41f92a597d016b037ac37db243d`
        let sign1 = md5(CryptoJS.SHA256(sign).toString())
        let body1 = `data=${encodeURIComponent(hhh)}&sign=${sign1}&client=pwa&timestamp=${t}`
        let data = JSON.parse(fetch(MY_URL, {
            method: 'POST',
            body: body1
        })).data
        let data1 = JSON.parse(aesjiem(data)).data.list
        data1.forEach(it => {
            d.push({
                url: it.id,
                title: it.title,
                img: getProxyUrl() + '&url=' + it.cover_horizontal,
                desc: it.tag_list[0],
            })
        });
        setResult(d)
    }),
    二级: $js.toString(() => {
        let t = Math.floor(Date.now() / 1000).toString();
        let body = JSON.stringify({ "_hash": t, "bundleId": "com.pwa.zpcpj", "oauth_type": "web", "oauth_id": "e422daf8efc24c483024b80922f060e3", "language": "zh", "id": vod_id, "version": "1.7.0", "via": "pwa", "token": "" })
        let jmdb = aesjiam(body)
        let hhh = gethh(jmdb)
        let sign = `client=pwa&data=${hhh}&timestamp=${t}5589d41f92a597d016b037ac37db243d`
        let sign1 = md5(CryptoJS.SHA256(sign).toString())
        let body1 = `data=${encodeURIComponent(hhh)}&sign=${sign1}&client=pwa&timestamp=${t}`
        let data = JSON.parse(fetch('https://api2.piifvly.com/api.php/api/mv/getDetail', {
            method: 'POST',
            body: body1
        })).data
        let data1 = JSON.parse(aesjiem(data)).data.detail
        VOD = {
            vod_name: data1.title,
            vod_play_from: '91制片厂',
            vod_play_url: data1.title + "$" + data1.preview_url
        }
    }),
}