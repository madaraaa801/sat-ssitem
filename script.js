const productsData = [];

// 17 boş ürün için döngü
for(let i = 1; i <= 17; i++){
  productsData.push({
    id: i,
    name: `Ürün ${i}`,
    price: '₺0',
    images: [
      'https://via.placeholder.com/250x160?text=Ürün+' + i + 'https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2Fillustration.svg?v=1618177344016',
      'https://via.placeholder.com/250x160?text=Ürün+' + i + '+Foto+2',
      'https://via.placeholder.com/250x160?text=Ürün+' + i + '+Foto+3',
      'https://via.placeholder.com/250x160?text=Ürün+' + i + '+Foto+4',
      'https://via.placeholder.com/250x160?text=Ürün+' + i + '+Foto+5',
    ]
  });
}

const container = document.getElementById('products-container');

productsData.forEach(product => {
  // Ürün kartı
  const productDiv = document.createElement('div');
  productDiv.className = 'product';

  // Görsel
  const img = document.createElement('img');
  img.id = 'product-img-' + product.id;
  img.src = product.images[0];
  img.alt = product.name;

  // Ürün adı
  const title = document.createElement('h3');
  title.textContent = product.name;

  // Fiyat
  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = product.price;

  // Butonlar
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'gallery-buttons';

  product.images.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.textContent = idx + 1;
    btn.addEventListener('click', () => {
      document.getElementById('product-img-' + product.id).src = product.images[idx];
    });
    buttonsDiv.appendChild(btn);
  });

  // Kartı oluştur
  productDiv.appendChild(img);
  productDiv.appendChild(title);
  productDiv.appendChild(price);
  productDiv.appendChild(buttonsDiv);

  container.appendChild(productDiv);
});