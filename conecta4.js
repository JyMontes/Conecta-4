var b=42
var b2=43
var b3=44
var b4=45
var b5=46
var b6=47
var b7=48
const color_0 = 'white'
const color_1 ='red'
const color_2 = 'yellow'
var n1=0
var n2=0
var bi1=0
var bi2=0

var c1=0
var c2=0

var d1=0
var d2=0

var e1=0
var e2=0

var f1=0
var f2=0

var g1=0
var g2=0

var h1=0
var h2=0

var ii=0
var i2=0

var j1=0
var j2=0

var k1=0
var k2=0

var l1=0
var l2=0

var m1=0
var m2=0

var n1=0
var n2=0

var hor1=0
var hor2=0

var hor3=0
var hor4=0

var hor5=0
var hor6=0

var hor7=0
var hor8=0

var hor9=0
var hor10=0

var hor11=0
var hor12=0

var hor13=0
var hor14=0

var turno=color_1

var resultado= ganador()
var resultado_2=ganador2()
var resultado_3=ganador3()
var resultado_4=ganador4()
var resultado_5=ganador5()
var resultado_6=ganador6()
var resultado_7=ganador7()

var result1;


const filas=6
const columnas=7
var tablero_colores
var tablero_fichas
/* recuerda investigar matrices, pueden ayudar*/

function iniciar(){
    tablero_colores=new Array(filas)
    tablero_fichas=new Array(filas)
    for(var i = 0; i < filas; i++){
		tablero_colores[i] = new Array(columnas);
		tablero_fichas[i] = new Array(columnas);
	}
}

function reiniciar(){
	location.reload();
}

function turno1(){
    document.getElementById('lbl-1').style.opacity='50%'
    document.getElementById('lbl-2').style.opacity='100%'
    
    
    turno=color_2
}

function turno2(){
    document.getElementById('lbl-2').style.opacity='50%'
    document.getElementById('lbl-1').style.opacity='100%'
    
    turno=color_1
}

function turnos(){
	
	if(turno==color_1){
		turno1()
		var v=6
		document.getElementById('boton-'+(b-v)).style.backgroundColor=color_1
		b=b-(v+1)
		
		
		console.log('el turno es: '+turno)
     }
     else{
         if(turno==color_2){
			turno2()
			var v=6
			document.getElementById('boton-'+(b-v)).style.backgroundColor=color_2	
			b=b-(v+1)
		    } 
		 
		 console.log('el turno es: '+turno)
	 }
	 
}	   
        
function turnos2(){
	if(turno==color_1){
		turno1()
		var v=6
		document.getElementById('boton-'+(b2-v)).style.backgroundColor=color_1	
		b2=b2-(v+1)
		
		console.log('el turno es: '+turno)
     }
     else{
         if(turno==color_2){
			 turno2()
			 var v=6
				document.getElementById('boton-'+(b2-v)).style.backgroundColor=color_2	
				b2=b2-(v+1)		
		    } 
		 
			console.log('el turno es: '+turno)
	 }
	 
     
}

function turnos3(){
	if(turno==color_1){
		turno1()
		var v=6
			document.getElementById('boton-'+(b3-v)).style.backgroundColor=color_1	
			b3=b3-(v+1)
		
			console.log('el turno es: '+turno)
     }
     else{
         if(turno==color_2){
			 turno2()
			 var v=6
				document.getElementById('boton-'+(b3-v)).style.backgroundColor=color_2	
				b3=b3-(v+1)		
		    } 
		 
			console.log('el turno es: '+turno)
	 }
	 
     
}

function turnos4(){
	if(turno==color_1){
		turno1()
		var v=6
			document.getElementById('boton-'+(b4-v)).style.backgroundColor=color_1	
			b4=b4-(v+1)
		
			console.log('el turno es: '+turno)
     }
     else{
         if(turno==color_2){
			 turno2()
			 var v=6
				document.getElementById('boton-'+(b4-v)).style.backgroundColor=color_2	
				b4=b4-(v+1)		
		    } 
		 
			console.log('el turno es: '+turno)
	 }
	 
     
}

