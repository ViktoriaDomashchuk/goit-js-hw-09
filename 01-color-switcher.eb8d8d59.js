!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")};t.stop.addEventListener("click",(function(){clearInterval(o),n()}));var o=null;t.start.addEventListener("click",(function(){o=setInterval((function(){t.bodyColor.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e()}));var e=function(){t.start.disabled=!0},n=function(){t.start.disabled=!1}}();
//# sourceMappingURL=01-color-switcher.eb8d8d59.js.map
