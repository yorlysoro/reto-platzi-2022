console.log('Hello World');

const URL = "https://api.thecatapi.com/v1/images/search?limit=3&api_key=9c1b676c-ad0e-40b6-9bd4-27d0b3101bf7"

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
    const response = await fetch(URL);
    const data = await response.json();
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    console.log(data);
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

function get_cat(){
    const btn = document.getElementById('get');
    btn.addEventListener('click', get_img_async);
}
get_img_async();

//enpoint and query params

