/** Operadores lógicos
 * && -> And -> E
 * || -> Or -> Ou
 * ! -> Not -> Não
 */

const numb1 = 1;
const numb2 = 2;

const tr = numb1 && numb2 === 1;
const tr2 = numb1 && numb2 === 2;

console.log(tr && tr2);
console.log(tr || tr2 == true);
console.log(tr2);

// outro exemplo 

const user = 'Xablau';
const password = '1234';
let login = true;

if (user === 'Xablau' && password === '12341') login = false;

!login ? console.log('Está logado') : console.log('Não está logado');
