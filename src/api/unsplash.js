import axios from 'axios';

export default axios.create({
		baseURL : 'https://api.unsplash.com',
		headers: {Authorization: 'Client-ID GKlhxFrIZX4JJN0SJfGAliJYIz4EbREs6vrgT3EpyH0'}
		}
);