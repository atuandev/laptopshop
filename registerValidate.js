$(document).ready(function () {
  function kiemTraUsername() {
    var ma = $('#username').val();
    var reg = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (ma === '') {
      usernameSP.innerText = 'Vui lòng nhập';
      $('#username').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      usernameSP.innerText = '';
      $('#username').addClass('input-active');
      return true;
    } else {
      usernameSP.innerText = 'Sai định dạng tên đăng nhập';
      $('#username').removeClass('input-active');
      return false;
    }
  }
  $('#username').blur(kiemTraUsername);

  function kiemTraHoTen() {
    var ma = $('#hoTen').val();
    var reg = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}([a-z])*)*$/;

    if (ma === '') {
      hoTenSP.innerText = 'Vui lòng nhập';
      $('#hoTen').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      hoTenSP.innerText = '';
      $('#hoTen').addClass('input-active');
      return true;
    } else {
      hoTenSP.innerText = 'Chữ cái đầu mỗi từ phải viết hoa';
      $('#hoTen').removeClass('input-active');
      return false;
    }
  }
  $('#hoTen').blur(kiemTraHoTen);

  function kiemTraGmail() {
    var ma = $('#gmail').val();
    var reg = /^\S+@\S+\.\S+$/;
    if (ma === '') {
      gmailSP.innerText = 'Vui lòng nhập';
      $('#gmail').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      gmailSP.innerText = '';
      $('#gmail').addClass('input-active');
      return true;
    } else {
      gmailSP.innerText = 'Gmail không đúng định dạng';
      $('#gmail').removeClass('input-active');
      return false;
    }
  }
  $('#gmail').blur(kiemTraGmail);

  function kiemTraPass() {
    var ma = $('#password').val();
    var reg = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (ma === '') {
      passwordSP.innerText = 'Vui lòng nhập';
      $('#password').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      passwordSP.innerText = '';
      $('#password').addClass('input-active');
      return true;
    } else {
      passwordSP.innerText = 'Sai định dạng password';
      $('#password').removeClass('input-active');
      return false;
    }
  }
  $('#password').blur(kiemTraPass);

  function kiemTraDiaChi() {
    var ma = $('#diaChi').val();
    var reg = /^[a-zA-Z0-9\s\,\''\-]*$/;

    if (ma === '') {
      diaChiSP.innerText = 'Vui lòng nhập';
      $('#diaChi').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      diaChiSP.innerText = '';
      $('#diaChi').addClass('input-active');
      return true;
    } else {
      diaChiSP.innerText = 'Sai định dạng địa chỉ';
      $('#diaChi').removeClass('input-active');
      return false;
    }
  }
  $('#diaChi').blur(kiemTraDiaChi);
});

function signup(e) {
  event.preventDefault();
  let username = document.querySelector('#username').value;
  let gmail = document.querySelector('#gmail').value;
  let password = document.querySelector('#password').value;

  let user = {
    username: username,
    gmail: gmail,
    password: password,
  };
  let json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert('Dang ky thanh cong');
}

