'use strict';

document.addEventListener("DOMContentLoaded", ()=>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const rec = document.querySelectorAll(".promo__adv img"),
        post = document.querySelector(".promo__bg"),
        genge = post.querySelector(".promo__genre"),
        film = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        addInput = document.querySelector(".adding__input"),
        checkbox = document.querySelector("[type='checkbox']");

    addForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        let newFilm = addInput.value;
        if(newFilm != ""){
            if (newFilm.length > 21){
                newFilm = newFilm.slice(0,22) + "...";
            }
            if(checkbox.checked){
                alert("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            createMovieList(movieDB.movies, film);
            event.target.reset();
        }
    });
    
    rec.forEach(mum =>{
        mum.remove();
    });

    genge.textContent = 'Драма';

    post.style.backgroundImage = 'url("img/bg.jpg")';

    movieDB.movies.sort();
    function createMovieList(films, parent){
        parent.innerHTML = "";
     
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} . ${film}
                    <div class="delete"></div>
                </li>
            `;
        }); 

        document.querySelectorAll(".delete").forEach((btn, i)=>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, "1");
                createMovieList(films, parent);
            });
        });
    }

    createMovieList(movieDB.movies, film);
   
});