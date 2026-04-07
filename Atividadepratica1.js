// Atividade 1 - Criar um script que solicita ao usuário que digite seu nome e idade, e então exibir
// uma mensagem personalizada no temrinal.



const readline = require("readline");
	
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

	rl.question("Digite seu nome", (input) =>{
    rl.question("Digite sua idade", (input2) =>{
        console.log("Meu nome é" + input + ", e tenho " + input2 + " anos.")
        rl.close()
    })
    })
