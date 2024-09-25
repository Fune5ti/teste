export interface ICreateUser {
    username: string;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
export interface User extends ICreateUser {
    id: number;
    created_at: string;
    updated_at: string;
}
