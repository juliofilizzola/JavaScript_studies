/**
 * && -> false  && true -> false 'O valor mesmo'
 * False é um false é um valor false literal 
 * {0 é avaliado em falso 
 * string vazia
 * null/ undefined 
 * NaN } - são consiederados valores que podem ser avaliado em false. 
 * ---------------------------------------
 * || -> true && false -> true 'vai retornar o valor verdadeiro';
 */

// exemplo 

console.log( 'Jõa' && true && 'Maria');

// podemos comparar qualquer tipo de dado;

/** O que aconteceu nesse exemplo foi:
 * verificou se 'Jõa' é true e depois verificou se true é 'Maria' e retornou o ultimo;
 */


const falaOi = () => 'oi';

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // retorna o falso;

console.log(0 || false || null || "xablau");

/**
 * No exemplo acima, vimos um pouco como o Ou funciona;
 * Ele precisa de um item verdadeiro para retornar;
 * 
 */

