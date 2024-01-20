import {Express} from 'express';

const controller = (server:Express) =>{
    server.use('/users')
    server.use('/products')
}

export default controller;