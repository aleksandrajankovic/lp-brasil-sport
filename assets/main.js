document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("heroSection");
  const cta = document.getElementById("stickyCta");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          cta.classList.remove("hidden");
        } else {
          cta.classList.add("hidden");
        }
      });
    },
    {
      root: null,
      threshold: 0,
    }
  );

  observer.observe(hero);
});

/* ACCORDION */
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = Array.from(document.querySelectorAll(".faq-button"));
  const faqContents = Array.from(document.querySelectorAll(".faq-content"));
  const VISIBLE_COUNT = 4;

  // accordion click
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.classList.toggle("hidden");

      // okretanje strelice
      const arrow = btn.querySelector("img");
      if (arrow) arrow.classList.toggle("rotate-90");
    });
  });

  // sakrij sve posle 4.
  for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
    faqButtons[i].classList.add("hidden");
    faqContents[i].classList.add("hidden");
  }

  // SHOW MORE / SHOW LESS
  const showMoreBtn = document.getElementById("faqShowMore");
  if (showMoreBtn) {
    let expanded = false;

    showMoreBtn.addEventListener("click", () => {
      expanded = !expanded;

      for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
        faqButtons[i].classList.toggle("hidden");

        faqContents[i].classList.add("hidden");
      }

      showMoreBtn.textContent = expanded ? "Mostrar menos" : "Mostrar mais";
    });
  }
});

/* WINNERS SLIDER – 2 PROMO KARTICE */
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = [
    document.getElementById("winnersGridMobile"),
    document.getElementById("winnersGridDesktop"),
  ].filter(Boolean);
  if (!wrappers.length) return;
  const cards = [
    {
      id: "sport",
      title: "100% de freebet nas ligas",
      text: "Receba 2 freebets semanais",
      img: "./assets/images/esport.png",
      alt: "Promo Sport",
      gradientDesk: "bg-[linear-gradient(180deg,#234919_30px,#030A0E_16vw)]",
      gradient: "bg-gradient-to-br from-[#234919] via-[#234919] to-[#030A0E]",
    },
    {
      id: "sport",
      title: "Pagamento antecipado",
      text: "Bilhete vencedor antes do jogo terminar ",
      img: "./assets/images/vila.png",
      alt: "Promo Sport",
      gradientDesk: "bg-[linear-gradient(180deg,#234919_30px,#030A0E_16vw)]",
      gradient: "bg-gradient-to-br from-[#234919] via-[#234919] to-[#030A0E]",
    },
    {
      id: "sport",
      title: "10% de cashback ",
      text: "Toda semana",
      img: "./assets/images/vila.png",
      alt: "Promo Sport",
      gradientDesk: "bg-[linear-gradient(180deg,#234919_30px,#030A0E_16vw)]",
      gradient: "bg-gradient-to-br from-[#234919] via-[#234919] to-[#030A0E]",
    },
    {
      id: "sport",
      title: "R$30 de freebet ",
      text: "Todo final de semana",
      img: "./assets/images/vila.png",
      alt: "Promo Sport",
      gradientDesk: "bg-[linear-gradient(180deg,#234919_30px,#030A0E_16vw)]",
      gradient: "bg-gradient-to-br from-[#234919] via-[#234919] to-[#030A0E]",
    },
    {
      id: "sport",
      title: "150% de bônus",
      text: "Aumente suas chances",
      img: "./assets/images/vila.png",
      alt: "Promo Sport",
      gradientDesk: "bg-[linear-gradient(180deg,#234919_30px,#030A0E_16vw)]",
      gradient: "bg-gradient-to-br from-[#234919] via-[#234919] to-[#030A0E]",
    },
    {
      id: "sport",
      title: "Bet boost",
      text: "Potencialize seus ganhos",
      img: "./assets/images/vila.png",
      alt: "Promo Sport",
      gradientDesk: "bg-[linear-gradient(180deg,#234919_30px,#030A0E_16vw)]",
      gradient: "bg-gradient-to-br from-[#234919] via-[#234919] to-[#030A0E]",
    },
  ];

  function renderInto(wrapper) {
    wrapper.innerHTML = "";
    cards.forEach((card) => {
      const slide = document.createElement("div");
      slide.className =
        "swiper-slide flex items-stretch justify-center px-1 md:px-2";
      slide.innerHTML = `
        <div class="relative w-full max-w-none h-[200px] rounded-[12px] px-6 py-6
                    md:${card.gradientDesk} bg-gradient-to-br ${card.gradient}
                    flex items-start sm:items-center gap-4 md:gap-6">
          <div class="flex-1 text-left">
            <p class="font-bold uppercase text-[22px] text-[#d9a445] leading-tight">${card.title}</p>
            <p class="mt-3 text-[18px] md:text-[18px] leading-snug text-[#fff]">${card.text}</p>
          </div>

          <div class="flex-shrink-0 hidden sm:block">
            <img src="${card.img}" alt="${card.alt}"
                 class="w-[80px] md:w-[90px] lg:w-[110px] h-[100px] object-contain"
                 loading="lazy" decoding="async" />
          </div>

          <img src="${card.img}" alt="${card.alt}"
               class="block sm:hidden w-[100px] h-[150px] object-contain"
               loading="lazy" decoding="async" />
        </div>
      `;
      wrapper.appendChild(slide);
    });
  }

  wrappers.forEach(renderInto);

  const swiperOpts = {
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      0: { slidesPerView: 1.05, allowTouchMove: true },
      640: { slidesPerView: 1.2, allowTouchMove: true },
      1024: { slidesPerView: 3, allowTouchMove: true },
    },
  };

  if (document.querySelector(".winners-swiper-mobile")) {
    new Swiper(".winners-swiper-mobile", swiperOpts);
  }
  if (document.querySelector(".winners-swiper-desktop")) {
    new Swiper(".winners-swiper-desktop", swiperOpts);
  }
});

