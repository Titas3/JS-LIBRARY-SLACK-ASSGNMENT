/*Write a function to compute the cube root of the given number

        i)     *
             ***
            *****
           *******
          *********

       ii)       1
                222
               33333
              4444444
             555555555


        iii)      1
                 212
                32123
               4321234
              543212345

*/

/*
let rows = 5;
let str ;
for (let i = 1; i <= rows; i++) {
    str = "";
  // printing spaces
  for (let j = 1; j <= (rows - i); j++) {
    str += " ";
  }
  // printing star
  for (let k = 0; k!=(2*i-1); k++) {
    str += "*";
  }
  console.log(str);

}
*/


/* ii)           1
                222
               33333
              4444444
             555555555    */


/*
 let rows = 5;
let str ;
for (let i = 1; i <= rows; i++) {
    str = "";
  // printing spaces
  for (let j = 1; j <= (rows - i); j++) {
    str += " ";
  }
  // printing star
  for (let k = 0; k!=(2*i-1); k++) {
    str += i;
  }
  console.log(str);

}
*/

 /*   iii)        1
                 212
                32123
               4321234
              543212345   */


              let rows = 5,val,col;
              let str ;
              for (let i = 1; i <= rows; i++) {
                  str = "";
                  val = i;
                  col = 2*i-1;
                // printing spaces
                for (let j = 1; j <= (rows - i); j++) {
                  str += " ";
                }
                // printing star
                for (let k = 0; k!=(2*i-1); k++) {
                  str += val;
                  if(k<col/2-1)
                  {
                    val --;
                  }
                  else{
                    val++;
                  }
                }
                console.log(str);
              
              }