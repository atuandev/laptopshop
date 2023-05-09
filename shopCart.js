const myCart = document.getElementById('myCart');
let tong = document.querySelector('.tong');

let gioHang = new Array();

function themGioHang(e) {
  event.preventDefault();
  var ten = e.closest('.product-description').children[1].children[0].innerText;
  var price = e.closest('.product-description').children[2].children[0]
    .innerText;
  var img = e.closest('.single-product-wrapper').children[0].children[0].src;
  var sp = new Array(img, ten, price);
  gioHang.push(sp);

  countSp();
  showMyCart();

  sessionStorage.setItem('gioHang', JSON.stringify(gioHang));
}

function countSp() {
  document.querySelector('.countSp').innerText = gioHang.length;
}

function showMyCart() {
  let ttgh = '';
  let sum = 0;
  for (let i = 0; i < gioHang.length; i++) {
    sum += Number(gioHang[i][2]);
    ttgh += `<tr>
    <td>${i + 1}</td>
    <td><img style="height: 50px;" src="${gioHang[i][0]}" alt=""></td>
    <td>${gioHang[i][1]}</td>
    <td>${gioHang[i][2]}</td>
    <td>Black</td>
    <td>${gioHang[i][2]}</td>
    </tr>`;
  }
  myCart.innerHTML = ttgh;
  tong.textContent = `Tổng: ${sum}`;
}

function showCart() {
  document.querySelector('.showCart').classList.toggle('hidden');
}

function showGioHang() {
  var gh = sessionStorage.getItem('gioHang');
  var gioHang = JSON.parse(gh);

  let ttgh = '';
  let sum = 0;
  for (let i = 0; i < gioHang.length; i++) {
    sum += Number(gioHang[i][2]);
    ttgh += `<tr>
    <td>${i + 1}</td>
    <td><img style="height: 50px;" src="${gioHang[i][0]}" alt=""></td>
    <td>${gioHang[i][1]}</td>
    <td>${gioHang[i][2]}</td>
    <td>Black</td>
    <td>${gioHang[i][2]}</td>
    </tr>`;
  }
  myCart.innerHTML = ttgh;
  tong.textContent = `Tổng: ${sum}`;
}
showGioHang();
