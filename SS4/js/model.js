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