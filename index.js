document.addEventListener("DOMContentLoaded", function() {
  const changeButtons = document.querySelectorAll(".change-button");
  
  changeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const book = button.parentElement;
      book.style.backgroundColor = getRandomColor();
      book.style.color = getRandomColor();
    });
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
