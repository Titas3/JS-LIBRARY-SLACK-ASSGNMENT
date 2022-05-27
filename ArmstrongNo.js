/*3. Create a program to check if a number is an armstrong or not. A number can be considered an Armstrong is the sum of the cube of its digit is equal to the number.

Input: 1634
Output: Is an armstrong number
*/
//1635
let num = 153;
let res = 0,rem;
let temp = num;
while(temp>0){
    rem = temp%10;
    res +=rem*rem*rem;
    temp = parseInt(temp/10);
    console.log(rem + "  " + res + "  " + temp);
}
if(num == res){
    console.log("Armstronng number");
}
else{
    console.log("Not a Armstrong number");
}