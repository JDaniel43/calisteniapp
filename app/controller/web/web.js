let Router = require('express').Router
const service = require('../../service/servicios')
const router = Router()

router.get('/inicio', (req, res) => {
    res.render("pages/index.ejs", { 
      titulo: 'entrenamiento'
    })
  })
  
router.get('/entrenamiento/:tipo/:intencidad', async (req, res)=> {
  var rutinas = await service.getRutinas(req.params.tipo,req.params.intencidad);
    res.render('pages/entrenamiento.ejs', { 
        tipo: req.params.tipo,
        inten: req.params.intencidad,
        rutinas:rutinas
    });
});

exports.router = router