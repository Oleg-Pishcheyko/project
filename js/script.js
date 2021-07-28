'use strict';

const personalMovieDB ={
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count =
         +prompt("Сколько фильмов вы уже посмотрели?","" );
        while (personalMovieDB.count == "" || personalMovieDB.count == null || 
        isNaN(personalMovieDB.count)){
            personalMovieDB.count =
             +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    rememberMyFilm: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?',"");
            const b = prompt('На сколько оцените его?',"");
            if(a != "" && b != "" && a != null && b != null && a.length < 50 ){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else{
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }else if(10 <= personalMovieDB.count && personalMovieDB.count< 30){
            alert('Вы классический зритель');
        }else if(personalMovieDB.count >= 30){
            alert('Вы киноман');
        }else{
            alert('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function(){
        if ( personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(){
        if ( personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genress = prompt(`Ваш любимый жанр под номером ${i}`);
            while (genress == "" || genress == null){
                genress = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            personalMovieDB.genres[i - 1] = genress;
            
        }
        personalMovieDB.genres.forEach((p, i) => console.log(`Любимый жанр ${i+1} - это ${p}`));

    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilm();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();