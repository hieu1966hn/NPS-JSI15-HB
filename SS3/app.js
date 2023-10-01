////// Khai báo kiểu dữ liệu Nguoi
// class Nguoi{

//   ///// Định nghĩa phương thức (hàm)
//   walk(){
//     alert("Tôi đang đi bộ đấy");
//   }
// }

// //// Làm thế nào để khai báo biến có kiểu dữ liệu là Nguoi
// let Dang = new Nguoi();
// Dang.walk();




///////// Thuộc tính của class
class Nguoi {
  //// Định nghĩa thuộc tính: từ khóa constructor (hàm khởi tạo thuộc tinh)
  constructor(_name, _age, _address, _hobby) {
    this.name = _name;
    this.age = _age;
    this.address = _address;
    this.hobby = _hobby;
  }

  sleep() {
    alert(`Quân chỉ biết ngủ`);
  }
}

//// Khởi tạo biên có kiểu dữ liệu Nguoi
let Quan = new Nguoi("Quân", 14, "Mê Linh - Hà Lội", ['Cầu Lông', "game"]);
console.log("Quan: ", Quan);



//////// Tính kế thừa;
class Person {
  // Thuộc tính nhận vào gồm
  constructor(_name, _age, _address, _id) {
    // Gán giá trị cho thuộc tính của class
    this.name = _name;
    this.age = _age;
    this.address = _address;
    this.id = _id;
  }

  say() {
    return `I am a Person and my name is ${this.name}`
  }
}

/////// Khai báo 1 class Student kế thừa từ class Person
class Student extends Person {
  constructor(_name, _age, _address, _id, _school, _class, _idStudent, _schoolAddress) {
    // Từ khóa kế thừa thuộc tính từ cha như sau:
    super(_name, _age, _address, _id);
    this.school = _school;
    this.class = _class;
    this.idStudent = _idStudent;
    this.schoolAddress = _schoolAddress;
  }


  //// Kế thừa phương thức;
  say() {
    super.say(); // Cú pháp kế thưa phương thức
    return super.say() + ` and I am learning from MindX School at ${this.schoolAddress}`
  }
}


///// khai báo 1 học sinh
let TungAnh = new Student("Nguyễn Tùng Anh", 16, "Hoài Đức - Hà Nội",
  123456789, "MindX School", "NPS-JSI15",
  "tunganh1", "107A Nguyễn Phong Sắc");

console.log(
  TungAnh.say()
);



/*
Bài 1: Khởi tạo kiểu dữ liệu hình tròn 
Biết rằng hình tròn có thuộc tính truyền vào là: bán kính
Yêu cầu: Xây dựng phương thức trong KDL hình tròn như sau:
+ Tính diện tích hình tròn
+ Tính chu vi hình tròn

Bài 2: Khởi tạo KDL hình chữ nhật
Biết rằng hình chữ nhật có thuộc tính truyền vào là: chiều dài, chiều rộng
Yêu cầu: Xây dựng phương thức
+ Tính diện tích hình chữ nhật
+ Tính chu vi hình chữ nhật
*/
const PI = 3.1415;

class HinhTron {
  constructor(_r) {
    this.r = _r;
  }

  area() {
    return this.r * this.r * 2 * PI
  }

  ChuVi() {
    return this.r * 2 * PI
  }
}

let hinhtron1 = new HinhTron(2);
console.log(hinhtron1.r);

console.log(
  hinhtron1.area()
);


// Hình chữ nhật
class HinhChuNhat {
  constructor(_dai, _rong) {
    this.dai = _dai;
    this.rong = _rong;
  }

  area() {
    return this.dai * this.rong
  }

  ChuVi() {
    return (this.dai + this.rong) / 2
  }
}

let HCN1 = new HinhChuNhat(5, 3);
console.log(HCN1.area());