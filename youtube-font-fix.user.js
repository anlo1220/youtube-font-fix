// ==UserScript==
// @name         YouTube 字型修正（超完整兼容＋中文選單＋顯示當前字型）
// @namespace    https://github.com/anlo1220/youtube-font-fix
// @version      1.2
// @description  在 YouTube 強制使用系統字型（支援簡繁體），提供中文選單自由切換字型，並顯示目前使用字型！
// @author       anlo1220
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @license      MIT
// @supportURL   https://github.com/anlo1220/youtube-font-fix/issues
// @updateURL    https://github.com/anlo1220/youtube-font-fix/releases/latest/download/youtube-font-fix.user.js
// @downloadURL  https://github.com/anlo1220/youtube-font-fix/releases/latest/download/youtube-font-fix.user.js
// ==/UserScript==

(function() {
    'use strict';

    const fontFamilies = {
        jhenghei: `"Microsoft JhengHei", "PingFang TC", "PingFang SC", "Microsoft YaHei", "Source Han Sans TC", "Source Han Sans SC", Arial, sans-serif`,
        yahei: `"Microsoft YaHei", "PingFang SC", "PingFang TC", "Microsoft JhengHei", "Source Han Sans SC", "Source Han Sans TC", Arial, sans-serif`,
        pingfang: `"PingFang TC", "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", "Source Han Sans TC", "Source Han Sans SC", Arial, sans-serif`,
        sourcehan: `"Source Han Sans TC", "Source Han Sans SC", "Microsoft JhengHei", "Microsoft YaHei", "PingFang TC", "PingFang SC", Arial, sans-serif`,
        default: `Arial, sans-serif`
    };

    const fontLabels = {
        jhenghei: "微軟正黑體風格 (jhenghei)",
        yahei: "微軟雅黑體風格 (yahei)",
        pingfang: "蘋方 PingFang 風格 (pingfang)",
        sourcehan: "思源黑體風格 (sourcehan)",
        default: "系統預設 Arial (default)"
    };

    let userChoice = GM_getValue('youtubeFontChoice', 'jhenghei');

    function applyFont(choice) {
        GM_addStyle(`
            body, html, * {
                font-family: ${fontFamilies[choice]} !important;
            }
        `);
    }

    applyFont(userChoice);

    GM_registerMenuCommand(`【目前字型】→ ${fontLabels[userChoice]}`, () => {
        alert(`目前使用的字型是：${fontLabels[userChoice]}`);
    });

    for (const choice in fontFamilies) {
        GM_registerMenuCommand(`切換字型為: ${fontLabels[choice]}`, () => {
            GM_setValue('youtubeFontChoice', choice);
            alert(`字型已設定為：${fontLabels[choice]} 
請重新整理頁面以套用！`);
        });
    }
})();