function turnos5(){
	if(turno==color_1){
		turno1()
		var v=6
			document.getElementById('boton-'+(b5-v)).style.backgroundColor=color_1	
			b5=b5-(v+1)
		
			console.log('el turno es: '+turno)
     }
     else{
         if(turno==color_2){
			 turno2()
			 var v=6
				document.getElementById('boton-'+(b5-v)).style.backgroundColor=color_2	
				b5=b5-(v+1)		
		    } 
		 
			console.log('el turno es: '+turno)
	 }
	
     
}

function turnos6(){
	if(turno==color_1){
		turno1()
		var v=6
			document.getElementById('boton-'+(b6-v)).style.backgroundColor=color_1	
			b6=b6-(v+1)
		
			console.log('el turno es: '+turno)
     }
     else{
         if(turno==color_2){
			 turno2()
			 var v=6
				document.getElementById('boton-'+(b6-v)).style.backgroundColor=color_2	
				b6=b6-(v+1)		
		    } 
			console.log('el turno es: '+turno)
	 }
	 
     
}

function turnos7(){
	if(turno==color_1){
		turno1()
		var v=6
			document.getElementById('boton-'+(b7-v)).style.backgroundColor=color_1	
			b7=b7-(v+1)
		
			console.log('el turno es: '+turno)
		
     }
     else{
         if(turno==color_2){
			 turno2()
			 var v=6
				document.getElementById('boton-'+(b7-v)).style.backgroundColor=color_2	
				b7=b7-(v+1)		
		    } 
		 
		 console.log('el turno es: '+turno)
		
	}
}	


function ganador(){
	const color_1 ='red'
	const color_2 = 'yellow'
	n1=0
	n2=0

	for(var fil=42;fil>=1;fil--){
        n1=0
		n2=0
		for(var col=42;col>=1;col-=7){
			
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				n1 = 0
				n2 = 0
			}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				n1++
				n2 = 0
				
				if (n1 == 4)
					return resultado=color_1
																																			
			}else{
				 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					n1 = 0
					n2++
					if (n2 == 4){
						
						return resultado =color_2
						
					}
				 }
			}
			
		}
	}
	
	
}
function horizontal(){
	//buscar horizontal

		for(var col=42;col>=1;col--){
			
            if ( document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				hor1 = 0
				hor2 = 0
			}else if ( document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				hor1++
				hor2 = 0
				console.log(hor1)
				console.log(hor2)
				if (hor1 == 4)
					return horizontal_1=color_1
																																				
			}else{
				 if( document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					hor1 = 0
					hor2++
					console.log(hor1)
				console.log(hor2)
					if (hor2 == 4){

						return horizontal_1 = color_2
				 }
			}	
		}
		}
	
}
function diagonal_(){
	//buscar horizontal derecha a izquierda
for(var fil=42;fil>=1;fil--){
	h1=0
	h2=0
	for(var col=42;col>=1;col-=8){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			h1 = 0
			h2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			h1++
			h2 = 0
			
			if (h1 == 4)
			
				return diagonal_1=color_1	
																																		
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				h1 = 0
				h2++
				if (h2 == 4){
					
					return diagonal_1 =color_2
				
					
				}
			 }
		}
		
	}
}
//buscar horizontal izquierda a derecha
for(var fil=42;fil>=1;fil--){
	h1=0
	h2=0
	for(var col=42;col>=1;col-=6){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			h1 = 0
			h2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			h1++
			h2 = 0
			
			if (h1 == 4)
			
				return diagonal_1=color_1	
																																			
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				h1 = 0
				h2++
				if (h2 == 4){
					
					return diagonal_1 =color_2
						
					
				}
			 }
		}
		
	}
}

	
}

