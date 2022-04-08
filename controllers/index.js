export let productos = [{'tittle' : 'arroz', 'price': 10 , 'thumbnail': 'url', 'id': 1 },
{'tittle' : 'pasta', 'price': 10 , 'thumbnail': 'url', 'id': 2 },
{'tittle' : 'harina', 'price': 10 , 'thumbnail': 'url', 'id': 3 },
{'tittle' : 'pan', 'price': 10 , 'thumbnail': 'url', 'id': 4 },
{'tittle' : 'medias lunas', 'price': 10 , 'thumbnail': 'url', 'id': 5 }]

//sirve
export let getAll= ()=>{ 
return productos 
}

//sirve
export let getAllId = (id)=>{

     let filter = productos.filter(x => x.id == id)
     if (filter.length === 0){return ('producto no encontrado').json({})};
     filter = JSON.stringify(filter)
     return (`el id es ${id} y los productos ${filter} `)
     }



//sirve
export let deleteById = (id)=>{ 
     let filter = productos.filter(x => x.id != id)
     productos = filter
     return filter
}


export let changeByID = (producto,NuevoProducto)=>{ 
     return  productos[producto-1]= NuevoProducto
}


let x = deleteById(3)

console.log(x)