function getAddress(field) {
    const id = getQueryParameter.call({ url: field.url, key: "id" });
    const s = getQueryParameter.call({ url: field.url, key: "s" });

    let fabu, ouhauCache, focusCache, res, result;

    // 检查是否存在已缓存的端口信息
    ouhauCache = getCache.call('OUHAU');
    focusCache = getCache.call('FOCHS');

    if (s === 'ouhau' && ouhauCache !== null) {
        return JSON.stringify({ url: `p3p://108.181.20.159:${ouhauCache}/${id}` });
    } else if (s === 'focus' && focusCache !== null) {
        return JSON.stringify({ url: `p3p://108.181.32.169:${focusCache}/${id}` });
    }

    const nameAPI = 'FABU';
    fabu = getCache.call(nameAPI);

    // 如果地址缓存不存在或已过期，则重新获取
    if (fabu === null) {
        const headers = {
            'User-Agent': 'regimcode_162100bbs=123'
        };

        res = post.call({ url: 'http://103.45.68.47:6800/gy/gy-urkP.php', headers: JSON.stringify(headers), body: 'captcha=123' });

        result = />p3p端口：<a href="(.*?)"/.exec(res);

        if (!result) {
            return JSON.stringify({ error: '获取接口出错！' });
        }

        fabu = result[1];
        setCache.call({ name: nameAPI, value: fabu, expire: "21600000000" });
    }

    res = get.call({ url: fabu });
    result = [...res.matchAll(/(\d+):(\d+)/g)];

    if (!result) {
        return JSON.stringify({ error: '获取端口出错！' });
    }

    for (const match of result) {
        if (match[1] === '159') {
            ouhauCache = match[2];
            setCache.call({ name: 'OUHAU', value: match[2], expire: "21600000000" });
        } else if (match[1] === '169') {
            focusCache = match[2];
            setCache.call({ name: 'FOCHS', value: match[2], expire: "21600000000" });
        }
    }

    if (s === 'ouhau') {
        if (ouhauCache === null) {
            return JSON.stringify({ error: '获取端口出错！' });
        } else {
            return JSON.stringify({ url: `p3p://108.181.20.159:${ouhauCache}/${id}` });
        }
    } else if (s === 'focus') {
        if (focusCache === null) {
            return JSON.stringify({ error: '获取端口出错！' });
        } else {
            return JSON.stringify({ url: `p3p://108.181.32.169:${focusCache}/${id}` });
        }
    }

    return JSON.stringify({ error: '列表不正确！' });
}