function ganador2(){
	const color_1 ='red'
const color_2 = 'yellow'
bi1=0
bi2=0

	for(var fil=42;fil>=1;fil--){
         bi1=0
		 bi2=0
		for(var col=41;col>=1;col-=7){
		
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				bi1 = 0
				bi2 = 0
			}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				bi1++
				bi2 = 0
				
				if (bi1 == 4){
					
					return resultado_2=color_1
						
				}																											
			}else{
				 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					bi1 = 0
					bi2++
					
					if (bi2 == 4){
						
						return resultado_2 =color_2
					}
				 }
			}
			
		}
	}

	

}
function horizontal2(){
    //buscar horizontal
   
        for(var col=42;col>=1;col-=1){
            
            if ( document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
                
                hor3 = 0
                hor4 = 0
            }else if ( document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
                hor3++
                hor4 = 0
                console.log(hor3)
				console.log(hor4)
                if (hor3 == 4)
                    return horizontal_2=color_1																															
            }else{
                 if( document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
                    hor3 = 0
					hor4++
					console.log(hor3)
				console.log(hor4)
                    if (hor4 == 4){
                        return horizontal_2 =color_2
                        
                    }
                 }
            }
            
        }
    
}
function diagonal2(){
	//buscar horizontal derecha a izquierda
for(var fil=42;fil>=1;fil--){
	i1=0
	i2=0
	for(var col=41;col>=1;col-=8){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			i1 = 0
			i2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			i1++
			i2 = 0
			
			if (i1 == 4)
				return diagonal_2=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				i1 = 0
				i2++
				if (i2 == 4){
					return diagonal_2 =color_2
					
				}
			 }
		}
		
	}
}
//buscar horizontal izquierda a derecha
for(var fil=42;fil>=1;fil--){
	i1=0
	i2=0
	for(var col=41;col>=1;col-=6){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			i1 = 0
			i2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			i1++
			i2 = 0
			
			if (i1 == 4)
				return diagonal_2=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				i1 = 0
				i2++
				if (i2 == 4){
					return diagonal_2 =color_2
					
				}
			 }
		}
		
	}
}
}

function ganador3(){
	const color_1 ='red'
const color_2 = 'yellow'
c1=0
c2=0

	for(var fil=42;fil>=1;fil--){
        c1=0
		c2=0
		for(var col=40;col>=1;col-=7){
			
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
				c1 = 0
				c2 = 0
			}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				c1++
				c2 = 0
				
				if (c1 == 4){
					return resultado_3=color_1
				}																												
			}else{
				 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					c1 = 0
					c2++
					
					if (c2 == 4){
						return resultado_3 = color_2
					}
				 }
			}
			
		}
	}
}
function horizontal3(){
	//buscar horizontal
	
		for(var col=42;col>=1;col-=1){
			
            if ( document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				hor5 = 0
				hor6 = 0
			}else if ( document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				hor5++
				hor6 = 0
				console.log(hor5)
				console.log(hor6)
				if (hor5 == 4)
					return horizontal_3=color_1																															
			}else{
				 if( document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					hor5 = 0
					hor6++
					console.log(hor5)
				console.log(hor6)
					if (hor6 == 4){
						return horizontal_3 =color_2
						
					}
				 }
			}
			
		}
	
}
function diagonal3(){
	//buscar horizontal derecha a izquierda
for(var fil=42;fil>=1;fil--){
	j1=0
	j2=0
	for(var col=40;col>=1;col-=8){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			j1 = 0
			j2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			j1++
			j2 = 0
			
			if (j1 == 4)
				return diagonal_3=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				j1 = 0
				j2++
				if (j2 == 4){
					return diagonal_3 =color_2
					
				}
			 }
		}
		
	}
}
//buscar horizontal izquierda a derecha
for(var fil=42;fil>=1;fil--){
	j1=0
	j2=0
	for(var col=40;col>=1;col-=6){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			j1 = 0
			j2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			j1++
			j2 = 0
			
			if (j1 == 4)
				return diagonal_3=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				j1 = 0
				j2++
				if (j2 == 4){
					return diagonal_3 =color_2
					
				}
			 }
		}
		
	}
}
}

