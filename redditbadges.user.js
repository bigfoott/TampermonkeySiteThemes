// ==UserScript==
// @name         replace reddit badges with minecraft items
// @match        https://old.reddit.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle ( `
.gilded-gid1-icon:before, .gilded-gid2-icon:before, .gilded-gid3-icon:before {
    background-position: 0px;
}
.gilded-gid1-icon:before {
    background-image: url(https://i.imgur.com/mbkWkQ4.png);
}
.gilded-gid2-icon:before {
    background-image: url(https://i.imgur.com/BnNVp5c.png);
}
.gilded-gid3-icon:before {
    background-image: url(https://i.imgur.com/IsIWljF.png);
}

` );