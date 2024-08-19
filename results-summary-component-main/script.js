const icon = document.querySelectorAll(".item-icon");
const category = document.querySelectorAll(".item-category");
const score = document.querySelectorAll(".item-score");
const summary = document.querySelector(".summary-item");

async function dataJson() {
  const requestJson = await fetch("./data.json");

  try {
    if (!requestJson.ok) {
      throw new Error("Erro na requisição: " + requestJson.statusText);
    }

    const json = await requestJson.json();

    json.forEach((e, i) => {
      icon[i].src = e.icon;
      category[i].innerHTML = e.category;
      score[i].innerHTML = `${e.score} <span>/ 100</span>`;
    });
  } catch (error) {
    console.error("Erro: ", error);

    if (error instanceof TypeError) {
      summary.textContent = "Ocorreu um erro no carregamento dos dados.";
    } else if (error instanceof RangeError) {
      summary.textContent = "Ocorreu um erro no intervalo.";
    } else {
      summary.textContent = "Ocorreu um erro inesperado, entre em contato com os desenvolvedores.";
    }
  }
}

dataJson();
