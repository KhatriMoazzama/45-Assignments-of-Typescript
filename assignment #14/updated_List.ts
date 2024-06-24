let Guest_List:string[]=["Kamran Tessori ","Daniyal Nagori ","M.Zia Khan "]
let Message = "Sending you a heartiest invitation to join this dinner party \n your presence is all that's needed to make this party a memorable one\n\n"
//removing element
let Remove_element= 1
let removed_list = Guest_List.splice(1,Remove_element)
//printing removed element
console.log(removed_list)
//inviting another guest in array
Guest_List.push("Ameen Alam")
for(var i = 0; i < Guest_List.length ; i++){
    
        console.log(`${Guest_List[i]}${Message}`)
    }