'use strict';

let numberOffilms;

function start(){
    numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?","" );

    while (numberOffilms == "" || numberOffilms == null || 
    isNaN(numberOffilms)){
         numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?","" );
    }
}

start();

const personalMovieDB ={
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilm(){
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
}

rememberMyFilm();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    }else if(10 <= personalMovieDB.count && personalMovieDB.count< 30){
        alert('Вы классический зритель');
    }else if(personalMovieDB.count >= 30){
        alert('Вы киноман');
    }else{
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(){
    if ( personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genress = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genress;
    }
}

writeYourGenres();