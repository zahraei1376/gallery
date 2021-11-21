import {MongoClient} from 'mongodb';

export async function connectToDataBase(){
    const Client = MongoClient.connect('mongodb://localhost/gallery');
    return Client;
};