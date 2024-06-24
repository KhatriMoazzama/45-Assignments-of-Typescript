//1 initialize array with country name
//2 Print your array in its original order.
//3 Print your array in alphabetical order without modifying the actual list.
//4 Show that your array is still in its original order by printing it.
//5 Print your array in reverse alphabetical order without changing the order of the original list.
//6 Show that your array is still in its original order by printing it again.
//7 Reverse the order of your list. Print the array to show that its order has changed.
//8 Reverse the order of your list again. Print the list to show it’s back to its original order.
//9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var countries = ["Pakistan", "India", "Bangladesh", "China", "Turkey", "Malaysia", "Qatar", "England"];
console.log("\n original order \n");
console.log(countries);
console.log("\n sorted array without changing original order \n");
var s_countries = countries.slice().sort();
console.log(s_countries);
console.log("\n original order \n");
console.log(countries);
var r_Countries = countries.slice().sort().reverse();
console.log("\n Array in Reverse order\n", r_Countries);
console.log("\n original order \n");
console.log(countries);
console.log("\n reverse order of list \n");
var r_order = countries.reverse();
console.log(r_order);
console.log("\n again reverse the reverse list \n");
var back_order = r_order.reverse();
console.log(back_order);
console.log("\n Alphabetically sorted list");
var a_sorted_list = countries.sort();
console.log(a_sorted_list);
console.log("\n Reverse alphabetical order \n");
var r_a_list = a_sorted_list.reverse();
console.log(r_a_list);
