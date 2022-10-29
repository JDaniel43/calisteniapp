let Router = require('express').Router


const router = Router()


router.get('/inicio', (req, res) => {
    res.render("pages/index.ejs", { 
      titulo: 'entrenamiento'
    })
  })
  
router.get('/entrenamiento/:tipo/:intencidad', (req, res, )=> {
    res.render('pages/entrenamiento.ejs', { 
        tipo: req.params.tipo,
        inten: req.params.intencidad
    });
});

exports.router = router