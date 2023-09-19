// Điểm khác biệt giữa let, var ,const (Khai báo hằng số => không thay)
// const PI = 3.14;
// // PI = 100;
// console.log("PI: ", PI);



// Khác biệt let và var

// {
//   {
//     {
//       let a = "Đây là biến a";
//       var b = "Đay là biến b";
//       {
//         console.log(a);
//       }
//     }
//   }
// }
// console.log(b);// 

/*
let: Sử dụng để khai báo biến cục bộ:
var: Sử dụng để khai báo biến Toàn cục;
*/


/*
Ôn tập kiến thức về hàm

Khai báo hàm:

Hàm có tham số (không tham số thì bỏ tham số đi là được)
function sum(a,b,c){
  return a + b + c;
}

Hàm có return và hàm không có return

Hàm có tên hàm và không có tên hàm



Hàm mũi tên: Cú pháp khai báo
 const sum =  () =>{
  ... code hàm
 }
*/
// sum(1,2,3);// 6

// Ví dụ khai báo hàm: kiểm tra số nguyên tố (là số lớn hơn 1. Chỉ chia hết cho 1 và chính nó)
// let a = Number(
//   prompt("Mời người dùng nhập vào số tự nhiên")
// );
// const kiemTraSoNguyenTo = (a) => {
//   for (let i = 2; i < a; i++) {
//     if (a % i == 0) {
//       return false
//     }
//   }
//   return true;
// }


// if (kiemTraSoNguyenTo(a) == true) {
//   alert(`${a} là số nguyên tố`)
// }
// else {
//   alert(`${a} không là số nguyên tố`)
// }



/*
Khái niệm spread syntax

*/


////// Sai cú pháp copy mảng
// let arr = [1, 2, 3];
// let arr1 = arr;
// arr1[2] = 0;

// console.log("arr: ", arr); //? [1,2,0];


// let thanh = [3, 2, 1];
// let hieu = thanh;

// hieu[2] = 100
// console.log(thanh);

////Cách đúng
// let arr = [1, 2, 3];
// let arr1 = [...arr]; // Copy toàn bộ giá trị của arr sang một ô nhớ mới => 2 biến này ko còn liên quan tới nhau nữa

// arr1[0] = 1000;
// console.log(arr); /// [1,2,3]


///// Nối mảng thành mảng lớn: c = a + b
// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let c = [...a, ...b]
// console.log("c: ", c);



//////  Copy đối tượng;
// let obj1 = {
//   name: "Ngáo",
//   type: "Husky",
// }

// let obj2 = {
//   name: "pub",
//   type: "pug",
//   height: "short"
// }

// let obj3 = { ...obj1, ...obj2 }
// console.log("obj3: ", obj3); //// Cái sau ghi đè cái trước



/////////////// Đề bài: Tăng gấp đôi giá trị các phần tử bên trong mảng và in ra nó.
// let arr = [1, 2, 3, 4, 5, 6]; // [2, 4,...]
// let result = arr.map(item => item * 2);/// [2, 4,]
// console.log("result: ", result);

// ///// Đề bài: lấy kết quả dư của các phần tử trong mảng arr khi chia cho 2
// console.log(
//   arr.map(item => item % 2)
// );


/////////// Đề bài: Lọc các phần tử dương ra 1 mảng mới và in ra nó
// let arr = [-1, 345, 6, 100, -10, -3];
// let result = arr.filter(item => item >0);
// console.log("result: ", result);




/*
Đề bài ứng dụng 

*/

let users = [
  { id: 1, name: "Quân", age: "15", group: "class-monitor-student" },
  { id: 2, name: "Đăng", age: "15", group: "vice-student" },
  { id: 3, name: "Đạt", age: "17", group: "student" },
  { id: 4, name: "Tùng Anh", age: "16", group: "student" },
  { id: 5, name: "Thành", age: "16", group: "student" },
  { id: 6, name: "Chi", age: "15", group: "student" },
  { id: 7, name: "Hiếu", age: "25", group: "teacher" },
]

/*
Yêu cầu đề bài: 
1. Lọc ra các bạn học sinh trong lớp  (có role là student)
2. Từ kết quả bên trên, lọc tiếp các bạn học sinh có tuổi lớn hơn 15
3. Từ kết quả bên trên: Lọc ra các bạn có id < 5.
4. Thay đổi tất cả id của lớp học thành dạng: "số-mindx" (VD: 1-mindx, 2-mindx).
*/

/// Câu 1
let result1 = users.filter(item => item.group.includes("student"));
console.log("result1: ", result1);


/// Câu 2:
let result2 = result1.filter(item => item.age > 15);

// Câu 3: 
let result3 = result2.filter(item => item.id < 5);

// Câu 4 :
let usersMindX = users.map(item => item.id = item.id + "-mindx");
console.log("usersMindX: ", usersMindX);

