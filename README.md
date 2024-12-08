# AMIR Guarantee Service Website

## Описание проекта
Это веб-сайт для онлайн-сервиса гарантии транзакций, разработанный с использованием HTML, CSS и JavaScript. Сайт предлагает пользователям безопасные гарантии сделок и интеграцию с Telegram.

## Основные функции
- **Анимации**: Элементы сайта плавно появляются при прокрутке, создавая привлекательный пользовательский интерфейс.
- **Кнопки**: Интерактивные кнопки для действий пользователей, такие как отправка запросов и получение информации.

## Технологический стек
- **HTML5**: Структура веб-страниц.
- **CSS3**: Стилизация и анимация элементов.
- **JavaScript**: Логика взаимодействия и анимации.

## Анимации
Анимации реализованы с использованием CSS. Основные анимации включают:
- **Появление секций**: Секции плавно появляются при прокрутке с эффектом `fadeInUp`.
- **Плавный скроллинг**: Используется свойство `scroll-behavior: smooth;` для плавного перехода к якорям на странице.

### Пример анимации
```css
.section {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.4s forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## Установка
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/swensi17/AMIR.git
   ```
2. Перейдите в директорию проекта:
   ```bash
   cd AMIR
   ```
3. Откройте `index.html` в браузере для просмотра сайта.

## Использование
- Навигация по сайту осуществляется через меню.
- Кнопки на сайте позволяют пользователям взаимодействовать с сервисом и получать информацию.

## Ссылки
- [Посетить сайт](https://swensi17.github.io/AMIR/)  
- [Документация](https://github.com/swensi17/AMIR/blob/main/README.md)  
- [Сообщить об ошибке](https://github.com/swensi17/AMIR/issues)  

## Лицензия
Этот проект лицензирован под MIT License - смотрите файл [LICENSE](LICENSE) для подробностей.

## Контакты
- **Основной контакт**: [@amir_ejje](https://t.me/amir_ejje)
- **Вторичный контакт**: [@noteblum](https://t.me/noteblum)
