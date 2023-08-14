// Bai 01 ==================================================================
// N Số FIBONACI ===========================================================

// function checkFibo(n) {
//     if(n === 1 || n === 2) {
//         return 1;
//     }
//     return checkFibo(n - 1) + checkFibo(n - 2);
// }

// var count = 1; 

//  function listFibo(n) {

//     if(count > n) { 
//         return false;
//     } else {
//         console.log(checkFibo(count));  
//         count++;
//         return listFibo(n);  
//     }
    
//  }

//  listFibo(10);

// Bai 02 ========================================================================
// Đảo ngược số ==================================================================

//  function reverse(n) {
//     var ans = 0;
//     while(n > 0) {
//         var temp = n % 10;
//         temp = Math.trunc(temp);
//         ans = (ans * 10) + temp;
//         n /= 10;
//         n = Math.trunc(n);
//     }
//     console.log(ans);
//  }   

// reverse(2345)

// Bai 03 ========================================================================================
// Viết hàm chuyển số thành chữ ==================================================================

// function lowerString(n) {
//     switch(n) {
//         case 0:
//             return 'không'; 
//         case 1:
//             return 'một';
//         case 2:
//             return 'hai';
//         case 3:
//             return 'ba';
//         case 4:
//             return 'bốn';
//         case 5:
//             return 'năm'; 
//         case 6:
//             return 'sáu';
//         case 7:
//             return 'bảy';
//         case 8:
//             return 'tám';
//         case 9:
//             return 'chín';
//         default:
//             console.log(false);
//     }
// }

// function upperString(n) {
//     switch(n) {
//         case 0:
//             return 'Không'; 
//         case 1:
//             return 'Một';
//         case 2:
//             return 'Hai';
//         case 3:
//             return 'Ba';
//         case 4:
//             return 'Bốn';
//         case 5:
//             return 'Năm'; 
//         case 6:
//             return 'Sáu';
//         case 7:
//             return 'Bảy';
//         case 8:
//             return 'Tám';
//         case 9:
//             return 'Chín';
//         default:
//             console.log(false);
//     }
// }

//  function toString(n) {
//     var ans = "", a, b, c, d;
//     if (n >= 0 && n <= 9999) {
//         // tách các số hàng nghìn, hàng trăm, hàng chục gán bằng a, b, c, d;
//         a = n / 1000; 
//         a = Math.trunc(a); 
//         n -= 1000 * a;
//         b = n / 100; 
//         b = Math.trunc(b);
//         n -= 100 * b;
//         c = n / 10; 
//         c= Math.trunc(c);
//         n -= 10 * c;
//         d = n ; 
//         d = Math.trunc(d);

//         if (a === 0 && b === 0 && c === 0) {
//             ans = lowerString(d);
//         }
//         else {
//             // check trường hợp của a và b
//         a = a === 0 ? "" : `${upperString(a)} nghìn `;
//         b = b === 0 ? "" : `${lowerString(b)} trăm `;
        
//         // check trường hợp đặc biệt
//         if (b === "" && d !== 0) {
//             b = `không trăm `;
//         }

//         // check trường hợp của c và d
//         if (d === 0) {
//             d = "";
//             if (c === 0) {
//                 c = "";
//             } else if (c === 1) {
//                 c = "mười";
//             } else {
//                 c = `${lowerString(c)} mươi`
//             }
//         } else if (d === 1) {
//             d = "";
//             if (c === 0) {
//                 c = "lẻ một";
//             } else if (c === 1) {
//                 c = "mười một";
//             } else {
//                 c = `${lowerString(c)} mươi mốt`
//             }
//         } else if (d === 5) {
//             d = `lăm`;
//             if (c === 0) {
//                 c = "lẻ ";
//             } else if (c === 1) {
//                 c = "mười ";
//             } else {
//                 c = `${lowerString(c)} mươi `
//             }
//         } else {
//             d = `${lowerString(d)}`;
//             if (c === 0) {
//                 c = "lẻ ";
//             } else if (c === 1) {
//                 c = "mười ";
//             } else {
//                 c = `${lowerString(c)} mươi `
//             }
//         } 
//         ans = `${a}${b}${c}${d}`
//     }

//         console.log(ans);
//     }
//     else {
//         console.log('Nhập số khác hộ em');
//     }
//  }

//  // NHẬP TEST CASE VÀO ĐÂY NHÉ ANH
 
//   toString(111)
   