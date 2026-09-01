# Портфоліо веброзробника
 
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
 
Сучасний адаптивний сайт-портфоліо веброзробника з розділами проєктів, послуг, інтерактивним калькулятором вартості та формою для звернень клієнтів. Реалізовано на **Django**, **JavaScript** та чистому **HTML5/CSS3**.
 
## Можливості
 
- **Сучасний адаптивний дизайн**: коректне відображення на десктопах, планшетах і смартфонах
- **Вітрина проєктів**: демонстрація останніх вебзастосунків, лендингів та комерційних робіт
- **Форма для заявок**: контактна форма, що напряму зберігає звернення в базу даних
- **Оптимізована продуктивність**: швидке завантаження ресурсів та чітке розділення шаблонів, скриптів і логіки
- **Керування через адмінку**: Django Admin для швидкого редагування контенту, заявок і послуг
## Технологічний стек
 
- **Бекенд**: Python 3, Django
- **Фронтенд**: HTML5, CSS3, JavaScript (ES6+)
- **База даних**: PostgreSQL (продакшн) / SQLite (розробка)
- **Деплой та зберігання статики**: WhiteNoise, Gunicorn, Railway / Cloudinary
- **Керування середовищем**: python-dotenv
## Скриншоти
 
**1. Головний екран**  
![Hero Section](screenshots/hero.png)
 
**2. Про мене**  
![About Me Section](screenshots/about_me.png)
 
**3. Досвід**  
![Experience Section](screenshots/experience.png)
 
**4. Інструменти**  
![Tools Section](screenshots/tools.png)
 
**5. Сертифікати**  
![Certificates Section](screenshots/certificates.png)
 
**6. Вітрина проєктів**  
![Projects Showcase](screenshots/projects.png)
 
**7. Контакти та форма заявки**  
![Contact Form](screenshots/contact.png)
 
## Структура проєкту
 
```text
Portfolio/
├── portfolio/              # Основний застосунок Django
│   ├── static/             # Фронтенд-ресурси
│   │   ├── css/            # Стилі та медіа-запити для адаптивності
│   │   ├── js/             # Інтерактивна логіка та обробка форм
│   │   └── img/            # Іконки та фонові зображення сайту
│   ├── templates/          # HTML-шаблони
│   │   ├── base.html       # Базовий макет сторінки
│   │   └── index.html      # Шаблон головної сторінки
│   ├── admin.py            # Реєстрація моделей в адмінці
│   ├── models.py           # Моделі бази даних (проєкти, послуги, заявки)
│   ├── urls.py             # Маршрути застосунку
│   └── views.py            # Обробка HTTP-запитів та динамічна логіка
├── config/                 # Кореневі налаштування проєкту
│   ├── settings.py         # Налаштування Django та завантаження змінних середовища
│   ├── urls.py             # Глобальна маршрутизація
│   └── wsgi.py             # Точка входу для WSGI-деплою
├── .env.example            # Шаблон змінних середовища
├── .gitignore              # Файли, виключені з git
├── manage.py                # Утиліта командного рядка Django
└── requirements.txt         # Список залежностей проєкту
```