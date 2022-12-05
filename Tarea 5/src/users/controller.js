// tiene los metodos para las rutas(?)
const model = require('./model');

class UsersController {


    getAll(req, res){
        res.send('Llegaste al endpoint de users');
    }

    getOne(req, res){
        res.send('Llegaste al get one endpoint' + req.params.id);
    }
}

module.exports = new UsersController();