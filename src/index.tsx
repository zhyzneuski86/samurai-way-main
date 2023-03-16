import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type User = {
    id: number,
    message: string,
    likesCount: number
}
const posts: User[] = [
    {id: 1, message: 'Hi, Why are you?', likesCount: 10},
    {id: 2, message: 'It\'s my first post!', likesCount: 15},
    {id: 3, message: 'It\'s my first post!', likesCount: 20},
    {id: 4, message: 'It\'s my first post!', likesCount: 23}
]

export type userDialogs = {
    id: number,
    name: string
}

const dialogs: userDialogs[] = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Misha'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Ivan'}
];

export type userMessages = {
    id: number,
    message: string
}

const messages: userMessages[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How is your day?'},
    {id: 4, message: 'How is your day?'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]


ReactDOM.render(
    <App
        posts={posts}
        dialogs={dialogs}
        messages={messages}

    />,
    document.getElementById('root')
);