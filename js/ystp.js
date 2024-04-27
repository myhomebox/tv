function getAddress(field) {
    const id = getQueryParameter.call({ url: field.url, key: "id" });
    const c = getQueryParameter.call({ url: field.url, key: "c" });

    const headers = {
        "User-Agent": "cctv_app_tv",
        "Referer": "api.cctv.cn",
        "UID": "1234123122"
    };

    const cache = getCache.call(id);

    if (cache !== null) {
        return JSON.stringify({ "url": cache, "headers": headers, "cache": true });
    }

    const body = 'appcommon={ "ap": "cctv_app_tv", "an": "央视投屏助手", "adid": "1234123122", "av": "1.1.7" }&url=' + 'http://liveali-' + c + '.cctv.cn/live/' + id;
    const submit = { url: "https://ytpvdn.cctv.cn/cctvmobileinf/rest/cctv/videoliveUrl/getstream", headers: JSON.stringify(headers), body: body };

    const res = post.call(submit);

    if (res == null) {
        return res;
    }
    const json = JSON.parse(res);
    setCache.call({ name: id, value: json.url, expire: "3600000" });
    return JSON.stringify({ "url": json.url, "headers": headers, "cache": false });
}
