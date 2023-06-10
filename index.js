const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".nav_lista_secciones_sitio");

//const suscripcionPanel = querySelector(".div_suscripcion");



navToggle.addEventListener("click", () => {
  
  navMenu.classList.toggle("nav_lista_secciones_sitio_visible");
  //suscripcionPanel.classList.toggle("div_suscripcion_visible");
  //navMenu.classList.toggle("div_suscripcion_visible");
 

  if (navMenu.classList.contains("menu_header_nav_var")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});



//const navLogo = document.querySelector(".header_nav_logo1");


///navLogo.addEventListener("click", () => {
 
  //suscripcionPanel.classList.toggle("div_suscripcion_visible");

//})

