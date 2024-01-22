const accessKey = "IOLYwgO3lShMOwdzS3d-6gAcKA9PUjloMAOk0Sasx1k";



const searchform= document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");



let keyword = '';
let page = 1;

async function searchImages(){
    keyword = searchbox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results 
    console.log(results);

    searchbox.value = ""

        results.map((result) =>{
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imagelink = document.createElement("a");
            imagelink.href= result.links.html;
            imagelink.target = "_blank";


            imagelink.appendChild(image);
            searchresult.append(imagelink);





        })
    }

   

searchform.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchresult.innerHTML=("");
    searchImages();
   
})