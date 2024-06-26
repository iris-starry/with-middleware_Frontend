export interface User {
    id: number;
    createdDate?: string | null;
    modifiedDate?: string | null;
    name: string | null;
    email?: string | null;
    category?: string | null;
    description?: string | null; // description 필드 추가
}

export interface Post {
    id: number;
    title: string;
    content: string;
    user: User;
    createdDate?: string | null;
    modifiedDate?: string | null;
    category: string | null;
    field: string | null;
    status: "OPEN" | "CLOSED";
    length: number | null;
}

export interface Like {
    id: number;
    user: User;
    post: Post;
    createdDate?: string | null;
    modifiedDate?: string | null;
}

export interface Comment {
    id: number;
    user: User;
    post: Post;
    comment: string;
    createdDate?: string | null;
    modifiedDate?: string | null;
}
