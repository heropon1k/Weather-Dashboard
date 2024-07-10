const mode = document.querySelector('#sun')
const body = document.querySelector('#theme')

//initialize function
function init() {
    //check stored theme 
    let theme = localStorage.getItem('theme');
    
    //By default theme should be light so if theme is null theme is light
    if (theme == null) {
        theme = 'light';
    }
    //Switches themes base
    if (theme === 'light') {
        theme = 'light';
        body.setAttribute('class', 'light');
        console.log(theme);

    }
    else {
        theme = 'dark';
        body.setAttribute('class', 'dark');
        console.log(theme);
    }
}

//checks when theme change is presse
mode.addEventListener('click', function (event) {

    event.preventDefault();

    //If theme is light change to dark
    if (theme === 'light') {
        theme = 'dark';
        body.setAttribute('class', 'dark');

    }
    else //If theme is dark change to light
    {
        theme = 'light';
        body.setAttribute('class', 'light');
    }

    //store theme data so theme change remains when page changes or refreshes
    localStorage.setItem('theme', theme);

});

init();