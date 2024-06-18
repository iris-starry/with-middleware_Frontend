import axios from 'axios';
import { Post, Comment } from './types';

// 게시물 조회
export const getPost = async (id: number): Promise<Post> => {
    try {
        const response = await axios.get<Post>(`http://localhost:8080/post/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching post with ID ${id}:`, error);
        throw error;
    }
};

// 좋아요 추가
export const addLike = async (userId: number, postId: number): Promise<void> => {
    try {
        await axios.post(`http://localhost:8080/like`, {
            user: { id: userId },
            post: { id: postId }
        });
    } catch (error) {
        console.error(`Error adding like for post ${postId} by user ${userId}:`, error);
        throw error;
    }
};

// 좋아요 취소
export const cancelLike = async (likeId: number): Promise<void> => {
    try {
        await axios.delete(`http://localhost:8080/like/${likeId}`);
    } catch (error) {
        console.error(`Error cancelling like with ID ${likeId}:`, error);
        throw error;
    }
};

// 좋아요 개수 조회
export const getLikeCount = async (postId: number): Promise<number> => {
    try {
        const response = await axios.get<number>(`http://localhost:8080/like/post/count/${postId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching like count for post ${postId}:`, error);
        throw error;
    }
};

// 댓글 추가
export const addComment = async (data: { userId: number; postId: number; comment: string }): Promise<Comment> => {
    try {
        const response = await axios.post<Comment>(`http://localhost:8080/comment`, {
            user: { id: data.userId },
            post: { id: data.postId },
            comment: data.comment
        });
        return response.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};

// 댓글 수정
export const updateComment = async (commentId: number, comment: string): Promise<void> => {
    try {
        await axios.put(`http://localhost:8080/comment/${commentId}`, { comment });
    } catch (error) {
        console.error(`Error updating comment with ID ${commentId}:`, error);
        throw error;
    }
};

// 댓글 삭제
export const deleteComment = async (commentId: number): Promise<void> => {
    try {
        await axios.delete(`http://localhost:8080/comment/${commentId}`);
    } catch (error) {
        console.error(`Error deleting comment with ID ${commentId}:`, error);
        throw error;
    }
};

// 특정 게시물의 모든 댓글 조회
export const getCommentsByPostId = async (postId: number): Promise<Comment[]> => {
    try {
        const response = await axios.get<Comment[]>(`http://localhost:8080/comment/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error);
        throw error;
    }
};

// 특정 게시물의 댓글 수 조회
export const getCommentCountByPostId = async (postId: number): Promise<number> => {
    try {
        const response = await axios.get<number>(`http://localhost:8080/comment/count/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching comment count for post ${postId}:`, error);
        throw error;
    }
};
