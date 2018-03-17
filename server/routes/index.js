var eventos = require('../controllers/evento');

module.exports= function(router){
    
    //listar todos
    router.get('/eventos',eventos.index);
    
    //listar por id
    router.get('/eventos/:id',eventos.show);
    
    //Crear un nuevo evento
    router.post('/eventos',eventos.create);

    //Modificar un evento
    router.put('/eventos/:id',eventos.update);

    //Eliminar un evento
    router.delete('/eventos/:id',eventos.delete);

    return router;
};