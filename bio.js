let h2 = document.createElement('h2')

// let text = document.createElement('p');


root.appendChild(h2);

// let green = document.getElementsByClassName('green');

// console.log(green);

// green[0].style.color = '#00ff00';
// console.log(green[0]
// )
// green[1].style.color = 'green';


class Bio {
    constructor() {
        this.name
        this.about
        this.hobbies
        this.goals
    }
    
    makeName() {
        console.log(this.name)
    }
    
    
};

let colin = new Bio();

colin.name = 'My name is Colin';
colin.about = 'and i enjoy watching sports events or playing basektball'
colin.hobbies = 'playing videogames, watching movies with friends or listening to music'
colin.goals = 'learn coding try to get a job, learn as much as I can to write neat code. Also learn multiple langauges maybe get into game design in the future and maybe become a software developer if im able to. To successfully get my javacript certificate write neat code, maybe someday help others with coding problems and issues they may have to better myself.'

console.log(colin);

colin.makeName();


root.innerHTML = `<p> ${colin.name} ${colin.about} ${colin.hobbies} ${colin.goals} </p>`;