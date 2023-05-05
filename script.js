'use strict';

const $form = document.querySelector('.form');
const $shoppingList = document.querySelector('.shpping-list');
const $inputList = document.querySelector('.input-list');
let totalNum = 0;

const createList = (text) => {
  const $item = document.createElement('li');
  const $text = document.createElement('span');
  $text.innerText = text;
  const $button = document.createElement('button');
  $button.innerHTML = `<i class="fa-solid fa-trash-can"></i></button> `;
  $item.append($text, $button);
  $button.addEventListener('click', () => deleteList($item));
  return $item;
};

const onAdd = () => {
  const text = $inputList.value;
  if (!text) {
    $inputList.focus();
    return;
  }
  const $list = createList(text);
  totalNum++;
  $inputList.value = '';
  $inputList.focus();
  $shoppingList.appendChild($list);
};
const showCount = () => {
  const $totalNum = document.querySelector('.total-num');
  $totalNum.innerText = `${totalNum ? totalNum : ''}`;
};

const deleteList = ($item) => {
  $item.remove();
  totalNum--;
  showCount(totalNum);
};

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
  showCount();
});
