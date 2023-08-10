import React from 'react';
import styles from './usersStyle.module.css'
import {NavLink} from "react-router-dom";
import {UserItem} from "../../api/api";


type usersPropsType = {
    onPageChange: (page: number) => void
    users: UserItem[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (useId: number) => void
    unfollow: (useId: number) => void
    followingInProgress: Array<number>
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
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.unfollow(u.id)}}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.follow(u.id)}}>Follow</button>}
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