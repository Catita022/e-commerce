
// E-commerce de un restaurante-----
// Creo la funcion para hacer el descuento----------
function descontarAlProducto(precio){
    let pagoTotal = precio * PorcentajeDescuento;
    return pagoTotal;
    
}

// Creo Las variable -----------

const PorcentajeDescuento = 0.9;
let pagoTotalComidas=0;
let pagoTotalBebidas = 0;

//  Opcion para Menú  Comida/Bebidas...........
let op = parseInt(prompt('Bienvenido Al Bar y Comedor\n "EL BUEN GUSTO"\nDeseas ver el menú:\n1-Comidas \n2-Bebidas \n0-Salir Menú '))
while(op != 0){
    if (op === 1) {
        // menú de comidas---
        let menu = parseInt(prompt('Menú:\n1-Milanesa Con Papas $1000\n2-Hamburguesa $800 \n3-Pizza Muzzarella $980\n-------Ofertas 10% Descuentos-------- \n4-Sandwich Jamòn y Queso $500\n0-Salir Menú Comidas'));
        while (menu != 0) {
            switch (menu) {
                case 1:
                    
                    pagoTotalComidas+=1000;
                    alert('Agregaste  Milanesa Con Papas Al Pedido');
                    
                    
                    break;
                case 2:
                    pagoTotalComidas+=800;
                    alert('Agregaste Hamburguesa Al Pedido');
                    break;
                case 3:
                    pagoTotalComidas+=980;
                    alert('Agregaste Pizza Muzzarella Al Pedigo');
                    break;
                case 4:
                    pagoTotalComidas+=descontarAlProducto(500);
                    alert('Agregaste Sandwich Jamòn y Queso Al Pedido');
                    
                    break;
                default:
                    alert('Error De Ingreso');
                    break;  
            }
            menu = parseInt(prompt('Menú:\n1-Milanesa Con Papas $1000\n2-Hamburguesa $800 \n3-Pizza Muzzarella $980 \n4-Sandwich Jamòn y Queso $500\n0-Salir Menú Comidas'));
        }
        
        
       
        
    } else if(op===2) {
        // --menú de bebidas
        menu = parseInt(prompt('Menú:\n1-Coca 1.5L $2000\n2-Sprite 2.5L $3400 \n3-Pepsi 2.25L $3000\n-------Ofertas 10% Descuentos-------- \n4-Vino Toro 1L $1200\n0-Salir Menu Bebidas'));
        while (menu != 0) {
            switch (menu) {
                case 1:
                    pagoTotalBebidas+=2000;
                    alert('Agregaste  Coca Al Pedido');
                    break;
                case 2:
                    pagoTotalBebidas+=3400;
                    alert('Agregaste Sprite Al Pedido');
                    break;
                case 3:
                    pagoTotalBebidas+=3000;
                    alert('Agregaste Pepsi Al Pedido');
                    break;
                case 4:
                    
                    pagoTotalBebidas+=descontarAlProducto(1200);//llamo a mi funcion para aplcar el descuento
                    alert('Agregaste Vino Toro Al Pedido');
                    
                    break;
                default:2
                    alert('Error De Ingreso');
                    break;  
            }
            menu = parseInt(prompt('Menú:\n1-Coca 1.5L $2000\n2-Sprite 2.5L $3400 \n3-Pepsi 2.25L $3000\n-------Ofertas 10% Descuentos-------- \n4-Vino Toro 1L $1200\n0-Salir Menú Bebidas'));
        }
        
    }else{
        (alert('Error'));
    }
    // Para salir del menú general---------
    op = parseInt(prompt('Bienvenido Al Bar y Comedor\n "EL BUEN GUSTO"\nDeseas ver el menú:\n1-Comidas \n2-Bebidas \n0-Salir Menu'))
}
// Total a pagar----------------
alert('Total a pagar es : $'+(pagoTotalComidas+pagoTotalBebidas));
