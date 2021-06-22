const chalk = require('chalk');
class Producto{
    constructor(id,nombre,cantidad,precio){
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
        this.hijoiz=null;
        this.hijode=null;
    }
    info(){
        return chalk.black('Id: '+this.id+' / Nombre: '+this.nombre+' / Cantidad: '+this.cantidad+' / Precio: $'+this.precio+' ');
    }
}

class Arbolbinario{
    constructor(){
        this.raiz=null
    }

    agregar(nuevo){
        if(this.raiz==null){
            this.raiz=nuevo;
        }else{
            this.queTeAtienda(nuevo, this.raiz);
        }
    }

    queTeAtienda(nuevo,nodox){
        if(nuevo.id<nodox.id){
            if(nodox.hijoiz==null){
                nodox.hijoiz=nuevo;
            }
            else{
                this.queTeAtienda(nuevo,nodox.hijoiz);
            }
        }else{
            if(nuevo.id>nodox.id){
                if(nodox.hijode==null){
                    nodox.hijode=nuevo;
                }else{
                    this.queTeAtienda(nuevo,nodox.hijode);
                }
            }
        }


    }

    inorder(){
        if(this.raiz==null){
            console.log('NO HAY NADA');
        }else{
            this.procesainorder(this.raiz);
        }

    }
    procesainorder(nodo){
        if(nodo.hijoiz!=null){
            this.procesainorder(nodo.hijoiz);
        }

        console.log(chalk.bgBlueBright(nodo.info()));

        if(nodo.hijode!=null){
            this.procesainorder(nodo.hijode);
        }

    }

    preorder(){
        if(this.raiz==null){
            console.log('NO HAY NADA');
        }else{
            this.propreorder(this.raiz);
        }
    }

    propreorder(nodo){
        console.log(chalk.bgRedBright(nodo.info()));
        if(nodo.hijoiz!=null){
            this.propreorder(nodo.hijoiz);
        }
        if(nodo.hijode!=null){
            this.propreorder(nodo.hijode);
        }
    }

    postorder(){
        if(this.raiz==null){
            console.log('NO HAY NADA');
        }
        else{
            this.procespost(this.raiz);
        }
    }

    procespost(nodoy){
        if(nodoy.hijoiz!=null){
            this.procespost(nodoy.hijoiz);
        }
        if(nodoy.hijode!=null){
            this.procespost(nodoy.hijode);
        }
        
        console.log(chalk.bgGreen(nodoy.info()));
    }

    buscar(numero){
        if(this.raiz==null){
            console.log("VACIO");
        }else{
            this.probuscar(numero,this.raiz);
        }
    }

    probuscar(num,nodo){
        if(num==nodo.id){
            console.log(chalk.bgYellow(nodo.info()));
        }
        if(num<nodo.id && nodo.hijoiz!=null){
            this.probuscar(num,nodo.hijoiz);
        }
        if(num>nodo.id && nodo.hijode!=null){
            this.probuscar(num,nodo.hijode);
        }
    }
}

let inventario=new Arbolbinario();

let producto1=new Producto(1,"agua",100,13);

inventario.agregar(producto1);

let producto2=new Producto(2,"refresco",100,10);

inventario.agregar(producto2);

let producto3=new Producto(3,"tequila",15,700);

inventario.agregar(producto3);

let producto4=new Producto(4,"hielo",20,35);

inventario.agregar(producto4);

console.log('Inorder');
inventario.inorder();

console.log('Preorder');
inventario.preorder();

console.log('Postorder');
inventario.postorder();

console.log('Numero buscado');
inventario.buscar(1);
inventario.buscar(2);
inventario.buscar(3);
inventario.buscar(4);