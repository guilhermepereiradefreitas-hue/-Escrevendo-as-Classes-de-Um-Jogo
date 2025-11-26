// Classe genérica para representar um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque;

    // Estrutura de decisão para definir o ataque conforme o tipo
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando alguns heróis (objetos)
const herois = [
  new Heroi("Arthas", 30, "guerreiro"),
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Shaolin", 40, "monge"),
  new Heroi("Hanzo", 25, "ninja")
];

// Laço de repetição para mostrar os ataques de cada herói
for (let heroi of herois) {
  heroi.atacar();
}