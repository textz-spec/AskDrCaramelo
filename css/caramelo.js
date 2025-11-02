const form = document.getElementById("form-doenca");
const inputDoenca = document.getElementById("input-doenca");
const resposta = document.getElementById("resposta");


// impede a pagina de recarregar 

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

// pega o valor do input 

const doença = inputDoenca.value.trim().toLowerCase();


// condicao 

switch (doença) {
    case "gripe":
        resposta.style.color = "#000000ff";
        resposta.textContent = "Para curar a gripe, descanse bastante, hidrate-se, coma bem e cuide do seu corpo."
        break;
    case "dengue":
        resposta.style.color = "#000000ff";
        resposta.textContent = "Descanse, hidrate-se e fique atento aos sinais de alerta da dengue";
        break;
    case "covid":
        resposta.style.color = "#000000ff";
        resposta.textContent = "Se tiver COVID, cuide da respiração, mantenha repouso e observe qualquer febre alta.";
        break;
     case "covid-19":
        resposta.style.color = "#000000ff";
        resposta.textContent = "Se tiver COVID, cuide da respiração, mantenha repouso e observe qualquer febre alta.";
        break;

      case "catapora":
         resposta.style.color = "#000000ff";
         resposta.textContent = "Catapora: evite coçar, descanse, cuide da pele e procure médico se houver febre alta."
         break;

      case "asma":
         resposta.style.color = "#000000ff";
         resposta.textContent = "Asma: evite gatilhos, use medicação prescrita e procure médico se a falta de ar piorar."
         break;
       
      case "diarreia":
         resposta.style.color = "#000000ff";
         resposta.textContent = "Diarreia: repouse, mantenha alimentação leve e procure médico se houver desidratação."
         break;


    //  doenças intimas 

      case "aids":
         resposta.style.color = "#000000ff";
         resposta.textContent = "Fez o L"
         break;

      case "hiv":
         resposta.style.color = "#000000ff";
         resposta.textContent = "use preservativo, evite compartilhamento de agulhas e faça testes regularmente."
         break;


       case "ebola":
         resposta.style.color = "#000000ff";
         resposta.textContent = "Imitnado everson zoio brol🤔?"
         break;

       case "gonorreia":
         resposta.style.color = "#000000ff";
         resposta.textContent = "Gonorreia: use preservativo, faça exames regulares e procure médico para tratamento rápido."
         break;

       default:
        resposta.style.color = "#d50a0aff";
        resposta.textContent = "Doença não cadastrada.";
}
});

let doencaCadastrada = [ " gripe ", " dengue ", " covid ", "covid-19", " catapora ", " asma ", " diarreia ", " aids ", " hiv ", " ebola ", " gonorreia " 

]



console.log(" doenças cadastradas:  " + doencaCadastrada);