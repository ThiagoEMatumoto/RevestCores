// ===== MENU HAMBÚRGUER MOBILE =====
document.addEventListener("DOMContentLoaded", function () {
  // Força header transparente ao carregar
  const header = document.querySelector(".header");
  if (header) {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";
    header.style.filter = "none";
    header.style.boxShadow = "none";
    header.style.border = "none";
    header.style.borderBottom = "none";
  }

  const hamburger = document.getElementById("hamburger");
  const navMobile = document.getElementById("navMobile");
  const navMobileLinks = document.querySelectorAll(".nav-mobile-link");

  // Toggle do menu mobile
  hamburger.addEventListener("click", function () {
    navMobile.classList.toggle("active");

    // Adiciona/remove classe para animação do ícone (se necessário)
    hamburger.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link
  navMobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMobile.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navMobile.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnHamburger &&
      navMobile.classList.contains("active")
    ) {
      navMobile.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Fecha o menu ao redimensionar a tela (para evitar problemas de responsividade)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 480) {
      navMobile.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// ===== SCROLL SUAVE PARA ÂNCORAS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===== HEADER ATIVO NO SCROLL =====
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;

  // Força header totalmente transparente sempre
  header.style.backgroundColor = "transparent";
  header.style.backdropFilter = "none";
  header.style.webkitBackdropFilter = "none";
  header.style.filter = "none";
  header.style.boxShadow = "none";
  header.style.border = "none";
  header.style.borderBottom = "none";

  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== PREVENÇÃO DE FLASH DE CONTEÚDO =====
window.addEventListener("load", function () {
  document.body.style.visibility = "visible";
});
