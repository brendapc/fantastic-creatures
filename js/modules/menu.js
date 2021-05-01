export default function handleMenu() {
  const imgList = document.querySelectorAll(".js-imglist li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (imgList.length && tabContent) {
    tabContent[0].classList.add("active");

    function handleActive(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    }

    imgList.forEach((item, index) => {
      item.addEventListener("click", () => {
        handleActive(index);
      });
    });
  }
}
