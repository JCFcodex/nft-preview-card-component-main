document.addEventListener("DOMContentLoaded", () => {
  var titleElement = document.getElementById("title");

  titleElement.addEventListener("click", () => {
    if (titleElement.classList.contains("active")) {
      titleElement.style.color = ""; // Reset color to default
      titleElement.classList.remove("active");
    } else {
      titleElement.style.color = "cyan";
      titleElement.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var imageViewElement = document.getElementById("image-view");

  imageViewElement.addEventListener("click", function() {
    if (imageViewElement.classList.contains("active")) {
      imageViewElement.style.color = ""; // Reset color to default
      imageViewElement.classList.remove("active");
    } else {
      imageViewElement.style.color = "cyan";
      imageViewElement.classList.add("active");
    }
  });
});