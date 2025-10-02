import { ObjectId } from 'mongodb';
import db from '../config/db.js';

export default class userDAO {
    constructor() {
        this.db = new db();
        this.collection = this.db.obtenerColeccion('users');
    }

    async crear(usuario) {
        try {
            const result = await this.collection.insertOne(usuario);
            return result.insertedId;
        } catch (error) {
            throw error;
        }
    }

    async obtenerTodos(filtro = '') {
        try {
            const usuarios = await this.collection.find({ username: { $eq: filtro } }).toArray();
            return usuarios;
        } catch (error) {
            throw error;
        }
    }

    async obtenerPorId(id) {
        const usuario = await this.collection.findOne({ _id: new ObjectId(id) });
    }

    async actualizar(id, nuevoUsuario) {
        try {
            await this.collection.updateOne({_id: new ObjectId(id)},{$set: nuevoUsuario});
            return 'Usuario actualizado correctamente';
        } catch (error) {

        }
    }

    async eliminar(id){
        try {
            const result = await this.collection.deleteOne({_id: new ObjectId(id)});
            return result;
        } catch (error) {
            
        }
    }
}