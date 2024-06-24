var guest_List = ["Kamran Tessori ", "Daniyal Nagori ", "M.Zia Khan "];
var message = "Sending you a heartiest invitation to join this dinner party \n your presence is all that's needed to make this party a memorable one\n\n";
for (var i = 0; i < guest_List.length; i++) {
    console.log("".concat(guest_List[i]).concat(message));
}
