import React from 'react';
import {usersPropsType} from "./UsersContainer";
import axios from "axios";

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
    error : string | null;
    items: Array <UserItem>
    totalCount: number
}

const Users = (props: usersPropsType) => {
    // if (props.users.length === 0){
    //     props.setUser([
    //         {
    //             id: 1,
    //             photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
    //             followed: true,
    //             fullName: 'Yulia',
    //             status: "I am boss",
    //             location: {city: "Minsk", country: "Belarus"}
    //         },
    //         {
    //             id: 2,
    //             photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
    //             followed: false,
    //             fullName: 'Sasha',
    //             status: "I'm a boss",
    //             location: {city: "Moscow", country: "Russia"}
    //         },
    //         {
    //             id: 3,
    //             photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
    //             followed: false,
    //             fullName: 'Vova',
    //             status: "I'm boss",
    //             location: {city: "Kiev", country: "Ukraine"}
    //         },
    //     ])
    // }

    if(props.users.length === 0){
        axios.get<UsersResponse>('https://social-network.samuraijs.com/api/1.0/users')
            .then((res)=>{
                props.setUser(res.data.items)
            })
    }

    return <>

        {props.users.map((u) => {
            return <div key = {u.id}>
                <div>

                <div>
                < img
            width = "100px"
            src = {u.photos.small || "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg"}
            alt = "photoProfile" />
                </div>
            <div>
                {u.followed ?
                    <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>

        </div>

            <div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>
        </div>
        })}
    </>
};

export default Users;