// Bài 1
// khối 1 nhập ngày, tháng, năm
// khối 2 xử lý
// khối 3 đầu ra

function getEle(id) {
  return document.getElementById(id);
}
function cal_date() {
  var ngay = getEle("date").value; // đầu vào
  var thang = getEle("mounth").value; // đầu vào
  var nam = getEle("year").value; // đầu vào

  ngay = parseInt(ngay); // chuyển sang kiểu int
  thang = parseInt(thang); // chuyển sang kiểu int
  nam = parseInt(nam); // chuyển sang kiểu int

  // xử lý
  var date_bf = 0; //gán biến
  var date_aft = 0; //gán biến
  var thang_bf = 0; //gán biến
  var thang_aft = 0; //gán biến
  var nam_bf = 0; //gán biến
  var nam_aft = 0; //gán biến
  //   phân biệt tháng 30 và tháng 31 ngày và 28 ngày của 1 năm
  if (
    thang == 1 ||
    thang == 3 ||
    thang == 5 ||
    thang == 7 ||
    thang == 8 ||
    thang == 10 ||
    thang == 12
  ) {
    // date = 31;
    if (ngay > 0 && ngay < 31) {
      //xử lý những ngày nằm trong khoảng 1->30 trong những tháng có 31 ngày
      date_bf = ngay - 1;
      date_aft = ngay + 1;
      thang_bf = thang;
      thang_aft = thang;
      nam_bf = nam;
      nam_aft = nam;
      // tang thang
    } else if (ngay == 31) {
      //xử lý những ngày nằm trong khoảng 31 trong những tháng có 31 ngày
      date_bf = ngay - 1;
      date_aft = 1;
      thang_bf = thang;
      thang_aft = thang + 1;
      nam_bf = nam;
      nam_aft = nam;
    }
    //tăng năm
    if (thang == 12 && ngay == 31) {
      //xử lý những ngày nằm trong khoảng 31 và thang 12 trong những tháng có 31 ngày
      thang_aft = 1;
      nam_aft = nam + 1;
    }
  } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
    // date = 30;
    if (ngay > 0 && ngay < 30) {
      //xử lý những ngày nằm trong khoảng 1->29 trong những tháng có 30 ngày
      date_bf = ngay - 1;
      date_aft = ngay + 1;
      thang_bf = thang;
      thang_aft = thang;
      nam_bf = nam;
      nam_aft = nam;
      // tang thang
    } else if (ngay == 30) {
      //xử lý những ngày nằm trong khoảng 30 trong những tháng có 30 ngày
      date_bf = ngay - 1;
      date_aft = 1;
      thang_bf = thang;
      thang_aft = thang + 1;
      nam_bf = nam;
      nam_aft = nam;
    }
  } else if (thang == 2) {
    // date = 28;
    if (ngay > 0 && ngay < 28) {
      //xử lý những ngày nằm trong khoảng 1->27 trong những tháng có 28 ngày
      date_bf = ngay - 1;
      date_aft = ngay + 1;
      thang_bf = thang;
      thang_aft = thang;
      nam_bf = nam;
      nam_aft = nam;
      // tang thang
    } else if (ngay == 28) {
      //xử lý những ngày nằm trong khoảng 28 trong những tháng có 28 ngày
      date_bf = ngay - 1;
      date_aft = 1;
      thang_bf = thang;
      thang_aft = thang + 1;
      nam_bf = nam;
      nam_aft = nam;
    }
  }
  // xuất kết quả đầu ra
  getEle("date_before").innerHTML =
    "ngày trước đó" + "<br>" + date_bf + "/" + thang_bf + "/" + nam_bf;
  getEle("date_after").innerHTML =
    "ngày sau đó" + "<br>" + date_aft + "/" + thang_aft + "/" + nam_aft;
}

// bài 2
// khối 1 Nhập vào tháng và năm
// khối 2 xử lý để xuất ra ngày ứng với năm và tháng vừa nhập
// khối 3 xuất ra màn hình

function date_nhuan() {
  var thang = getEle("mounth_1").value; // đầu vào
  var nam = getEle("year_1").value; //đầu vào

  thang = parseInt(thang); //đổi thang sang interger
  nam = parseInt(nam); //đổi thang sang interger

  var date = 0;

  if (
    thang == 1 ||
    thang == 3 ||
    thang == 5 ||
    thang == 7 ||
    thang == 8 ||
    thang == 10 ||
    thang == 12
  ) {
    // gán những tháng trên = 31 ngày
    date = 31;
  } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
    // gán những tháng trên = 30 ngày
    date = 30;
  } else if (thang == 2) {
    // tính toán năm nhuận / không nhuận
    if (nam % 4 == 0) {
      // năm nhuận
      date = 29;
    } else {
      // năm không nhuận
      date = 28;
    }
  }
  getEle("date_present").innerHTML = date + " ngày";
}

// Bài 3
// khối 1 đầu vào
// khối 2 xử lý
// khối 3 đầu ra