function ganador4(){
	const color_1 ='red'
const color_2 = 'yellow'
d1=0
d2=0

	for(var fil=42;fil>=1;fil--){
       d1=0
		d2=0
		for(var col=39;col>=1;col-=7){
			
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
				d1 = 0
				d2 = 0
			}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				d1++
				d2 = 0
				
				if (d1 == 4){
					return resultado_4=color_1
				}																												
			}else{
				 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					d1 = 0
					d2++
					
					if (d2 == 4){
						return resultado_4=color_2
					}
				 }
			}
			
		}
	}

	
	
}
function horizontal4(){
    //buscar horizontal
    
        for(var col=42;col>=1;col-=1){
            
            if ( document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
                
                hor7 = 0
                hor8 = 0
            }else if ( document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
                hor7++
                hor8 = 0
                console.log(hor7)
				console.log(hor8)
                if (hor7 == 4)
                    return horizontal_4=color_1																															
            }else{
                 if( document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
                    hor7 = 0
					hor8++
					console.log(hor7)
				console.log(hor8)
                    if (hor8 == 4){
                        return horizontal_4 =color_2
                        
                    }
                 }
			}
		}
		
			
}  
function diagonal4(){
	//buscar horizontal derecha a izquierda
for(var fil=42;fil>=1;fil--){
	k1=0
	k2=0
	for(var col=39;col>=1;col-=8){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			k1 = 0
			k2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			k1++
			k2 = 0
			
			if (k1 == 4)
				return diagonal_4=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				k1 = 0
				k2++
				if (k2 == 4){
					return diagonal_4 =color_2
					
				}
			 }
		}
		
	}
}
//buscar horizontal izquierda a derecha
for(var fil=42;fil>=1;fil--){
	k1=0
	k2=0
	for(var col=39;col>=1;col-=6){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			k1 = 0
			k2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			k1++
			k2 = 0
			
			if (k1 == 4)
				return diagonal_4=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				k1 = 0
				k2++
				if (k2 == 4){
					return diagonal_4 =color_2
					
				}
			 }
		}
		
	}
}
}

function ganador5(){
	const color_1 ='red'
const color_2 = 'yellow'
e1=0
e2=0

	for(var fil=42;fil>=1;fil--){
        e1=0
		e2=0
		for(var col=38;col>=1;col-=7){
		
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
				e1 = 0
				e2 = 0
			}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				e1++
				e2 = 0
				
				if (e1 == 4){
					return resultado_5=color_1
				}																											
			}else{
				 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					e1 = 0
					e2++
					
					if (e2 == 4){
						return resultado_5=color_2
					}
				 }
			}
			
		}
	}
	
	
}
function horizontal5(){
	//buscar horizontal
	
		for(var col=42;col>=1;col-=1){
			
            if ( document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				hor9 = 0
				hor10 = 0
			}else if ( document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				hor9++
				hor10 = 0
				console.log(hor9)
				console.log(hor10)
				if (hor9 == 4)
					return horizontal_5=color_1																															
			}else{
				 if(document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					hor9 = 0
					hor10++
					console.log(hor9)
				console.log(hor10)
					if (hor10 == 4){
						return horizontal_5 =color_2
						
					}
				 }
			}
			
		}
		
	
}
function diagonal5(){
	//buscar horizontal derecha a izquierda
for(var fil=42;fil>=1;fil--){
	l1=0
	l2=0
	for(var col=38;col>=1;col-=8){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			l1 = 0
			l2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			l1++
			l2 = 0
			
			if (l1 == 4)
				return diagonal_5=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				l1 = 0
				l2++
				if (l2 == 4){
					return diagonal_5 =color_2
					
				}
			 }
		}
		
	}
}
//buscar horizontal izquierda a derecha
for(var fil=42;fil>=1;fil--){
	l1=0
	l2=0
	for(var col=38;col>=1;col-=6){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			l1 = 0
			l2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			l1++
			l2 = 0
			
			if (l1 == 4)
				return diagonal_5=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				l1 = 0
				l2++
				if (l2 == 4){
					return diagonal_5 =color_2
					
				}
			 }
		}
		
	}
}
}

