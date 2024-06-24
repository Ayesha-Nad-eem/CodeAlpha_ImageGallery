const folders=document.querySelectorAll(".folder");
const gallery=document.getElementById("gallery");
const lightbox=document.getElementById("lightbox");
const image=lightbox.querySelector(".lightbox-content");
const caption=lightbox.querySelector(".caption-container");
const prev=lightbox.querySelector(".prev");
const next=lightbox.querySelector(".next");
const close=lightbox.querySelector(".close");
let currentIndex=0;

const images={
    Nature: [
        
        {src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg', caption: 'Nature Image 1'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrvE85eW9nMQbakX11jPL2XybGmNTIlhnKw&s', caption: 'Nature Image 2'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s', caption: 'Nature Image 3'},
        {src: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', caption: 'Nature Image 4'},
        {src: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80', caption: 'Nature Image 5'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lwrOYDPSz9mjrHYc0Py79cY_cRebzNeE2bFEcXP4bwhAk6f22xjGgPyA_n3NRslhQ8I&usqp=CAU', caption: 'Nature Image 6'},
        {src: 'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=170667a&w=0&k=20&c=0eyjD9xiGItjC1Yklk_q3Ry1Jr0zWAUJ6q8kDmBuyvk=', caption: 'Nature Image 7'},
        {src: 'https://i.pinimg.com/736x/d5/0b/d2/d50bd25b9cc865495b31a97e7a1eed18.jpg', caption: 'Nature Image 8'},
        {src: 'https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg', caption: 'Nature Image 9'},
        {src: 'https://thumbs.dreamstime.com/z/meadow-clouds-summer-day-50035194.jpg', caption: 'Nature Image 10'},
    ],
    Flowers: [
        
        {src: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg', caption: 'Flowers Image 1'},
        {src: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg', caption: 'Flowers Image 2'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOyBnBOEuBb2ic_lkKR3ra7dXuBql-Oevwg&s', caption: 'Flowers Image 3'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNLvYUmCrMpe5istjrNAWqmCVxCDNu7V4i5lQhwQvreQ1u2BOGhbiz6a3K8CO7BgE7v8&usqp=CAU', caption: 'Flowers Image 4'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4CqWzvb-J8xjgs_YYdB7Oeu6_OAzCHFTzg&s', caption: 'Flowers Image 5'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAwuoZHd9FMpQAaLk-Z0HyME1enPKTUDfFg&s', caption: 'Flowers Image 6'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFDi2VJKoUkDU2xzvVz-RKESguELWkWhVIdAyRyZN1cc3fB9gjhL78wuTiOWjXl9pvPw0&usqp=CAU', caption: 'Flowers Image 7'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77xGIoe-cYX-PqEJ2_IzwLgUv9O5twcteOg&s', caption: 'Flowers Image 8'},
        {src: 'https://www.treehugger.com/thmb/9m5k0PQ2BPU29v1xHZ9E5blQBAY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-543041806-16b150dba6f44048b21ffe1547867d72.jpg', caption: 'Flowers Image 9'},
        {src: 'https://i.pinimg.com/originals/31/34/47/313447aaf3bc0140c53e813de90948ca.jpg', caption: 'Flowers Image 10'},
    ],
    Moon: [
        
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyKzTl8cLNOZqWHsC6BqQYu9l7CYW36vO9g&s', caption: 'Moon Image 1'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcif1zNYxdP56hCVtBtT0wbExxHr4WWjJwWnQkzuBH_2nrDu70mVjKaAzFcSYoC3roPQ4&usqp=CAU', caption: 'Moon Image 2'},
        {src: 'https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2023/12/moon_1497116264.jpg', caption: 'Moon Image 3'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkx1_ZAq5EF0Eg_H_zP4jio1OtgC9ztFe0w&s', caption: 'Moon Image 4'},
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlRJAsSwxpy-7BLAVaCVK5MPccG7sRFixJfTb1lqbA1GQGqbfkHDSmvMb7viOyanQvAI&usqp=CAU', caption: 'Moon Image 5'},
        {src: 'https://www.fubiz.net/wp-content/uploads/2014/03/Moon-6.jpg', caption: 'Moon Image 6'},
        {src: 'https://cdn.mos.cms.futurecdn.net/Kg6b5u6UZZVp48yU4MxSxa.jpg', caption: 'Moon Image 7'},
        {src: 'https://c02.purpledshub.com/uploads/sites/48/2019/03/GettyImages-1230480440-d97ff0f.jpg', caption: 'Moon Image 8'},
        {src: 'https://earthsky.org/upl/2023/02/Waxing-crescent-Jan-26-2023-Mandy-Daniels-800x640.jpg', caption: 'Moon Image 9'},
        {src: 'https://i.redd.it/d6m5evzgq3a81.jpg', caption: 'Moon Image 10'},
    ],
    Art: [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSl4NMd73VcdRLQdKY4sDgorTZT5T9Ia_Ofg&s', caption: 'Art image 1'},
        { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKGr3DIIh3qzwQb8iORx22ImF3VqFb8Ht2g&s',caption: 'Art image 2'},
        { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XtnyQf_D2jzPaTISUQlkz99ojRWbkljTn_XMJtlW9KdyISD2c2nLywN36KsbCFLlZyQ&usqp=CAU',caption: 'Art image 3'},
        { src:'https://img.freepik.com/free-photo/multi-colored-creativity-close-up-human-eye-generated-by-ai_188544-15574.jpg',caption: 'Art image 4'},
        { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjDV5K7GuRkpJfFmL_2L8c4Ac4XM7r7C7BA&s',caption: 'Art image 5'},
        { src:'https://cdna.artstation.com/p/top_row_items/images/000/002/656/20231128111535/original/hcotm-keyart-890x500.jpg?1701191735',caption: 'Art image 6'},
        { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqOiomUJ-0jcWR5n0fj2zDykC8KMaWZGG6w&s',caption: 'Art image 7'},
        { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkcTATAAapkpxD_Jf6Etf-sgAppwXNdrmLA&s',caption: 'Art image 8'},
        { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRls8AdJot6keDzuw0QxYPEcgoZfp6FarNptg&s',caption: 'Art image 9'},
        { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9TaUZOLiMml8WwICYTuNOjHZoBsZ_vk7cTvYyEtzgMsdvxi3Hx3JngQCtQr6rIMxhNY&usqp=CAU',caption: 'Art image 10'}
    ]
};

function imageGallery(folder){
     currentFolder=folder;
    gallery.innerHTML='';
    images[folder].forEach((image,index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `<img src="${image.src}" alt="${image.caption}"><p class="caption">${image.caption}</p>`;
        galleryItem.addEventListener('click', () => showLightbox(folder, index));
        gallery.appendChild(galleryItem);
    });
};

function showLightbox(folder,index){
    const thimage=images[folder][index];
    image.src=thimage.src;
    lightbox.style.display='block';
    caption.textContent=image.caption;
    currentIndex=index;
};

folders.forEach((folder)=>{
    folder.addEventListener('click',()=>{
        const folderName=folder.getAttribute('data-folder');
        imageGallery(folderName);
    });
});

close.addEventListener('click',()=>{
    lightbox.style.display='none';
});

prev.addEventListener('click',()=>{
    currentIndex=(currentIndex>0)? currentIndex-1: images[currentFolder].length-1;
    showLightbox(currentFolder,currentIndex);
});

next.addEventListener('click',()=>{
    currentIndex=(currentIndex<images[currentFolder].length-1 )? currentIndex+1: 0;
    showLightbox(currentFolder,currentIndex);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