/*SPORTS SLIDER*/
(function () {
  const marquee = document.querySelector(".sports-marquee");
  const track = document.querySelector("#sportsTrack");
  const sets = track?.querySelectorAll(".sports-set");
  if (!marquee || !track || !sets || sets.length < 2) return;

  let x = 0;
  let speed = 0.6;

  function getShift() {
    return sets[1].offsetLeft;
  }

  let shift = getShift();

  function tick() {
    x -= speed;

    if (-x >= shift) x += shift;

    track.style.transform = `translateX(${x}px)`;
    raf = requestAnimationFrame(tick);
  }

  let raf = requestAnimationFrame(tick);

  // pauza na hover
  marquee.addEventListener("mouseenter", () => cancelAnimationFrame(raf));
  marquee.addEventListener(
    "mouseleave",
    () => (raf = requestAnimationFrame(tick))
  );

  window.addEventListener("resize", () => {
    shift = getShift();
  });
})();

/*FOOTER SLIDER*/

function autoSlide(sliderContainer) {
  const wrapper = sliderContainer.querySelector(".slider-wrapper");
  const slides = sliderContainer.querySelectorAll(".slider-slide");

  // Ako nema ili je samo jedan slajd, ne pokreći auto klizanje
  if (!wrapper || slides.length < 2) {
    // centriraj statični jedan logo
    sliderContainer.classList.add("is-static");
    return;
  }

  const slideWidth = slides[0].offsetWidth;
  let currentPosition = 0;

  function moveSlides() {
    currentPosition -= 1;
    wrapper.style.transform = `translateX(${currentPosition}px)`;

    if (Math.abs(currentPosition) >= slideWidth) {
      currentPosition = 0;
      wrapper.style.transition = "none";
      wrapper.appendChild(wrapper.firstElementChild);
      wrapper.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(() => (wrapper.style.transition = ""));
    }
  }

  setInterval(moveSlides, 30);
}

// pokreni za sve, ali funkcija će sama isključiti gde treba
document.querySelectorAll(".slider-container").forEach(autoSlide);

(function () {
  const ua = navigator.userAgent.toLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(ua); // svi iOS browseri
  const isMacSafari =
    /macintosh/.test(ua) &&
    /safari/.test(ua) &&
    !/chrome|chromium|edg/.test(ua);

  if (isIOS || isMacSafari) {
    document.documentElement.classList.add("no-hero-bg");
  }
})();
