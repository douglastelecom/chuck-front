import axios from 'axios';

export async function getJoke(){
    debugger
    const response = await axios.get('http://localhost:8080/joke');
    return response.data.descricao
}

export async function saveJoke(joke_description: string){
    await axios.post('http://localhost:8080/joke', {joke_description: joke_description});
}



