// ==UserScript==
// @name         FUCK THE TWITCH REDESIGN
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

.tw-core-button--primary {
    --color-background-button-primary-default: rgb(100,64,165);
}

.tw-align-items-center > .tw-align-items-center.tw-justify-content-center {
    justify-content: left!important;
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