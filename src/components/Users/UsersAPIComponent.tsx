import React from 'react';
import {usersPropsType} from "./UsersContainer";
import axios from "axios";
import Users from "./Users";


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


export class UsersAPIComponent extends React.Component<usersPropsType> {

    componentDidMount() {
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUser(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUser(res.data.items)

            })
    }

    render(): React.ReactNode {

        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUser={this.props.setUser}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUserCount={this.props.setTotalUserCount}
            onPageChange={this.onPageChange}
        />
    }

};

export default UsersAPIComponent