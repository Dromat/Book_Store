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
})


document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(button => {
    const book = button.closest('.book');
    const bookContent = book.querySelector('.book p');

    if (bookContent.scrollHeight > 90) {
      if(bookContent.scrollHeight > 100){
        button.style.display = 'block';
      }
      else{
        bookContent.style.maxHeight = "100px";
      }
    } else {
      button.style.display = 'none';
    }

    button.addEventListener('click', function() {
      if (bookContent.style.maxHeight) {
        bookContent.style.maxHeight = null;
        this.textContent = 'Mostrar más';
      } else {
        bookContent.style.maxHeight = bookContent.scrollHeight + 'px';
        this.textContent = 'Mostrar menos';
      }
    });
  });
});

