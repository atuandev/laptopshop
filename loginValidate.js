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
});

function login(e) {
  event.preventDefault();
  let username = document.querySelector('#username').value;
  let gmail = document.querySelector('#gmail').value;
  let password = document.querySelector('#password').value;

  let user = localStorage.getItem(username);
  let data = JSON.parse(user);

  if (user === null) alert('Đăng nhập thất bại');

  if (
    username === data.username &&
    password === data.password &&
    gmail === data.gmail
  ) {
    alert('Đăng nhập thành công');
    window.location.href = './index.html';
  }
}
