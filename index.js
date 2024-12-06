const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwtich = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });


      modeSwtich.addEventListener("click", () =>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
          modeText.innerText = "Light mode"
        }else{f
          modeText.innerText = "Dark mode"
        }
      });

// USE API
const API_KEY = "ed64b43223084f6d9a97e32899ddefc2";
const API_URL = "https://api.rawg.io/api";

// DOM Elements
const gamesContainer = document.getElementById('gamesContainer');
const searchInput = document.getElementById('searchInput');

// Fetch and display popular games on page load
fetchPopularGames();

// Add "Enter" key press functionality for search
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            fetchGames(query);
        }
    }
});

// Function to fetch popular games
function fetchPopularGames() {
    const url = `${API_URL}/games?key=${API_KEY}&ordering=-rating&page_size=15`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayGames(data.results))
        .catch(error => console.error('Error fetching popular games:', error));
}

// Function to fetch games based on search query
function fetchGames(query) {
    const url = `${API_URL}/games?key=${API_KEY}&search=${query}&page_size=15`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayGames(data.results))
        .catch(error => console.error('Error fetching search results:', error));
}

// Function to display games
function displayGames(games) {
    gamesContainer.innerHTML = ''; // Clear existing content
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        gameCard.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p><strong>Rating:</strong> ${game.rating}</p>
        `;

        gamesContainer.appendChild(gameCard);
    });
}