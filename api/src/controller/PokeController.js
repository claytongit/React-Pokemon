const mongoose = require('mongoose');

const Poke = mongoose.model('PokeModel');

module.exports = {
    async index(req, res){
        const poke = await Poke.find();

        return res.json(poke);
    },
    async read(req, res){
        const poke = await Poke.findById(req.params.id);

        return res.json(poke);
    },
    async store(req, res){
        const poke = await Poke.create(req.body);

        return res.json(poke);
    },
    async update(req, res){
        const poke = await Poke.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(poke);
    },
    async del(req, res){
        const poke = await Poke.findByIdAndRemove(req.params.id);

        return res.send();
    }
};