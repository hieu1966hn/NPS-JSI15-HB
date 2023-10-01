const view = {}


view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case `registerScreen`:
      document.getElementById("app").innerHTML = components.registerScreen;
  }
}