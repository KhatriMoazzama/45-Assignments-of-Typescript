var Guest_List = ["Kamran Tessori ", "Daniyal Nagori ", "M.Zia Khan "];
var Message = "Sending you a heartiest invitation to join this dinner party \n your presence is all that's needed to make this party a memorable one\n\n";
//let index:number = Guest_List[1]
var Remove_element = 1;
var removed_list = Guest_List.splice(1, Remove_element);
console.log(removed_list);
Guest_List.push("Ameen Alam");
for (var i = 0; i < Guest_List.length; i++) {
    console.log("".concat(Guest_List[i]).concat(Message));
}
