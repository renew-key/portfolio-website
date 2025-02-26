(function () {
  const header = document.getElementById("header");
  // console.log(header);
  header.style.boxShadow = "none";
  window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.boxShadow = "0 10px 6px -6px #777";
    }
  });
})();
