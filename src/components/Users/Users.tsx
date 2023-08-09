import React from 'react';

import styles from './usersStyle.module.css'
import {NavLink} from "react-router-dom";
import {UserItem, usersAPI} from "../../api/api";
import axios from "axios";

type usersPropsType = {
    onPageChange: (page: number) => void
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    setUser: (users: UserItem[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    toggleFollowProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}
type postDeleteResponseType = {
    resultCode: number
    messages: [],
    data: {}
}
const Users = (props: usersPropsType) => {

        let pages: Array<number> = []
        const pageCount = Math.ceil(props.totalUserCount / props.pageSize)
        for (let i = 1; i <= pageCount; i++) {
            if (pages.length < 15) {
                pages.push(i)
            }
        }
        return <>
            {pages.map((p) => {
                return <button onClick={() => {
                    props.onPageChange(p)
                }}
                               className={props.currentPage === p ? styles.selectedPage : ''}
                               key={p}>{p}</button>
            })}
            {props.users.map((u) => {
                return <div key={u.id}>
                    <div>

                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                < img
                                    width="100px"
                                    src={u.photos.small || "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg"}
                                    alt="photoProfile"/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowProgress(true, u.id)
                                    axios.delete<postDeleteResponseType>(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'e8e92dc5-8ada-45d5-befd-38d0ba297274'
                                        }
                                    })
                                        .then((res) => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowProgress(false, u.id)
                                        })


                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowProgress(true, u.id)
                                    axios.post<postDeleteResponseType>(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'e8e92dc5-8ada-45d5-befd-38d0ba297274'
                                        }
                                    })
                                        .then((res) => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowProgress(false, u.id)
                                        })

                                }}>Follow</button>}
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
;

export default Users;