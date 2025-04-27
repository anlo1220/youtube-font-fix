// ==UserScript==
// @name         YouTube 字型修正（簡繁體兼容）
// @namespace    https://github.com/anlo1220/youtube-font-fix
// @version      1.0
// @description  在 YouTube 上強制套用簡繁體兼容字型，避免簡體字亂碼或顯示異常。
// @author       anlo1220
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @license      MIT
// @supportURL   https://github.com/anlo1220/youtube-font-fix/issues
// @updateURL    https://raw.githubusercontent.com/anlo1220/youtube-font-fix/main/youtube-font-fix.user.js
// @downloadURL  https://raw.githubusercontent.com/anlo1220/youtube-font-fix/main/youtube-font-fix.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body, html, * {
            font-family: 
              "Noto Sans CJK TC", 
              "Noto Sans CJK SC", 
              "Microsoft JhengHei", 
              "Microsoft YaHei", 
              Arial, 
              sans-serif !important;
        }
    `);
})();
