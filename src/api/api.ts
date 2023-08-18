import axios from 'axios'
import UsersResponse from "../components/Users/UsersContainer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e8e92dc5-8ada-45d5-befd-38d0ba297274'
    }
})

// api
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return  instance.post<ResponseType>(`follow/${userId}`, {})

    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
}
export const profileAPI = {
    getProfile(userId: string | undefined){
        return instance.get<ProfileResponseType>(`profile/${userId}`)
    },
    getStatus(userId:  string | undefined){
        return instance.get<any>(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put<ResponseType>(`profile/status`, {status})
    }
}

    export const authAPI = {
       me() {
         return   instance.get<AuthResponseType>(`auth/me`)
             .then(res => res.data)
       }
}

export type UserItem = {
    name: string,
    id: number,
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
}

export type  UsersResponse = {
    error: string | null;
    items: Array<UserItem>
    totalCount: number
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

export type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileResponseType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    contacts: ContactsType,
    photos: PhotosType
}



export type DataType = {
    id: number | null,
    email: string | null,
    login: string | null,
}
export type AuthResponseType = {
    resultCode: number | null,
    messages: [],
    data: DataType
}


// types
// export type TodolistType = {
//     id: string
//     title: string
//     addedDate: string
//     order: number
// }
// export type ResponseType<D = {}> = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: D
// }
//
//
// export enum TaskStatuses {
//     New = 0,
//     InProgress = 1,
//     Completed = 2,
//     Draft = 3
// }
//
// export enum TaskPriorities {
//     Low = 0,
//     Middle = 1,
//     Hi = 2,
//     Urgently = 3,
//     Later = 4
// }
//
// export type TaskType = {
//     description: string
//     title: string
//     status: TaskStatuses
//     priority: TaskPriorities
//     startDate: string
//     deadline: string
//     id: string
//     todoListId: string
//     order: number
//     addedDate: string
// }
// export type UpdateTaskModelType = {
//     title: string
//     description: string
//     status: TaskStatuses
//     priority: TaskPriorities
//     startDate: string
//     deadline: string
// }
// type GetTasksResponse = {
//     error: string | null
//     totalCount: number
//     items: TaskType[]
// }
// export enum ResultCode {
//     Ok = 0,
//     Error = 1,
//     Captcha = 10
// }
// const top10  = 'top10'
//
// enum ButtonName {
//     'top10' = 'top-10',
//     'top' = 'top-20',
//     'img' = 'Изображение'
// }
// ButtonName[top10]