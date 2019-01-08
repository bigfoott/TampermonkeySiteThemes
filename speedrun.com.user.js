// ==UserScript==
// @name         speedrun.com
// @match        https://www.speedrun.com/*
// @exclude      https://www.speedrun.com/api/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle ( `
.panel {
    background: #242426;
}
.panel, .panel .panel-heading {
    border: 0px !important;
}
.panel-heading {
    color: white;
    font-variant: small-caps;
}
nav.navbar {
    background: #7300ab;
    border: 0px;
}
nav.navbar .navbar-bottom .navbar-nav>li>a {
    color: #ededed !important;
    font-variant: small-caps;
}
.nav.navbar-nav>li>a>span>.username {
    color: white !important;
}
body {
    background: #1a1a1c;
    font-size: 15px;
    font-family: Whitney;
}
.nav-tabs {
    border-bottom: 0px;
}
.nav-tabs>li>a {
    background: #1a1a1c !important;
    margin-left: 0px !important;
    border: 0px !important;
    border-radius: 5px 5px 0 0;
}
.nav-tabs>li>a:hover {
    background: #1f1f21 !important;
    border-bottom: 0px !important;
}
.nav-tabs>li.active>a {
    background: #242426 !important;
    border-bottom: 0px !important;
}
.valuesnav>.nav-pills>li>a {
    border: 2px solid transparent;
}
.valuesnav>.nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover {
    background-color: transparent;
    border: 2px solid #7300ab !important;
}
.valuesnav>.nav>li>a:focus, .valuesnav>.nav>li>a:hover, .btn-default {
    background: transparent;
    border: 2px solid white;
    color: white;
    text-shadow: none;
}

@font-face {
	font-family:Whitney;
	font-style:light;
	font-weight:300;
	src:url(https://discordapp.com/assets/8e12fb4f14d9c4592eb8ec9f22337b04.woff)
}
` );