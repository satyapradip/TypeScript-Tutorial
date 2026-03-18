import axios, {type AxiosResponse} from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response.data as Todo);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

const fetchData = async() => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    console.log(response.data as Todo);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}