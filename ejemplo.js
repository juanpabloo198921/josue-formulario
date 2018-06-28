var fecha_nacimiento = 2001;
var fecha_actual = 2018;

if(fecha_nacimiento<=fecha_actual){
	var edad= fecha_actual-fecha_nacimiento;
	if(edad >= 18){
		console.log('este usuario es mayor de edad');
	}
	else{
		console.log('no pola');
	}
}
console.log(edad);

for(var i = 0; i <= 50; i++) {
	if (i % 7 == 0) 
	console.log(i);
}