function ganador6(){
	const color_1 ='red'
const color_2 = 'yellow'
f1=0
f2=0

	for(var fil=42;fil>=1;fil--){
        f1=0
		f2=0
		for(var col=37;col>=1;col-=7){
			
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				f1 = 0
				f2 = 0
			}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				f1++
				f2 = 0
				
				if (f1 == 4){
					return resultado_6=color_1
				}																											
			}else{
				 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					f1 = 0
					f2++
					
					if (f2 == 4){
						return resultado_6=color_2
					}
				 }
			}
			
		}
	}

	
	
}
function horizontal6(){
    //buscar horizontal
    
        for(var col=42;col>=1;col-=1){
            
            if ( document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
                
                hor11 = 0
                hor12 = 0
            }else if ( document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
                hor11++
                hor12 = 0
                console.log(hor11)
				console.log(hor12)
                if (hor11 == 4)
                    return horizontal_6=color_1																															
            }else{
                 if( document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
                    hor11 = 0
					hor12++
					console.log(hor11)
				console.log(hor12)
                    if (hor12 == 4){
                        return horizontal_6 =color_2
                        
                    }
                 }
            }
            
		}
		
    
}
function diagonal6(){
	//buscar horizontal derecha a izquierda
for(var fil=42;fil>=1;fil--){
	m1=0
	m2=0
	for(var col=37;col>=1;col-=8){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			m1 = 0
			m2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			m1++
			m2 = 0
			
			if (m1 == 4)
				return diagonal_6=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				m1 = 0
				m2++
				if (m2 == 4){
					return diagonal_6 =color_2
					
				}
			 }
		}
		
	}
}
//buscar horizontal izquierda a derecha
for(var fil=42;fil>=1;fil--){
	m1=0
	m2=0
	for(var col=37;col>=1;col-=6){
		
		if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
			
			m1 = 0
			m2 = 0
		}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
			m1++
			m2 = 0
			
			if (m1 == 4)
				return diagonal_6=color_1																															
		}else{
			 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
				m1 = 0
				m2++
				if (m2 == 4){
					return diagonal_6 =color_2
					
				}
			 }
		}
		
	}
}
}

function ganador7(){
	const color_1 ='red'
const color_2 = 'yellow'
g1=0
g2=0

	for(var fil=42;fil>=1;fil--){
        g1=0
		g2=0
		for(var col=36;col>=1;col-=7){
			
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				g1 = 0
				g2 = 0
			}else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				g1++
				g2 = 0
			
				
				if (g1 == 4){
					
					return resultado_7 =color_1
				}
																																		
			}else{
				 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					g1 = 0
					g2++
					
					if (g2 == 4){
						return resultado_7 =color_2
					}
					
				}
			}
			
		}
	}
	
}
function horizontal7(){
	//buscar horizontal
	
		for(var col=42;col>=1;col-=1){
			
            if ( document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
				
				hor13 = 0
				hor14 = 0
			}else if ( document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
				hor13++
				hor14 = 0
				console.log(hor13)
				console.log(hor14)
				if (hor13 == 4)
					return horizontal_7= color_1																															
			}else{
				 if( document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
					hor13 = 0
					hor14++
					console.log(hor13)
				console.log(hor14)
					if (hor14 == 4){
						return resultado_7 = color_2
						
					}
				 }
			}
			
		}
	

}
function diagonal7(){
    //buscar horizontal derecha a izquierda
    for(var fil=42;fil>=1;fil--){
        n1=0
        n2=0
        for(var col=36;col>=1;col-=8){
            
            if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
                
                n1 = 0
                n2 = 0
            }else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
                n1++
                n2 = 0
                
                if (n1 == 4)
                    return diagonal_7=color_1																															
            }else{
                 if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
                    n1 = 0
                    n2++
                    if (n2 == 4){
                        return diagonal_7 =color_2
                        
                    }
                 }
            }
            
        }
    }
    //buscar horizontal izquierda a derecha
