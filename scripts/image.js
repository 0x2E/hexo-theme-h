// 魔改自 https://blog.skk.moe/post/img-lazyload-hexo/
'use strict';

hexo.extend.filter.register('after_post_render', process);

function process(data) {
    data.content = lazyProcess.call(this, data.content);
    return data;
};

function lazyProcess(htmlContent)  {

    return htmlContent.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, addr, p3)  =>  {
        if (/data-src/gi.test(str)) {
            return str;
        }
        str = str.replace(/\s+(src="\S*?")/gi, ` `);
        if (/class="(.*?)"/gi.test(str)){
            str = str.replace(/class="(.*?)"/gi, (classStr, p1) => {
                return classStr.replace(p1, `${p1} postimg`);
            })
            return str.replace(p3, `${p3} data-src="${addr}"`);
        }
        return str.replace(` ${p3}`, ` ${p3} class="postimg" data-src="${addr}"`);
    });
}
