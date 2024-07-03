import axios from 'axios';

export async function getJoke(){
    debugger
    const response = await axios.get('https://chuck-norris-facts-e7t6.onrender.com/joke');
    return response.data.descricao
}

export async function saveJoke(joke_description: string){
    await axios.post('https://chuck-norris-facts-e7t6.onrender.com/joke', {joke_description: joke_description});
}



