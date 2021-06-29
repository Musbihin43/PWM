// Kode js untuk mengambil dan menanpilkan data dari API
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

//Menambahkan event listener untuk memanggil function saat tombol di klik
cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

//Mengambil gambar dari API untuk kucing  
function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
        });
}
//Mengambil gambar dari API untuk anjing  
function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}
