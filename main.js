// שאלה ראשונה

// כתוב פונקציה המקבלת מערך ומחזירה מערך בסדר הפוך, לדוגמא מקבלת 3184 מחזירה 4813.
// var arrayNumber=[10,20,30,40,50,60,70];

// function reversNumber(arrayNumber) {
//  for (var i=0;i<arrayNumber.length/2 ; i++){
//      var j= arrayNumber.length-1-i ;
//      temp = arrayNumber[i];
//      arrayNumber[i] = arrayNumber[j];
//      arrayNumber[j] = temp;
//  }
//  return(arrayNumber);
// }

// var x = reversNumber(arrayNumber)
// console.log(x);

//=========================================================================================================/

// שאלה שניה:

// var arrayNumber=[1,5,9,6,4,7,8,4,8,4];
// var strOne="";

// function numbersOfUser(arrayNumber) {
//     if (arrayNumber.length == 10 ) {
//         for (var i=0; i<arrayNumber.length; i++ ) {
//             if ( i==3 || i==6){
//                 strOne=strOne.concat("-"+arrayNumber[i]);
//             }
//             else {
//                 strOne=strOne.concat(arrayNumber[i]);
//             }
//         }
//     }

//     if (arrayNumber.length ==9 ) {
//        for (j=0 ; j<arrayNumber.length; j++){
//            if (j==2 || j==5){
//             strOne=strOne.concat("-"+arrayNumber[j]);
//            }
//            else {
//             strOne=strOne.concat(arrayNumber[j]);
//         }

//     }
// }
// return(strOne)
// }
// var newArray=[1,2,3,4,5,6,7,8,9];

// var x=numbersOfUser(newArray);
// console.log(x);

//=========================================================================================================/
// שאלה שלישית :

// לא מובן

// var newArray=[1,5,2,3,1,5,7] 
// var j=newArray.length-1;

// function getArr(newArray=[]) {
//     for (var i=0;i<newArray.length;i++){
//         if (newArray[i]==newArray[j]){
//             console.log(`${newArray[i]}`);
//         }
//     }
    
// }


//=========================================================================================================/

// שאלה רביעית:

// var sum = 1;
// var x = 4;

// function factoNum(x) {
//   for (var i = 1; i <= x; i++) {
//     sum = i * sum;
//   }
//   return(sum);
// }

// var y = factoNum(6);
// console.log(y);
