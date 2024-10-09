/* 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

function verifyA(text) {
    const qtdA = (text.toLowerCase().match(/a/g) || []).length;

    if (qtdA > 0) {
        console.log(`A letra 'a' aparece ${qtdA} vezes na string.`);
    } else {
        console.log("A String não contém a letra 'a'.");
    }
}
const text = "qualquer coisa que tenha letra a";
verifyA(text);
