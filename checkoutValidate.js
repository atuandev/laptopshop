$(document).ready(function () {
  function kiemTraTen() {
    var ma = $('#first_name').val();
    var reg = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}([a-z])*)*$/;

    if (ma === '') {
      first_nameSP.innerText = 'Vui lòng nhập';
      $('#first_name').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      first_nameSP.innerText = '';
      $('#first_name').addClass('input-active');
      return true;
    } else {
      first_nameSP.innerText = 'Chữ cái đầu mỗi từ phải viết hoa';
      $('#first_name').removeClass('input-active');
      return false;
    }
  }
  $('#first_name').blur(kiemTraTen);

  function kiemTraHo() {
    var ma = $('#last_name').val();
    var reg = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}([a-z])*)*$/;

    if (ma === '') {
      last_nameSP.innerText = 'Vui lòng nhập';
      $('#last_name').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      last_nameSP.innerText = '';
      $('#last_name').addClass('input-active');
      return true;
    } else {
      last_nameSP.innerText = 'Chữ cái đầu mỗi từ phải viết hoa';
      $('#last_name').removeClass('input-active');
      return false;
    }
  }
  $('#last_name').blur(kiemTraHo);

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

  function kiemTraThanhPho() {
    var ma = $('#city').val();
    var reg = /^([A-Z]{1}[a-z]+)(\s[A-Z]{1}([a-z])*)*$/;

    if (ma === '') {
      citySP.innerText = 'Vui lòng nhập';
      $('#city').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      citySP.innerText = '';
      $('#city').addClass('input-active');
      return true;
    } else {
      citySP.innerText = 'Sai định dạng địa chỉ';
      $('#city').removeClass('input-active');
      return false;
    }
  }
  $('#city').blur(kiemTraThanhPho);

  function kiemTraPhone() {
    var ma = $('#phone_number').val();
    var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (ma === '') {
      phone_numberSP.innerText = 'Vui lòng nhập';
      $('#phone_number').removeClass('input-active');
      return false;
    }
    if (reg.test(ma)) {
      phone_numberSP.innerText = '';
      $('#phone_number').addClass('input-active');
      return true;
    } else {
      phone_numberSP.innerText = 'Số điện thoại không đúng định dạng';
      $('#phone_number').removeClass('input-active');
      return false;
    }
  }
  $('#phone_number').blur(kiemTraPhone);

  function kiemTraGmail() {
    var ma = $('#gmail').val();
    var reg = /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g;
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
});
