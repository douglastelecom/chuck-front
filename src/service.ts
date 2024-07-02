import axios from 'axios';

export async function getJoke(){
    debugger
    const response = await axios.get('http://localhost:8080/joke');
    return response.data.descricao
}


