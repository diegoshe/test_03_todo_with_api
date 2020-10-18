## Для запуска проекта на Ubuntu 20.04

0. Должны быть установлены Python 3, pip, pipenv и Node.js, yarn

1. Клонируем проект

2. Зайдите с терминала в папку `back/` и выполните следующие команды  
    * активируйте виртуальную среду  
    `pipenv shell`  
    * устанавите зависимости проекта  
    `pipenv install`  
    * выполните миграцию базы данных (создания файлов миграции)  
    `python manage.py migrate`  
    `python manage.py makemigrations`  
    `python manage.py migrate`  
    * запустите локальный сервер разработки  
    `python manage.py runserver`  
    * веб-приложение будет работать на  
    `http://127.0.0.1:8000/api/todos/`  

3. Зайдите с терминала в папку `front/` и выполните следующие команды  
    * устанавите зависимости проекта  
    `yarn install`  
    * запустите локальный сервер разработки  
    `yarn start`  
    * веб-приложение будет работать на  
    `http://localhost:3000/`  