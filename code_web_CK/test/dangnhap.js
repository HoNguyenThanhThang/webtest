// Lấy thông tin từ form đăng nhập
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Thêm sự kiện cho nút Đăng nhập
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

  // Lấy giá trị từ người dùng nhập vào
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Kiểm tra thông tin đăng nhập hợp lệ
  if (username === "admin" && password === "password") {
    // Nếu thông tin hợp lệ, chuyển hướng sang trang khác
    window.location.href = "homepage.html";
  } else {
    // Nếu thông tin không hợp lệ, thông báo lỗi cho người dùng
    const error = document.getElementById("error-message");
    error.innerText = "Thông tin đăng nhập không chính xác!";
  }
});
