var num = Number(prompt("Enter the number"));
var newnum;
if (10000000<=num&&num<=99999999)
{
    newnum=parseInt(num%10000000);
    newnum=parseInt(newnum/10);
    console.log(newnum);
}
else
{
    console.log ("Enter the number again");
}