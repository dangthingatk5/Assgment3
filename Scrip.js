// form thông tin
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const submitEmail = document.forms.submit_email;
const emailEl = document.getElementById("emails");
const btn = document.getElementById("submitted");
submitEmail.addEventListener("submit", function (e) {
  const textnhap = emailEl.value.toLocaleLowerCase();
  let result = textnhap.match(regex);
  const error = document.getElementById("error");
  const inf = document.getElementById("infomation");
  if (result) {
    const hideEL = document.querySelector(".hide");
    hideEL.classList.remove("hide");
    //ẩn form đi
    inf.classList.add("hide");
  } else {
    // alert('ban da nhap không đúng đinh dạng email vui long nhap lai')
    error.classList.add("red");
    error.innerText = "Bạn phải nhập đúng  địa chỉ  email!";
  }
  e.preventDefault();
});
// den phan viewmore và viewwlesss view less...code của nosemdatj từ chỗ dưới này ....//
const viemoreEl = document.querySelectorAll(".viewmore");
const viewwlesssEL = document.querySelectorAll(".viewless");
const gridEL = document.querySelectorAll(".colum-spacing");
const showEL1 = document.querySelectorAll(".colum-spacing .show-hide");

for (let i = 0; i < gridEL.length; i++) {
  gridEL[i].addEventListener("mouseover", function () {
    if (viewwlesssEL[i].style.display == "block") {
      viemoreEl[i].style.display = "none";
    } else {
      viemoreEl[i].style.display = "block";
    }

    // kích hoat sự kien khi mình click vao nut viewmore

    viemoreEl[i].addEventListener("click", function () {
      console.log(viemoreEl[i]);
      // hiển thi thông tin chi tiết
      showEL1[i].style.display = "block";
      // tự động cho chiều cao các cột là bằng nhau nếu để  nhiều côt.
      gridEL[i].style.height = "100%";
      // khi click vào côt viemore thì  button viewlet hien ra
      viewwlesssEL[i].style.display = "block";

      viemoreEl[i].style.display = "none";
      // bay gio thao tác ẩn đi nút viemorre
    });

    // khi click vao nut viewless an thong tin di
    viewwlesssEL[i].addEventListener("click", function () {
      showEL1[i].style.display = "none";
      gridEL[i].style.height = "auto";
      viewwlesssEL[i].style.display = "none";
      viemoreEl[i].style.display = "block";
      viemoreEl[i].style.display = "none";
      //chưa có cách nào khi nhấn vào viewmore hó hiện ra dữ  liêu và nút viewless  ý lafbaay giờ phải ẩn nút vieuwmore đi
    });
  });
}

for (let i = 0; i < gridEL.length; i++) {
  gridEL[i].addEventListener("mouseout", function () {
    // h1el[i].addEventListener("mouseout", function () {
    viemoreEl[i].style.display = "none";
    // });
  });
}
