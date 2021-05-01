export default function scrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    //se exitem sessões
    const windowMetade = window.innerHeight * 0.6; //60% da altura da janela

    function handleAnimationScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; //pega altura do elemento até o topo da página
        const isSectionViseble = sectionTop - windowMetade < 0;

        if (isSectionViseble) section.classList.add("active");
        else if (section.classList.contains('active')) section.classList.remove("active");
      });
    }
    handleAnimationScroll();
    window.addEventListener("scroll", handleAnimationScroll);
  }
}
