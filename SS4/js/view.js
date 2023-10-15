const view = {}

view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case `registerScreen`:
      document.getElementById("app").innerHTML = components.registerScreen;
      document.getElementById("redirect-to-login").addEventListener("click", () => {
        view.setActiveScreen("loginScreen");
      });


      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = {
          // lấy dữ liệu người dùng thông qua câu lệnh sau:
          firstName: registerForm.firstName.value.trim(),
          lastName: registerForm.lastName.value.trim(),
          email: registerForm.email.value.trim(),
          password: registerForm.password.value.trim(),
          confirmPassword: registerForm.confirmPassword.value.trim()
        }

        console.log(data); /// Kết quả là gì
        controller.register(data);

      })
      break;

    case `loginScreen`:
      document.getElementById("app").innerHTML = components.loginScreen;

      document.getElementById("redirect-to-register").addEventListener("click", () => {
        view.setActiveScreen("registerScreen");
      });

      const loginForm = document.getElementById("login-form");
      loginForm.addEventListener("submit", (event) => {
        // Ngăn sự kiện reload mặc định của trình duyệt
        event.preventDefault();

        const data = {
          email: loginForm.email.value.trim(),
          password: loginForm.password.value.trim()
        }
        console.log(data);

        controller.login(data);
      })

      break;
  }
}