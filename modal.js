document.getElementById("openModal").addEventListener("click", function () {
  //  Обращение к кнопке openModal , клик
  document.getElementById("my-modal").classList.add("open"); // Открыть окно, добавляем класс open
});

document.getElementById("closeBtn").addEventListener("click", function () {
  //  Обращение к кнопке closeBtn , клик.  Закрываем модальное окно
  document.getElementById("my-modal").classList.remove("open"); //  Id my-modal,  метод remove удаляет класс open
});

window.addEventListener("click", (e) => {
  const modalWindow = document.getElementById("my-modal");
  if (e.target === modalWindow) {
    modalWindow.classList.remove("open");
  }
});
window.addEventListener("keydown", (e) => {
  // Закрвть окно кнопкой Esc
  if (e.key === "Escape") {
    // Условие, если нажали  Esc
    document.getElementById("my-modal").classList.remove("open"); // удаляем класс open
  }
});
