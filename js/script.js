// var row;
// var col;
// var MultiArray = [row][col];

// //MultiArray = new Array(5);

// //MultiArray[0] = new Array(5);

// for (var i=0; i<4; i++) {
//     for (var j=0; j<4; j++) {
//         MultiArray[0][0];
//     }
//  }

//  console.log( matrix);


//  var a = [];
// a.push(["1", "2"]);
// a.push(["3", "4"]);
// a.push(["6", "5"]);

// for(var i = 0; i < a[i].length; i++) {
//     for(var z = 0; z < a.length; z++) {
//         console.log(a[z][i]);
//     }
// }
// var items = [[row,1],[row,2],[row,3],[row1,1], [row1,2], [ row1,3] ];
// console.log(JSON.stringify(items));

// var items = [[1,2],[3,4],[5,6]];
// console.table(items);

 var rows = 5;
 var colums = 5;


var myArray1 = new Array(rows);
var myArray2 = new Array(rows);

    for (i=0; i < rows; i++) {
    //for (var j = 0; j < colums; j++) {
            myArray1[i]=new Array(rows);
            myArray2[i]=new Array(rows);
     //   }
    }  
    for(i=0; i < myArray2.length ; i++){
        for (var j = 0; j < colums; j++) {
            // here c
            myArray2[i][j] = getRandomInt();
        }
    }

    console.log(myArray2);
myArray1[0][0] = "1"
myArray1[0][1] = "2"
myArray1[0][2] = "3"

myArray1[1][0] = "4"
myArray1[1][1] = "5"
myArray1[1][2] = "6"

myArray1[2][0] = "7"
myArray1[2][1] = "8"
myArray1[2][2] = "9"

function getRandomInt() {
    var max = 30;
    return Math.floor(Math.random() * Math.floor(max));
  }

for (var i = 0; i < rows; i++) {
    for (var j = 0; j < colums; j++) {
       // myArray1[getRandomInt(10)][getRandomInt(10)];
        document.write(myArray2[i][j] + "&emsp;");
    }
    document.write("<br>");
}

// console.log(myArray1);
