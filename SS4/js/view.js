const view = {}

view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case `registerScreen`:
      document.getElementById("app").innerHTML = components.registerScreen;


      document.getElementById("redirect-to-login").addEventListener("click", () => {
        view.setActiveScreen("loginScreen");
      })

      break;


    case `loginScreen`:
      document.getElementById("app").innerHTML = components.loginScreen;

      document.getElementById("redirect-to-register").addEventListener("click", () => {
        view.setActiveScreen("registerScreen");
      });

      break;
  }
}