let magiciansName : string[] = ["CRISS ANGEL","DYNAMO","DAVID BROWN","TOMMY COOPER"]
// assignment # 41
console.log("=======Magicians Name=======")
console.log("============================")
show_Magicians(magiciansName)

function show_Magicians(Magicians:string[]){
for(let i = 0; i< Magicians.length; i++){
    console.log(Magicians[i])
}
}

//assignment # 42


function make_great(Magicians:string[]): string[] {
    for(let i = 0; i< Magicians.length;i++){
       Magicians[i] = "The Great " + Magicians[i]
    }
    return Magicians
}

// Assignment #43

let greatMagicians: string[] = make_great([...magiciansName])

console.log("\n\n ======== Original list of Magicians========")
show_Magicians(magiciansName)


console.log("\n\n ========list of Great Magicians========")
show_Magicians(greatMagicians)