const express = require('express');
const router = express.Router();

router.get('/:nombre', (req, res) => {
    const { 
        correo,
        contraseña 
    } = req.query;
    const { nombre } = req.params;
    res.json({
        Status: 'Get ok',
        Param: nombre,
        Correo: correo,
        Contraseña : contraseña
    });
});

router.post('/', (req, res) => {
    const { nombre } = req.body;
    console.log(nombre);
    res.json({
        Status: 'Post ok',
        Nombre: nombre
    });
});

module.exports = router;