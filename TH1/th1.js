// document.write("你好! 你好吗?")

function greeting() {
    alert("Hi there!");
}

function check() {
    if (myForm.age.value >= 18) document.write("Tuổi của bạn hợp lệ, " + myForm.name.value);
    else alert("Bạn chưa đủ tuổi!")
}
// bài 10
function b10() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "admin") {
        alert("login successfully");
        return false;
    }
    else {
        alert("login failed");
    }
}

function cleartextboxes() {
    $("input:text").val("");
}
//
function b11() {
    var rd1 = document.getElementById("male");
    var rd2 = document.getElementById("female");

    if (rd1.checked == true)
        alert("Giới tính là " + rd1.value);

    else if (rd2.checked == true)
        alert("Giới tính là " + rd2.value);
    else
        alert("Chưa chọn")
}

function b12() {
    var check = document.getElementById("like");
    if (check.checked == true)
        alert("Bạn vừa thích mp3zing!")
    else alert("Bạn vừa bỏ thích mp3zing")
}