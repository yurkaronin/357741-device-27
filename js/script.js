/* Основные переменные для работы с кнопками и модалками */
var buttonForm = document.querySelector('.button__modal-call'); /* Объявляем переменную и присваиваем ей значение -выбираем элемент кнопка вызова модального окна*/
var modalWriteUs = document.querySelector('.modal__write-us'); /* Объявляем переменную и присваиваем ей значение -выбираем элемент в документе - модальное окно с формой */
var closeBtn = document.querySelector('.modal__write-us  .close-btn'); /* Объявляем переменную и присваиваем ей значение - выбираем кнопку закрытия окна в разметке */

/* Улучшаем нашу форму */
var loginInput = modalWriteUs.querySelector('[name=name]'); /* Объявление переменной. присваивание значения - поле ввода имени в модальном окне */
var emailInput = modalWriteUs.querySelector('[name=email]'); /* Объявление переменной. присваивание значения - поле ввода электропочты в модальном окне */
var writeUsForm = modalWriteUs.querySelector('.write-us__form'); /* Объявление переменной. присваивание значения - форма в модальном окне */
var storage = localStorage.getItem('loginInput');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('loginInput');
} catch (err) {
  isStorageSupport = false;
}

/* Обработчик на открытие модального окна с контактной формой */
buttonForm.addEventListener('click', function (evt) {
  evt.preventDefault(); /* отменяем действие по умолчанию - 'переход по ссылке при клике' */
  modalWriteUs.classList.add('modal-show'); /* добавляем к модалке дополнительный класс, для того что бы форма отобразилась на странице */
  if (storage) {
    loginInput.value = storage;
    emailInput.focus(); /* вызываем метод 'Фокус' в поле ввода имени? но только ЕСЛИ у нас подставилось имя пользователя из Локального хранилища (Local Storage) в поле ввода имени */
  } else {
    loginInput.focus(); /* вызываем метод 'Фокус' в поле ввода имени, если оно ранее не подставилось из локального хранилища */
  }

});

/* Обработчик на закрытие модального окна с формой */
closeBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove('modal-show');
  modalWriteUs.classList.remove('modal-error');
});

/* Обработчик отправки с условиями проверки */
writeUsForm.addEventListener('submit', function (evt) {
  if (!loginInput.value || !emailInput.value) {
    evt.preventDefault();
    modalWriteUs.classList.remove('modal-error');
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth; /* Вставляем костыль, для реализации бесконечного повтора анимации при ошибке заполнения формы - перезаписываем ширину окна на то же самое значение */
    modalWriteUs.classList.add('modal-error');

  } else {
    if (isStorageSupport) {
      localStorage.setItem('loginInput', loginInput.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalWriteUs.classList.contains('modal-show')) {
      evt.preventDefault();
      modalWriteUs.classList.remove('modal-show');
      modalWriteUs.classList.remove('modal-error');
    }
  }
});

/* Модалка с картой  */
var buttonMap = document.querySelector('.contacts__button-map');
var modalMap = document.querySelector('.modal__map');
var closeMap = document.querySelector('.modal__map .close-btn');

buttonMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains('modal-show')) {
      evt.preventDefault();
      modalMap.classList.remove('modal-show');
    }
  }
});
