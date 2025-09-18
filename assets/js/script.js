// Khởi tạo thư viện Animate On Scroll (AOS)
AOS.init({
  duration: 800, // Thời gian animation
  once: true, // Chỉ animate một lần
  offset: 50, // Animate khi cách màn hình 50px
});

// Sử dụng jQuery cho các hiệu ứng khác
$(document).ready(function () {
  // 1. Xử lý hiệu ứng Navbar khi cuộn trang
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".main-navbar").addClass("scrolled");
    } else {
      $(".main-navbar").removeClass("scrolled");
    }
  });

  // 2. Xử lý hiển thị/ẩn Mobile Menu (ĐÃ XÓA - Logic này đã được xử lý bằng code vanilla JS bên dưới)
  /* $(".navbar-toggler").click(function () { ... });
  $(".close-menu").click(function () { ... }); 
  */

  // 3. Tự động thêm class active-link cho trang hiện tại
  $(function () {
    var currentPage = location.pathname.split("/").slice(-1)[0];
    if (currentPage === "") {
      currentPage = "index.html";
    }
    $(".navbar-links a, .mobile-menu-overlay a").removeClass("active-link");
    $('.navbar-links a[href="' + currentPage + '"]').addClass("active-link");
    $('.mobile-menu-overlay a[href="' + currentPage + '"]').addClass(
      "active-link"
    );
  });

  // 4. Xử lý Thư viện ảnh ở trang chi tiết phòng
  $(".gallery-thumbnails .thumbnail").click(function () {
    var newImageSrc = $(this).attr("src").replace("w=300", "w=1740");
    $("#main-image").attr("src", newImageSrc);
    $(".gallery-thumbnails .thumbnail").removeClass("active");
    $(this).addClass("active");
  });

  // 5. Xử lý trang Thanh toán
  $(".payment-option").click(function () {
    $(".payment-option").removeClass("active");
    $(this).addClass("active");
    $(this).find('input[type="radio"]').prop("checked", true);

    if ($("#credit-card").is(":checked")) {
      $(".card-details").slideDown();
    } else {
      $(".card-details").slideUp();
    }
  });
});

// =========================================================================
// LOGIC ĐÓNG/MỞ NAVBAR BẰNG VANILLA JAVASCRIPT (ĐÃ GIỮ LẠI VÀ NÂNG CẤP)
// =========================================================================

// Lấy các phần tử cần thiết từ HTML
const navbarToggler = document.querySelector(".navbar-toggler");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const closeMenuButton = document.querySelector(".close-menu");

// --- Hàm Mở Menu ---
function openMenu() {
  navbarToggler.classList.add("active");
  mobileMenuOverlay.classList.add("active");
  document.body.classList.add("no-scroll"); // ĐÃ THÊM: Ngăn cuộn trang
}

// --- Hàm Đóng Menu ---
function closeMenu() {
  navbarToggler.classList.remove("active");
  mobileMenuOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll"); // ĐÃ THÊM: Cho phép cuộn trang lại
}

// --- Gán sự kiện ---
// 1. Khi nhấp vào nút hamburger
navbarToggler.addEventListener("click", openMenu);

// 2. Khi nhấp vào nút đóng (dấu X)
closeMenuButton.addEventListener("click", closeMenu);

// 3. Đóng menu khi nhấp vào lớp phủ màu đen bên ngoài
mobileMenuOverlay.addEventListener("click", function (event) {
  if (event.target === mobileMenuOverlay) {
    closeMenu();
  }
});
