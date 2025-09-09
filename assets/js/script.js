AOS.init({
  duration: 800, // Thời gian animation
  once: true, // Chỉ animate một lần
  offset: 50, // Animate khi cách màn hình 50px
});

$(document).ready(function () {
  // 1. Xử lý hiệu ứng Navbar khi cuộn trang
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".main-navbar").addClass("scrolled");
    } else {
      $(".main-navbar").removeClass("scrolled");
    }
  });

  // 2. Xử lý hiển thị/ẩn Mobile Menu
  $(".navbar-toggler").click(function () {
    $(".mobile-menu-overlay").addClass("active");
    $("body").addClass("no-scroll");
  });

  $(".close-menu").click(function () {
    $(".mobile-menu-overlay").removeClass("active");
    $("body").removeClass("no-scroll");
  });

  // 3. Tự động thêm class active-link cho trang hiện tại (LOGIC MỚI, ĐÃ SỬA LỖI)
  $(function () {
    // Lấy đường dẫn URL của trang hiện tại
    var currentPage = location.pathname.split("/").slice(-1)[0];

    // Nếu không có tên file (trang chủ), mặc định là 'index.html'
    if (currentPage === "") {
      currentPage = "index.html";
    }

    // Bước 1: Xóa class 'active-link' khỏi tất cả các link trước
    $(".navbar-links a, .mobile-menu-overlay a").removeClass("active-link");

    // Bước 2: Chỉ thêm class 'active-link' vào link khớp với trang hiện tại
    // Sử dụng attribute selector để tìm chính xác link có href mong muốn
    $('.navbar-links a[href="' + currentPage + '"]').addClass("active-link");
    $('.mobile-menu-overlay a[href="' + currentPage + '"]').addClass(
      "active-link"
    );
  });
});

// =========================================================================
// 4. Xử lý Thư viện ảnh ở trang chi tiết phòng
$(".gallery-thumbnails .thumbnail").click(function () {
  // Lấy đường dẫn ảnh lớn từ thumbnail
  var newImageSrc = $(this).attr("src").replace("w=300", "w=1740"); // Thay đổi kích thước ảnh cho phù hợp

  // Cập nhật ảnh chính
  $("#main-image").attr("src", newImageSrc);

  // Xóa class 'active' khỏi tất cả thumbnail
  $(".gallery-thumbnails .thumbnail").removeClass("active");
  // Thêm class 'active' cho thumbnail được click
  $(this).addClass("active");
  // 5. Xử lý trang Thanh toán
  $(".payment-option").click(function () {
    // Bỏ active ở tất cả các lựa chọn
    $(".payment-option").removeClass("active");
    // Active lựa chọn được click
    $(this).addClass("active");
    // Check vào radio button bên trong
    $(this).find('input[type="radio"]').prop("checked", true);

    // Hiển thị hoặc ẩn chi tiết thẻ
    if ($("#credit-card").is(":checked")) {
      $(".card-details").slideDown();
    } else {
      $(".card-details").slideUp();
    }
  });

  // ... code cũ của bạn (navbar, mobile menu, active link) ...

  // 5. Khởi tạo thư viện Animate On Scroll (AOS)
});
