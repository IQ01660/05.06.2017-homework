var af = Number(prompt("Enter af"));
var bf = Number(prompt("Enter bf"));
var as = Number(prompt("Enter as"));
var bs = Number(prompt("Enter bs"));
var at = Number(prompt("Enter at"));
var bt = Number(prompt("Enter bt"));
var k = Number(prompt("Enter k"));
var w = Number(prompt("Enter w"));

if (af >= k && bf >= w) {
    console.log("Yes");
}
else if (as >= k && bs >= w) {
    console.log("Yes");
}
else if (at >= k && bt >= w) {
    console.log("Yes");
}
else {
    console.log("No");
}