// api_Board.ts
import axios from 'axios';
import { Post as PostType } from './types'; // types.ts 파일에서 export 한 Post를 가져옵니다.

export const getPostsByCategory = async (category: string): Promise<PostType[]> => {
    try {
        const response = await axios.get<PostType[]>(`http://localhost:8080/post/category/${category}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
};

export type { PostType };