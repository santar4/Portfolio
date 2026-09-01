# Web Developer Portfolio

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

Modern, responsive web developer portfolio site showcasing projects, services, interactive cost calculators, and client inquiry forms. Built with **Django**, **JavaScript**, and clean **HTML5/CSS3**.

## Features

- **Modern & Responsive Layout**: Mobile-friendly design optimized for desktops, tablets, and smartphones
- **Project Showcase**: Display of recent web applications, landing pages, and commercial work
- **Interactive Price Calculator**: Client-facing calculation logic for dynamic project cost estimates
- **Lead Capture & Contact Form**: Integrated contact form submitting directly to backend/database
- **Optimized Performance**: Fast asset loading and clean architectural separation of templates, scripts, and views
- **Admin Management**: Django Admin integration for quick content, leads, and services updates

## Tech Stack

- **Backend**: Python 3, Django
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Database**: PostgreSQL (Production) / SQLite (Development)
- **Deployment & Static Storage**: WhiteNoise, Gunicorn, Railway / Cloudinary
- **Environment Management**: python-dotenv

## Screenshots

**1. Main Hero & Presentation**  
![Hero Section](screenshots/hero.png)

**2. About me**  
![About Me Section](screenshots/about_me.png)

**3. Experience**  
![Experience Section](screenshots/experience.png)

**4. Tools**  
![Tools Section](screenshots/tools.png)

**5. Certificates**  
![Certificates Section](screenshots/certificates.png)

**6. Portfolio Showcase**  
![Projects Showcase](screenshots/projects.png)

**7. Contact & Inquiry Form**  
![Contact Form](screenshots/contact.png)

## Project Structure

```text
Portfolio/
├── portfolio/              # Django core application
│   ├── static/             # Front-end assets
│   │   ├── css/            # Custom styles & responsive media queries
│   │   ├── js/             # Interactive logic & form handling
│   │   └── img/            # Site icons & background assets
│   ├── templates/          # HTML templates
│   │   ├── base.html       # Base layout blueprint
│   │   └── index.html      # Main landing page template
│   ├── admin.py            # Admin models registration
│   ├── models.py           # Database models (Projects, Services, Leads)
│   ├── urls.py             # App route definitions
│   └── views.py            # HTTP request handling & dynamic logic
├── config/                 # Root project configuration
│   ├── settings.py         # Django project settings & environment loading
│   ├── urls.py             # Global URL routing
│   └── wsgi.py             # WSGI deployment entry point
├── .env.example            # Environment variables template
├── .gitignore              # Files excluded from git tracking
├── manage.py               # Django CLI utility script
└── requirements.txt        # Project dependencies list