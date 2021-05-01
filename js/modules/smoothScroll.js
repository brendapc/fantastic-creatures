export default function smoothScroll() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  function handleScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const element = document.querySelector(href);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", handleScroll);
  });
}
