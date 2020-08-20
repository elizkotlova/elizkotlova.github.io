'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        listItem = list.querySelectorAll('.promo__interactive-item'),
        input = document.querySelector('.adding__input'),
        btn = document.querySelector('button'),
        addForm = document.querySelector('form.add'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = input.value;
        const favorite = checkbox.checked;

        if (favorite) {
            console.log('Любимый фильм');
        }

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, list);
        }

        event.target.reset();

    });


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const deleteAdv = (arr) => {
        arr.forEach (item => {
            item.remove();
        });
    };

    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")'; 
    };

    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        list.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            list.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); //1 - номер элемента из массива, 2 - сколько элементов
                sortArr(movieDB.movies);
                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, list);
    
});




