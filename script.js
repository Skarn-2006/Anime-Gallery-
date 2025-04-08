// Anime data with real images
const animeData = [
    {
        title: "Demon Slayer",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
    },
    {
        title: "Attack on Titan",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
    },
    {
        title: "One Punch Man",
        image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg"
    },
    {
        title: "My Hero Academia",
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg"
    },
    {
        title: "Jujutsu Kaisen",
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
    },
    {
        title: "Death Note",
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
    },
    {
        title: "Naruto",
        image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg"
    },
    {
        title: "Dragon Ball Super",
        image: "https://cdn.myanimelist.net/images/anime/7/74606.jpg"
    },
    {
        title: "Tokyo Ghoul",
        image: "https://cdn.myanimelist.net/images/anime/5/64449.jpg"
    }
];

const gallery = document.getElementById('imageGallery');
const searchInput = document.getElementById('searchInput');

// Function to create anime cards
function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card rounded-lg overflow-hidden shadow-lg';
    
    card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}" class="w-full">
        <div class="anime-title text-center">${anime.title}</div>
    `;
    
    return card;
}

// Function to render the gallery
function renderGallery(data) {
    gallery.innerHTML = '';
    data.forEach(anime => {
        gallery.appendChild(createAnimeCard(anime));
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredAnime = animeData.filter(anime => 
        anime.title.toLowerCase().includes(searchTerm)
    );
    renderGallery(filteredAnime);
});

// Initial render
renderGallery(animeData);