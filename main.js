// BT1
/**
 * INPUT: số ngày làm, lương 100000/ngày của nhân viên,
 * PROCESS: tính toán lương nhan viên bằng cthuc
 * OUTPUT: Hiển thị tiền lương của nhân viên lên trang web
 */
function tinhLuong() {
  var SalaryADay = 100000;
  var workADay = parseInt(document.getElementById("workADay").value);
  var luong = SalaryADay * workADay;
  document.getElementById("totalSalary").innerHTML =
    "The total salary of employee is: " + luong + " VND";
}
// BT2
/**
 * INPUT: NhậP giá trị của 5 số
 * PROCESS: Tính trung bình cộng của 5 số đó
 * OUTPUT: Hiển thị trung bình cộng lên trang web
 * note: làm tròn lên 2 chữ số
 */
function calculateAverage() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);
  var num4 = parseFloat(document.getElementById("num4").value);
  var num5 = parseFloat(document.getElementById("num5").value);
  var sum = num1 + num2 + num3 + num4 + num5;
  var average = sum / 5;
  var roundedAverage = average.toFixed(2);
  document.getElementById("output").innerHTML =
    "The average of the 5 numbers is: " + roundedAverage;
}
// BT3
/**
 * INPUT: Nhập giá trị số tiền USD
 * PROCESS: Tính số tiền VND tương ứng với số tiền USD đó, dựa trên tỷ giá
 * OUTPUT: Hiển thị số tiền VND tương ứng lên trang web
 */
var exchangeRate = 23500;
function convert() {
  var usd = parseFloat(document.getElementById("usd-input").value);
  var vnd = usd * exchangeRate;
  document.getElementById("totalMoney").innerHTML =
    "The equivalent amount in VND is: " + vnd;
}
// BT4
/**
 * INPUT: NhậP chiều dài và chiều rộng của hình chữ nhật
 * PROCESS: Tính diện tích và chu vi của hình chữ nhật đó
 * OUTPUT: Hiển thị diện tích và chu vi lên trang web
 */
function calculate() {
  var length = parseFloat(document.getElementById("length-input").value);
  var width = parseFloat(document.getElementById("width-input").value);
  var area = length * width;
  var perimeter = 2 * (length + width);
  document.getElementById("rectangle").innerHTML =
    "Area: " + area + "<br>Perimeter: " + perimeter;
}
// BT5
/**
 * INPUT: number (an integer): số để tính tổng các chữ số của nó
 * sum (an integer): tổng các chữ số của số đã cho
 *
 * PROCESS: nhập 2 số.
 * Tính tổng các chữ số bằng công thức: tổng = Math.floor(số / 10) + (số % 10).
 *
 * OUTPUT: Hiển thị tổng các chữ số lên trang web
 *
 */
var numberInput = document.getElementById("number");
var resultParagraph = document.getElementById("character");
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    var number = parseInt(numberInput.value);
    var sum = Math.floor(number / 10) + (number % 10);
    resultParagraph.textContent = "The sum of digits is: " + sum;
  });
