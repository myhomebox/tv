//极致播放器专用源

//发布频道：https://t.me/jizhi111
//交流讨论：https://t.me/jizhi222

function getAddress(field) {
    const id = getQueryParameter.call({ url: field.url, key: "id" });
    let url = "http://198.16.100.186:8278/" + id + "/playlist.m3u8";
    const tid = "mc42afe745533";
    const t = String(Math.floor(Date.now() / 150));
    const tsum = md5.call("tvata nginx auth module" + "/" + id + "/playlist.m3u8" + tid + t);
    url += "?tid=" + tid + "&" + "ct=" + t + "&tsum=" + tsum;
    return JSON.stringify({ url: url, headers: { 'CLIENT-IP': '127.0.0.1', 'X-FORWARDED-FOR': '127.0.0.1' } });
}