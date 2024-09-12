



const wrapper = document.querySelector('.wrapper');

const cards = ProductsData.map((card) => {
  return `
      <div class="card">
         <img src=${card.imageUrl} alt="">
         <h2>${card.name}</h2>
         <p>${card.reviews}</p>
         <s>${card.oldPrice}</s>
         <h3>${card.newPrice}</h3>
      </div>
   `
}).join('')

wrapper.innerHTML = cards