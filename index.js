import db from './config/db.js'
import userDAO from './dao/userDAO.js';

async function main() {
    let dbs = new db();
    let userdao = new userDAO();

    await dbs.conectar();

    let result = await userdao.crear({ username: 'Abel', email: 'abel@gmail.com' });
    console.log(result);
    let usuario1 = await userdao.crear({ username: 'Abel1', email: 'abel1@gmail.com' });
    let usuario2 = await userdao.crear({ username: 'Abel2', email: 'abel2@gmail.com' });
    let usuario3 = await userdao.crear({ username: 'Abel3', email: 'abel3@gmail.com' });

    //let eliminarResp = await userdao.eliminar(result);
    
    await userdao.actualizar(usuario1, userdao.crear({ username: 'Juanito', email: 'juan@gmail.com' }));

    await userdao.actualizar(usuario1, userdao.crear({ username: 'Juanito', email: 'juan@gmail.com' }));
    
    const usuarios = await userdao.obtenerTodos();

    usuarios.forEach(usuario => {
        console.log(usuario._id)
    });

    dbs.desconectar();
}

main();