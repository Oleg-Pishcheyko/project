const numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?","" );


const personalMovieDB ={
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?',"");
    const b = prompt('На сколько оцените его?',"");
    if(a == "" || b == "" || a.length == 50 || b.length == 50){
        i--;
        continue;
    }
    personalMovieDB.movies[a] = b;
}

if(personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
}else if(10 < personalMovieDB.count < 30){
    alert('Вы классический зритель');
}else if(personalMovieDB > 30){
    alert('Вы киноман');
}else{
    alert('Произошла ошибка');
}

console.log(personalMovieDB);