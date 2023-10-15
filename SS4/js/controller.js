const controller = {};

controller.register = (data) => {
  // Kiểm tra những lỗi gì??

  if (data.firstName == "") {
    document.getElementById("first-name-error").
      innerText = `Please input first name`;
  }
  else {
    document.getElementById("first-name-error").
      innerText = ``;
  }

  if (data.lastName == "") {
    document.getElementById("last-name-error").
      innerText = `Please input last name`;
  }
  else {
    document.getElementById("last-name-error").
      innerText = ``;
  }


  if (data.email == "") {
    document.getElementById("email-error").
      innerText = `Please input email`;
  }
  else {
    document.getElementById("email-error").
      innerText = ``;
  }

  if (data.password == "") {
    document.getElementById("password-error").
      innerText = `Please input password`;
  }
  else {
    document.getElementById("password-error").
      innerText = ``;
  }


  if (data.confirmPassword == "") {
    document.getElementById("confirm-password-error").
      innerText = `Please input  confirm password`;
  }
  else {
    document.getElementById("confirm-password-error").
      innerText = ``;
  }

  /*
  Toán tử 3 ngôi
    (điều kiện kiểm tra)? code1: code2
  */

  data.password !== data.confirmPassword ?
    document.getElementById("confirm-password-error").innerText = `Confirm password is error` :
    document.getElementById("confirm-password-error").innerText = ``


  ////// Tạo user
  if (data.firstName !== "" && data.lastName !== "" &&
    data.email !== "" &&
    data.password !== "" &&
    data.confirmPassword !== "" &&
    data.password === data.confirmPassword
  ) {
    model.register(data);
  }
}


controller.login = (dataLogin) => {
  if (dataLogin.email === "") {
    document.getElementById("email-error").innerText = "*Please input email";
  }
  else {
    document.getElementById("email-error").innerText = "";
  }

  if (dataLogin.password === "") {
    document.getElementById("password-error").innerText = "*Please input password";
  }
  else {
    document.getElementById("password-error").innerText = "";
  }

  if (dataLogin.email !== "" && dataLogin.password !== "") {
    model.login(dataLogin);
  }

}


