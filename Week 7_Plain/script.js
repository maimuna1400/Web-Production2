const animeList = document.getElementById('animeTitle');

window.onload = () => {
	
	const searchFieldElement = document.getElementById("searchAnime");
	document.getElementById("get_anime").onclick = (event) => {
		searchAnime(searchFieldElement.value);
	};
}

function searchAnime(query) {
	const url = `https://api.jikan.moe/v4/anime?q=${query}&sfw&limit=16`;
	fetch(url)

	.then(response => response.json())
	.then(data => {

		console.log(data)

		let html = "";

        if(data.data){

            data.data.forEach(data => {
                html += `
                    <div  data-id = "${data.mal_id}">
                        <div class = "anime_img">
                            <img src = "${data.images.jpg.image_url}" alt = "anime">
                        </div>
                        <div class = "anime_name">
                            
                            <a href = "${data.url}" class = "get-anime"><h3>${data.title}</h3></a>
                        </div>
                    </div>
                `;
            });

            animeList.classList.remove('notFound');
        } 
         else{

            html = "we didn't find any anime";

            animeList.classList.add('notFound');
        }
        animeList.innerHTML = html;
    });
    
}
	

