const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
})
api.defaults.headers.common['X-API-KEY'] = '9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7';
const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7"
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites"
const API_URL_FAVORITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7`
const API_URL_UPLOAD = "https://api.thecatapi.com/v1/images/upload"
const spanError = document.getElementById('error');
// let get_img = fetch(URL)
// .then(response => response.json())
// .then(data => {
//     const img = document.querySelector('img');
//     img.src = data[0].url;
//     img.width = data[0].width;
//     img.height = data[0].height;
// })

// fetch with async / await
async function get_img_async() {
    const response = await fetch(API_URL_RANDOM);
    const data = await response.json();
    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error " + response.status + " " + data.message;
    }else{
        const img1 = document.getElementById('img1');
        const btn1 = document.getElementById('btn1');
        const img2 = document.getElementById('img2');
        const btn2 = document.getElementById('btn2');
        console.log("Ramdon:", data);
        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavourites(data[0].id);
        btn2.onclick = () => saveFavourites(data[1].id);
    }
}

async function get_fav_cat(){
    const response = await fetch(API_URL_FAVORITES, {
        method: 'GET',
        headers: {
            "X-API-KEY": "9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7"
        }
    });
    const data = await response.json();
    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error " + response.status + " " + data.message;
    }
    else{
        const section = document.getElementById('favoritesMichis');
        section.innerHTML = "";
        const h2 = document.createElement('h2');
        h2.innerHTML = "Favourites Michis";
        section.appendChild(h2);
        console.log("Favorites:", data);
        data.forEach(michi => {
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Eliminar de favoritos');
            btn.appendChild(btnText);
            btn.onclick = () => deleteFavourites(michi.id);
            img.src = michi.image.url;
            img.width = 250;
            img.height = 250;
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
        })
    }
}

async function saveFavourites(id){
    const { data, status } = await api.post('/favourites', {
        image_id: id,
    })
    // const rest = await fetch(API_URL_FAVORITES, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-API-KEY': '9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7'
    //     },
    //     body: JSON.stringify({
    //         image_id: id
    //     }),
    // });
    // const data = await rest.json();
    if (status !== 200) {
        spanError.innerHTML = "Hubo un error " + status + " " + data.message;
    } else {
        console.log("Guardado en favoritos");
        get_fav_cat();
    }
    console.log("Save:", data);

}

async function deleteFavourites(id) {
    const rest = await fetch(API_URL_FAVORITES_DELETE(id), {
        method: 'DELETE',
    });
    const data = await rest.json();
    if (rest.status !== 200) {
        spanError.innerHTML = "Hubo un error " + rest.status + " " + data.message;
    } else {
        console.log("Eliminado de favoritos");
        get_fav_cat();
    }
    console.log("Delete:", data);

}

async function uploadPhoto(){
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);
    const res = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        headers: { 
            //'Content-Type': 'multipart/form-data',
            'X-API-KEY': '9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7'
        },
        body: formData,
    });
}
function get_cat(){
    const btn = document.getElementById('get');
    btn.addEventListener('click', get_img_async);
}
get_img_async();
get_fav_cat();
//enpoint and query params