function read_number() {
  var _3int = getEle("3int").value; // đầu vào

  _3int = parseInt(_3int); // đổi số đầu vào thành int
  // đặt biến
  var hangTram;
  var hangChuc;
  var hangDonvi;
  var rHangtram;
  var rHangchuc;
  var rHangdv;

  // xử lý
  // lấy số hàng trăm
  hangTram = Math.floor(_3int / 100);
  // lấy số hàng chục
  hangChuc = Math.floor(_3int / 10) % 10;
  // lấy số hàng đơn vị
  hangDonvi = _3int % 10;
  if (_3int <= 999) {
    // giới hạn số có 3 chữ số
    // đọc hàng trăm
    switch (hangTram) {
      case 1:
        rHangtram = "Một";
        break;
      case 2:
        rHangtram = "Hai";
        break;
      case 3:
        rHangtram = "Ba";
        break;
      case 4:
        rHangtram = "Bốn";
        break;
      case 5:
        rHangtram = "Năm";
        break;
      case 6:
        rHangtram = "Sáu";
        break;
      case 7:
        rHangtram = "Bảy";
        break;
      case 8:
        rHangtram = "Tám";
        break;
      case 9:
        rHangtram = "Chín";
        break;
    }
    // đọc hàng chục
    switch (hangChuc) {
      case 1:
        rHangchuc = "mười";
        break;
      case 2:
        rHangchuc = "hai mươi";
        break;
      case 3:
        rHangchuc = "ba mươi ";
        break;
      case 4:
        rHangchuc = "bốn mươi";
        break;
      case 5:
        rHangchuc = "năm mươi";
        break;
      case 6:
        rHangchuc = "sáu mươi";
        break;
      case 7:
        rHangchuc = "bảy mươi";
        break;
      case 8:
        rHangchuc = "tám mươi";
        break;
      case 9:
        rHangchuc = "chín mươi";
        break;
    }
    // đọc hàng đơn vị
    switch (hangDonvi) {
      case 1:
        rHangdv = "một";
        break;
      case 2:
        rHangdv = "hai";
        break;
      case 3:
        rHangdv = "ba";
        break;
      case 4:
        rHangdv = "bốn";
        break;
      case 5:
        rHangdv = "năm";
        break;
      case 6:
        rHangdv = "sáu";
        break;
      case 7:
        rHangdv = "bảy";
        break;
      case 8:
        rHangdv = "tám";
        break;
      case 9:
        rHangdv = "chín";
        break;
    }
    if (hangChuc == 0 && hangTram != 0) {
      // kiểm tra kiểu đọc hang chục lẻ
      rHangchuc = "lẻ";
    }
    if (hangChuc == 0 && hangDonvi == 0 && hangTram != 0) {
      // kiểm tra chỉ có hàng trăm
      rHangchuc = rHangdv = "";
    }
    // in đầu ra
    getEle("read_3integer").innerHTML =
      rHangtram + " trăm" + " " + rHangchuc + " " + rHangdv;
  }

  if (_3int < 0 || _3int <= 99 || _3int > 999) {
    // kiểm tra bắt người dùng nhập lại đúng đề bài
    getEle("read_3integer").innerHTML =
      "Vui lòng nhập số nguyên dương 3 chữ số";
  }
}

// bài 4
// khối 1
// khối 2
// khối 3

function sv_farfromSchool() {
  var name_sv1 = getEle("name_sv1").value;
  var name_sv2 = getEle("name_sv2").value;
  var name_sv3 = getEle("name_sv3").value;

  var x_axis1 = getEle("axis_x1").value;
  var x_axis2 = getEle("axis_x2").value;
  var x_axis3 = getEle("axis_x3").value;
  var x_sch = getEle("axis_schx").value;

  var y_axis1 = getEle("axis_y1").value;
  var y_axis2 = getEle("axis_y2").value;
  var y_axis3 = getEle("axis_y3").value;
  var y_sch = getEle("axis_schy").value;

  x_axis1 = parseInt(x_axis1);
  x_axis2 = parseInt(x_axis2);
  x_axis3 = parseInt(x_axis3);
  x_sch = parseInt(x_sch);

  y_axis1 = parseInt(y_axis1);
  y_axis2 = parseInt(y_axis2);
  y_axis3 = parseInt(y_axis3);
  y_sch = parseInt(y_sch);

  var d1; //chiều dài sinh viên 1
  var d2; // chiều dài sinh viên 2
  var d3; // chiều dài sinh viên 3
  //khoang cách sinh viên 1
  d1 = Math.sqrt(
    (x_axis1 - x_sch) * (x_axis1 - x_sch) +
      (y_axis1 - y_sch) * (y_axis1 - y_sch)
  );
  d2 = Math.sqrt(
    (x_axis2 - x_sch) * (x_axis2 - x_sch) +
      (y_axis2 - y_sch) * (y_axis2 - y_sch)
  );
  d3 = Math.sqrt(
    (x_axis3 - x_sch) * (x_axis3 - x_sch) +
      (y_axis3 - y_sch) * (y_axis3 - y_sch)
  );
  if (d1 > d2 && d1 > d3) {
    getEle("sv_mostFar").innerHTML =
      "Sinh viên " + name_sv1 + " xa trường nhất";
  } else if (d2 > d1 && d2 > d3) {
    getEle("sv_mostFar").innerHTML =
      "Sinh viên " + name_sv2 + " xa trường nhất";
  } else if (d3 > d1 && d3 > d2) {
    getEle("sv_mostFar").innerHTML =
      "Sinh viên " + name_sv3 + " xa trường nhất";
  }

}
