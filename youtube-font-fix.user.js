// ==UserScript==
// @name         YouTube 字型修正（簡繁體兼容）
// @namespace    https://github.com/anlo1220/youtube-font-fix
// @version      1.0
// @description  在 YouTube 強制使用兼容簡體繁體的字型，避免亂碼或顯示異常
// @author       anlo1220
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @license      MIT
// @supportURL   https://github.com/anlo1220/youtube-font-fix/issues
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body, html, * {
            font-family: "Noto Sans CJK TC", "Noto Sans CJK SC", "Microsoft JhengHei", "Microsoft YaHei", Arial, sans-serif !important;
        }
    `);
})();
