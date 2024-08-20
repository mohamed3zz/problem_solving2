// function mostDigit(num)
// {
//     num = prompt("enter number")
//     number = num.split("");
//     console.log(number[0]);
    
// }
// mostDigit();
//----------------------------------------------------------------------------
// function arrCount(arr) {
//     arr=[]
//     let x;
//     let length= Number(prompt("enter a length of array"))
//     for( let i=0; i<length; i++)
//     {
//         x= Number(prompt("enter the" + (Number(i)+1) + "element in array"))
//         arr.push(x);
//     }
// console.log(arr);
// let even = 0;
// let positive = 0;
// let negative =0;
// let odd =0;
// for( let i=0; i<length; i++)
// {
    
//     if (arr[i]==0)
//     {
//         even++;
//     }
//     else{
// if (arr[i]%2==0)
// {
//     even++;
// }
// else if (arr[i]%2!==0) {
//     odd++;

// }
// }
// if (arr[i]>0)
// {
//     positive++;
// }
// else if (arr[i]<0)
// {
//     negative++;
// }

// }
// console.log("even =" +" "+ even);
// console.log("odd =" + " "+odd);
// console.log("positive =" + " " +positive);
// console.log("negative =" +" " + negative);
// }
// arrCount();
//---------------------------------------------------------------------------
// function arrCount(arr) {
//     arr=[]
//     let arr1=[];

//     let x;
//     let length= Number(prompt('enter a length of array'))
//     for( let i=0; i<length; i++)
//     {
//         x= Number(prompt('enter the' + (Number(i)+1) + 'element in array'))
//         arr.push(x);
//     }
// console.log(arr);

// for(let i=0; i<length; i++)
// {
// arr1=arr.filter(element => Number.isInteger(element));
// }

// console.log(arr1);

// }

// arrCount();
//----------------------------------------------------------------------------------------------------
// function sliceArray(arr,start,end) {
//     arr=[]
//     let arr1=[]
       
//     let x;
//     let length= Number((prompt("enter a length of array")))
//     for ( let i=0; i<length; i++)
//     {
//         x= prompt("enter the" + (Number(i)+1) + "element in array")
//         arr.push(x);
//     }
// console.log(arr);  
//     // arr.slice(start,end)
//     start=prompt('enter the start index of slice');
//     end=prompt('enter the end index of slice');
//   for (let i=start; i<end; i++)
//   {
// arr1.push(arr[i])
//   }
//   console.log(arr1);
  
// }

// sliceArray();
//-------------------------------------------------------------------------------------------------

// let bigArr=[];
// let large=[];
// function makeArrays()
// {
//     let numOfArrays=prompt('enter number of arrays');
//     for( let i=0; i<numOfArrays; i++)
//     {
//         let arrLength = prompt('enter the length of array' + Number(i+1));
//         let arr = [];
//         for( let j=0; j<arrLength; j++)
//         {
//             arr.push(prompt('enter element' + Number(j+1) +'for array' + Number(i+1)));
//         }
// bigArr.push(arr);
//     }
//     console.log(bigArr);
//     large= bigArr.map(arr => Math.max(...arr));
//     console.log(large);
 
// }


// makeArrays();
//-----------------------------------------------------------------------------------------------------
// function longString(s) {
//     s=prompt("enter the string")
//     if(s.length<=10)
//     {
//         console.log(s);
        
//     }
//     else {
//         s.split("");
//         console.log(s[0] +""+Number(s.length-2)+""+s[s.length-1])
//     }
// }
// longString();
//----------------------------------------------------------------------------------------------------
// function twoChars() {
//     let s=prompt("enter string of 4 letters");
//   if(s.length!=4)
//   {
//     console.log(false);
    
//   }
//   else{
// if ((s[0]===s[1] && s[2]===s[3]) || (s[0]===s[2] && s[1]===s[3]) || s[0]===s[3] && s[1]===s[2] ) 
//     {
// console.log(true);

// }
// else{
//     console.log(false);
    
// }  
        
//     }
//   }
    
    

// twoChars();
//----------------------------------------------------------------------------------------------------
// function xoGame(arr) {
//      arr=[];
     
//     for( let i=0; i<3; i++)
// {
//     for (let j=0; j<3; j++)
//     {
//          arr[i][j]= prompt ('enter the element in row'+Number(i+1)+'and column'+Number(j+1));
//          arr.push(arr[i][j]);
//     }
// }

// console.log(arr);
// }

// xoGame();
//>>>>>>>>>>>>>>>>>>>>>>>not completed<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//------------------------------------------------------------------------------------------------------
// function indexOfChar() {
//     let arr=[];
//     let x;
//     let length= (prompt("enter a length of array"));
//     for ( let i=0; i<length; i++)
//     {
//         x= prompt("enter the" + (Number(i)+1) + "element in array")
//         arr.push(x);
//     }
//     console.log(arr);
//     let char = prompt('enter the character you look for')
//     let firstIndex = arr.indexOf(char) 
//    if(firstIndex=== -1)
//    {
//    console.log("[-1,-1]");
//    }
//    else {
//    let lastIndex =arr.lastIndexOf(char)
//    console.log(firstIndex , lastIndex);
//    }
// }

// indexOfChar();
//---------------------------------------------------------------------------------------------------
