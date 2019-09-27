// ==UserScript==
// @name         BETTER TWITCH REDESIGN
// @description  made by bigfoot
// @match        https://www.twitch.tv/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle ( `
.tw-root--theme-dark .channel-root__right-column {
    --color-background-body: rgb(15,12,18);
    font-family: Arial, sans-serif !important;
}

.tw-mg-l-3.tw-mg-t-3 > h1, .tw-mg-b-2 > h1 {
    font-size: 3em;
}

.tw-core-button--primary {
    --color-background-button-primary-default: rgb(100,64,165);
}

body {
    --color-background-body: rgb(15,15,17);
}

.top-nav__menu.tw-c-background-base {
    --color-background-base: rgb(75,54,124);
}

.simplebar-content.dashboard-side-nav-display-flex {
    background-color: rgb(23,20,31);
}

.side-nav {
    --color-background-alt: rgb(23,20,31);
}
` );