const model = {};

model.currentUser = undefined;


// Giao tiếp với server
model.register = async (data) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
    // Dòng này cần thời gian phản hồi từ firebase -> phản hồi xong mới chạy code ở dưới đây

    firebase.auth().currentUser.updateProfile({
      displayName: data.firstName + " " + data.lastName
    });

    // Gửi email về để xác thực 
    firebase.auth().currentUser.sendEmailVerification();
    alert("Email has been registed, please check your email for verification");

    // Hiển thị giao diện trang đăng nhập
    view.setActiveScreen("loginScreen");

  }
  catch (err) {
    console.log(err);
    alert(err.message)
  }

}


model.login = async (dataLogin) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password);

    if (response.user.emailVerified == false) {
      alert("Please Verified your email");
    }
    else {
      model.currentUser = {
        displayName: response.user.displayName,
        email: response.user.email
      }

      // Đi vào màn hình trang chủ khi đã đăng nhập thành công
      view.setActiveScreen("homeScreen");
    }

  }
  catch (err) {
    console.log(err);
    if (err.code == `auth/user-not-found` || err.code == "auth/invalid-email") {
      document.getElementById("email-error").innerText = `${err.message}`;
    }
    else if (err.code = "auth/wrong-password") {
      document.getElementById("password-error").innerText = `${err.message}`;
    }

  }
}