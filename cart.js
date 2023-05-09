document.querySelector('.showCart').classList.add('hidden');
const myCart = document.getElementById('myCart');

let gioHang = new Array();
function themGioHang(e) {
  event.preventDefault();
  var ten = e.closest('.single_product_desc').children[1].children[0].innerText;
  var price = e.closest('.single_product_desc').children[2].children[0]
    .innerText;
  var color = e.closest('.cart-form').children[0].children[0].value;
  var img = e.closest('.single_product_details_area').children[0].children[0]
    .children[0].children[0].children[0].children[0].src;

  var sp = new Array(img, ten, color, price);
  gioHang.push(sp);
  countSp();
  showMyCart();
}

function countSp() {
  document.querySelector('.countSp').innerText = gioHang.length;
}

function showMyCart() {
  let ttgh = '';
  let tong = 0;
  for (let i = 0; i < gioHang.length; i++) {
    ttgh += `<tr>
          <td>${i + 1}</td>
          <td><img style="height: 50px;" src="${gioHang[i][0]}" alt=""></td>
          <td>${gioHang[i][1]}</td>
          <td>${gioHang[i][3]}</td>
          <td>${gioHang[i][2]}</td>
          <td>${gioHang[i][3]}</td>
        </tr>`;
  }
  myCart.innerHTML = ttgh;
}

function showCart() {
  document.querySelector('.showCart').classList.toggle('hidden');
}
