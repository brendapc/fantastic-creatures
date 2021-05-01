export default function handleAccordion() {
  const accordionContent = document.querySelectorAll(".js-accordion dt");
  accordionContent[0].classList.add("active");
  accordionContent[0].nextElementSibling.classList.add("active");

  function handleToggle() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  accordionContent.forEach((item) => {
    item.addEventListener("click", handleToggle);
  });
}
