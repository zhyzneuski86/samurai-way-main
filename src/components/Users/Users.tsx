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

export class Users extends React.Component<usersPropsType> {

    componentDidMount() {
        axios.get<UsersResponse>('https://social-network.samuraijs.com/api/1.0/users')
            .then((res)=>{
                this.props.setUser(res.data.items)
            })
    }

    render() {
        return <>

            {this.props.users.map((u) => {
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
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }

};

export default Users;