var evento = require('../models').Evento;

module.exports = {
    //lista de eventos
    
    //GET
    index(req,res) {
        evento.findAll()
        .then(function(eventos){
            //this is a promise
            res.status(200).json(eventos);
        })
        .catch(function(error){
            //in case of errors 
            res.status(500).json(error);
        });
    },

    //GET
    show(req, res){
        evento.findById(req.params.id, {})
        .then(function(evento){
            res.status(200).json(evento);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },

    //POST
    create(req,res){
        evento.create(req.body)
        .then(function(evento){
            res.status(200).json(evento);
        })
        .catch(function(error){
            res.status(500).json(error);
        });        
    },

    //PUT
    update(req,res){
        evento.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        .then(function(evento){
            res.status(200).json(evento);
        })
        .catch(function(error){
            res.status(500).json(error);
        });   
    },
    delete(req,res){
        evento.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(function(evento){
            res.status(200).json(evento);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }


};