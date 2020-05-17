const express = require('express');
const PersonRepository = require('../repositories/person.repository');

const Person = require('../models/person.model');

const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const person = await PersonRepository.create(req.body);

        return res.send({ person });
    } catch (error) {
        return res.status(400).send({ error: 'Resgistration Falied' })
    }
});


router.get('/readAll', async (req, res) => {
    try {
        const persons = await PersonRepository.getAll();

        return res.send({ persons });
    } catch (error) {
        return res.status(400).send({ error: 'Falied at Loading Registers' })
    }
});

router.get('/readWithoutFriends', async (req, res) => {
    try {
        const persons = await PersonRepository.getAllWithoutFriends();

        return res.send({ persons });
    } catch (error) {
        return res.status(400).send({ error: 'Falied at Loading Registers Without Friends' })
    }
});

router.put('/:personId', async (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;

    try {
        const person = await PersonRepository.updateById(req.params.personId, {
            name,
            email
        })

        if (!person) {
            return res.status(404).json({
                message: 'Person not found'
            });
        }

        return res.status(202).json();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
});

router.delete('/:personId', async (req, res) => {

    try {
        const person = await PersonRepository.removeById(req.params.personId);

        if (!person) {
            return res.status(404).json({
                message: 'Person not found'
            });
        }

        return res.status(204).json();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
});

module.exports = app => app.use('/api', router)