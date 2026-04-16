// c0109e248a802b15fd8df9d7ebd34170
// https://v3.football.api-sports.io

// поиск команды по названию 

// список доступных с лого

// выбор одного и получение нужной информации о нем






// var myHeaders = new Headers();
// myHeaders.append("x-apisports-key", "c0109e248a802b15fd8df9d7ebd34170");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://v3.football.api-sports.io/leagues", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// const API_KEY = "c0109e248a802b15fd8df9d7ebd34170";

// async function getTeam() {
//   const res = await fetch(
//     "https://v3.football.api-sports.io/teams?search=Chelsea",
//     {
//       headers: {
//         "x-apisports-key": API_KEY
//       }
//     }
//   );

//   const data = await res.json();

//   const team = data.response[0].team;

//   document.getElementById("team").innerHTML = `
//     <h2>${team.name}</h2>
//     <img src="${team.logo}" width="100">
//     <p>Страна: ${team.country}</p>
//     <p>Основан: ${team.founded}</p>
//   `;
// }

// getTeam();





const API_KEY = "c0109e248a802b15fd8df9d7ebd34170";
const BASE_URL = "https://v3.football.api-sports.io";

async function apiRequest(endpoint) {
  try {
    const res = await fetch(BASE_URL + endpoint, {
      method: "GET",
      headers: {
        "x-apisports-key": API_KEY
      }
    });

    if (!res.ok) {
      throw new Error("Ошибка HTTP: " + res.status);
    }

    const data = await res.json();
    return data.response;

  } catch (error) {
    console.error("API ошибка:", error);
  }
}



// async function loadTeam() {
//   const teams = await apiRequest("/teams?id=541");

//   const team = teams[0].team;

//   document.getElementById("team").innerHTML = `
//     <h2>${team.name}</h2>
//     <img src="${team.logo}" width="100">
//     <p>${team.country}</p>
//   `;
// }

// loadTeam();


async function searchTeam() {
  const name = document.getElementById("teamInput").value;

  const teams = await apiRequest(`/teams?search=${name}`);

  if (!teams || teams.length === 0) {
    document.getElementById("result").innerHTML = "Ничего не найдено";
    return;
  }

  const team = teams[0].team;

  document.getElementById("result").innerHTML = `
    <h2>${team.name}</h2>
    <img src="${team.logo}" width="100">
    <p>${team.country}</p>
  `;
}