for(var fil=42;fil>=1;fil--){
    n1=0
    n2=0
    for(var col=36;col>=1;col-=6){
        
        if (document.getElementById('boton-'+fil).style.backgroundColor == color_0 && document.getElementById('boton-'+col).style.backgroundColor == color_0 ) {
            
            n1 = 0
            n2 = 0
        }else if (document.getElementById('boton-'+fil).style.backgroundColor ==color_1 && document.getElementById('boton-'+col).style.backgroundColor == color_1 ){
            n1++
            n2 = 0
            
            if (n1 == 4)
                return diagonal_7=color_1																															
        }else{
             if(document.getElementById('boton-'+fil).style.backgroundColor ==color_2 && document.getElementById('boton-'+col).style.backgroundColor == color_2 ){
                n1 = 0
                n2++
                if (n2 == 4){
                    return diagonal_7 =color_2
                    
                }
             }
        }
        
    }
}
}



function mostrar_ganador(){
	const color_1 ='red'
	const color_2 = 'yellow'
	
	var resultado = ganador()
	var resultado_2 = ganador2()
	var resultado_3 = ganador3()
	var resultado_4 = ganador4()
	var resultado_5 = ganador5()
	var resultado_6 = ganador6()
	var resultado_7 = ganador7()
	console.log(resultado)
	console.log(resultado_2)
	console.log(resultado_3)
	console.log(resultado_4)
	console.log(resultado_5)
	console.log(resultado_6)
	console.log(resultado_7)
	
	var diagonal_1=diagonal_()
	var diagonal_2=diagonal2()
	var diagonal_3=diagonal3()
	var diagonal_4=diagonal4()
	var diagonal_5=diagonal5()
	var diagonal_6=diagonal6()
	var diagonal_7=diagonal7()

	console.log(diagonal_1)
	console.log(diagonal_2)
	console.log(diagonal_3)
	console.log(diagonal_4)
	console.log(diagonal_5)
	console.log(diagonal_6)
	console.log(diagonal_7)

	var horizontal_l = horizontal()
	var horizontal_2 = horizontal2()
	var horizontal_3 = horizontal3()
	var horizontal_4 = horizontal4()
	var horizontal_5 = horizontal5()
	var horizontal_6 = horizontal6()
	var horizontal_7 = horizontal7()

	console.log(horizontal_l)
	console.log(horizontal_2)
	console.log(horizontal_3)
	console.log(horizontal_4)
	console.log(horizontal_5)
	console.log(horizontal_6)
	console.log(horizontal_7)

	var j=document.getElementById('jugador-1').innerHTML

	var g=document.getElementById('jugador-2').innerHTML
	
	if( resultado == color_1||resultado_2== color_1||
		resultado_3== color_1||resultado_4== color_1||
		resultado_5== color_1||resultado_6== color_1||
		resultado_7== color_1||horizontal_l== color_1||
		horizontal_2== color_1||horizontal_3== color_1||
		horizontal_4== color_1||horizontal_5== color_1||
		horizontal_6== color_1||horizontal_7== color_1||
		diagonal_1== color_1||diagonal_2== color_1||
		diagonal_3== color_1||diagonal_4== color_1||
		diagonal_5== color_1||diagonal_6== color_1||diagonal_7 == color_1){
		document.getElementById('ganador-').innerHTML='El ganador es '+j
		for(var i=42;i>=1;i--){
			document.getElementById('boton-'+i).disabled = true
		}
	}else if(resultado== color_2||resultado_2== color_2||
		resultado_3== color_2||resultado_4== color_2||resultado_5== color_2
		||resultado_6== color_2||resultado_7== color_2||horizontal_l== color_2
		||horizontal_2== color_2||horizontal_3== color_2||horizontal_4== color_2
		||horizontal_5== color_2||horizontal_6== color_2||horizontal_7== color_2||
		diagonal_1== color_2||diagonal_2== color_2||diagonal_3== color_2||diagonal_4== color_2
		||diagonal_5== color_2||diagonal_6== color_2||diagonal_7 == color_2){
			document.getElementById('ganador-').innerHTML='El ganador es '+g
			for(var i=42;i>=1;i--){
				document.getElementById('boton-'+i).disabled = true
			}
		}
	}
