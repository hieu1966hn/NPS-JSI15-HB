let a;
console.log(a); //


//// 6 kiểu dữ liệu cơ bản
/*
1. string: Kiểu dữ liệu chuỗi
2. number: Kiểu dữ liệu số (123n4)
3. undefined: Không xác định
4. Object: Kiểu dữ liệu đối tượng
5. Boolean: Kiểu dữ liệu true/false
6. Null: Kiểu dữ liệu rỗng. Example[1,2,4,5, null,7]
*/



/*
Ôn tập kiến thức Javascript
Các dạng toán tử:

1. Toán tử số học: +, -, *, /, %(chia lấy dư)
2. Toán tử so sánh: >,<, >=, <=, == (so sánh tương đối), === (tuyệt đối)
3. Toán tử logic: ||, && (example)

*/
////// Ví dụ toán tử logic
// toán tử ||
console.log(
  1 > 0 || 3 < 2 || 4 > 5 || 0 > 1
); // Kết quả: True  (TOÁN tử || sẽ chỉ tìm trường hợp true để hiển thị. Nếu tất cả không có true => false)

// Toán tử &&
console.log(
  1 > 0 && 3 > 2 && 4 < 5 && 0 > 1
);// Kết quả: False 


////////////// KIẾN THỨC MỚI

// C1 Khai báo 1 hàm
function sum(a, b) {
  return a + b;
}

// C2 Khai báo 1 hàm
const sum1 = (a, b) => {
  return a + b;
}

// Cách viết khác
const sum2 = (a, b) => a + b; // Khi viết hàm mũi tên mà chỉ cần kết quả trả về. Ta có thể viết như này

// console.log(
//   sum1(1, 2)
// );


/*
Viết hàm mũi tên: kiểm tra số nguyên dương và hiển thị thông báo đúng nếu là số nguyên,
thông báo sai nếu không phải số nguyên

*/
// const kiemTraSoNguyenTo = (n) => {
//   if (n > 0 && n == Math.round(n)) {
//     alert(`${n} là số nguyên dương`);
//   }
//   else {
//     alert(`${n} không phải là số nguyên dương`);
//   }
// }

// kiemTraSoNguyenTo(2.0);

////////////// Spread Operator

/*
Sao chép mảng bằng gì?
*/
// let arr1 = [4, 5, 6];
// let arr2 = [1, 2, 3];

// let arr1copy = [...arr1];
// arr1copy[0] = 4.5;
// console.log("arr1: ", arr1);
// console.log("arr1copy: ", arr1copy);


/// Đề bài: Gộp 2 mảng này thành 1 mảng thứ 3 arr3 
// let arr3 = [...arr2, ...arr1]
// console.log("arr3: ", arr3);


///// Đề bài: Gộp 2 đối tượng thành 1 đối tượng thứ 3
let obj1 = {
  name: "Đăng",
  age: 14,
  hobbies: ["chơi game", "xem phim"],
  school: "THCS Di Trạch"
}

let obj2 = {
  name: "Tùng Anh",
  age: 16,
  hobbies: ["chơi game", "vẽ"],
  school: "MindX School",
  gender: "male"
}

let obj3 = { ...obj1, ...obj2 }
console.log("obj3: ", obj3);



