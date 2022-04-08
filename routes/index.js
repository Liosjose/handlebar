import { Router } from 'express';
import {getAll, getAllId, deleteById, changeByID,productos} from '../controllers/index.js'

const router = Router();


router.get('/productos', (req,res)=> { 
     let productos = getAll()  
          res.send({productos})
     })


 router.get('/productos/:id', (req,res)=> { 
     let id = req.params.id
     
     let productos = getAllId(id)  
          res.send(productos)

                  })

router.delete('/productos/:id', (req, res)=>{
     let id = req.params.id
     let productos = deleteById(id)  
     res.send(productos)
               
               })

router.put('/productos/:id', (req, res)=>{
     let producto= req.params.id
     let NuevoProducto = req.body
     NuevoProducto.id=  productos.length + 2
          changeByID(producto,NuevoProducto)
                res.send(productos)
               
               })
               
               
     


//ya funciona : del lado del server me faltaba app.use(express.json()) 

router.post('/productos/', (req, res)=>{ 
     let productos = getAll()
     let pro= req.body
     pro.id= productos.length + 2
     productos.push(pro)
     res.send(body);
    
})

router.get('/handlebar', (req,res)=> { 
        
           res.render('datos', productos)

                  })


export default router;