const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7"
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/images/favourites?limit=2&api_key=9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7"

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
        const img2 = document.getElementById('img2');
        console.log("Ramdon:", data);
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}

async function get_fav_cat(){
    const response = await fetch(API_URL_FAVORITES);
    const data = await response.json();
    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error " + response.status + " " + data.message;
    }
    else{
        console.log("Favourites:", data);
    }
}

async function saveFavourites(){
    const rest = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: 12
        }),
    });
    const data = await rest.json();
    if (rest.status !== 200) {
        spanError.innerHTML = "Hubo un error " + rest.status + " " + data.message;
    }
    console.log("Save:", data);

}

function get_cat(){
    const btn = document.getElementById('get');
    btn.addEventListener('click', get_img_async);
}
get_img_async();
get_fav_cat();
//enpoint and query params

