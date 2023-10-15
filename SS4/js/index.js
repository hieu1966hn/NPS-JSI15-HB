// Khởi tạo logic hoạt động web tại đây.
const init = () => {
  console.log("Windows Loaded");

  const firebaseConfig = {
    apiKey: "AIzaSyBlYJqAhR0ZImsxumpDN6_BVg1MCqpgsHc",
    authDomain: "nps-jsi15-hb.firebaseapp.com",
    projectId: "nps-jsi15-hb",
    storageBucket: "nps-jsi15-hb.appspot.com",
    messagingSenderId: "684179451794",
    appId: "1:684179451794:web:3dbb867d1b8ec958c3db4b",
    measurementId: "G-882YF1EDGQ"
  };

  // let app = initializeApp(firebaseConfig);
  // console.log(app().name);

  firebase.initializeApp(firebaseConfig);

  view.setActiveScreen("registerScreen");

}

window.onload = init;