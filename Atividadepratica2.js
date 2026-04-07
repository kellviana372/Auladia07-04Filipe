// Ampliar o script anterior para perguntar ao usuário se possui CNH. Dependendo da resposta (sim ou não), 
// exibir uma mensagem correspondente.


const readline = require("readline");
	
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

	rl.question("Você possui CNH?", (input) => {

        if (input === " Sim") {
            console.log("Pode dirigir!");
        } else {
            console.log("Não pode dirigir!");
        }
        
        rl.close();
    });
    