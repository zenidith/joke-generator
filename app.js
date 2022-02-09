const joke = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

// add Eventlistener to the button
get_joke.addEventListener('click', generateJoke);

async function generateJoke() {
    // call the joke from API
    const jokeRes = await fetch('https://icanhazdadjoke.com/',
    {
        headers: {
            accept: 'application/json'
    })
    // set Random Joke
}