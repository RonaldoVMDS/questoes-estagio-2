/* 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. 
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. 
Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, 
usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  
*/

/* RESPOSTA:
- ligo o interruptor A por 30 minutos
- desligo interruptor A e ligo o interruptor B
- vou até uma sala qualquer, sobre a lâmpada:
Lampada acesa: interruptor B (está ligado)
Lampada desligada (Quente): interruptor A (Estava ligada recentemente)
Lampada desligada (Fria): interruptor C (Não foi ligado em nenhum momento)
Após isso vou para uma segunda sala, independente do resultado, eu posso afirmar qual o interruptor da sala que não verifiquei por eliminação.
*/