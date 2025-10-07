// boot.js
(function(){
  const K_THEME="SYS_THEME", K_LANG="SYS_LANG", K_LOGO="SYS_LOGO";
  const theme = JSON.parse(localStorage.getItem(K_THEME) || '"light"');
  if(theme==="dark"){ document.documentElement.classList.add("theme-dark"); }
  else{ document.documentElement.classList.remove("theme-dark"); }

  // idioma (i18n.js usa)
  const lang = JSON.parse(localStorage.getItem(K_LANG) || '"pt-BR"');
  document.documentElement.setAttribute("lang", lang);

  // logo no cabeçalho (se existir na página)
  const logo = JSON.parse(localStorage.getItem(K_LOGO) || "null");
  window.addEventListener("DOMContentLoaded",()=>{
    const img = document.getElementById("logoHead");
    if(img && logo){ img.src = logo; img.style.display="block"; }
  });
})();
