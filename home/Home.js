let cardDelete = document.getElementById("rimuovi");
let heroDelete = document.getElementById("heroRemove");
let dressDelete = document.getElementById("dressDelete");
let nagatoro = document.getElementById("nagatoro");

const deleteCard = document.querySelectorAll(".bottone ");
const deleteKey = document.querySelectorAll(".delete");
const deleteDanger = document.querySelectorAll(".pericolo");
const elimina = document.querySelectorAll(".elimina");
deleteCard.forEach((button) => {
  button.addEventListener("click", () => {
    cardDelete.remove();
  });
});

deleteKey.forEach((button) => {
  button.addEventListener("click", () => {
    heroDelete.remove();
  });
});

elimina.forEach((button) => {
  button.addEventListener("click", () => {
    nagatoro.remove();
  });
});

deleteDanger.forEach((button) => {
  button.addEventListener("click", () => {
    dressDelete.remove();
  });
});
