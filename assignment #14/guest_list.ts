let guest_List:string[]=["Kamran Tessori ","Daniyal Nagori ","M.Zia Khan "]
let message = "Sending you a heartiest invitation to join this dinner party \n your presence is all that's needed to make this party a memorable one\n\n"
for(var i = 0; i < guest_List.length ; i++){
    console.log(`${guest_List[i]}${message}`)
}