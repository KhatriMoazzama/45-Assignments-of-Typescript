var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magiciansName = ["CRISS ANGEL", "DYNAMO", "DAVID BROWN", "TOMMY COOPER"];
// assignment # 41
console.log("=======Magicians Name=======");
console.log("============================");
show_Magicians(magiciansName);
function show_Magicians(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
//assignment # 42
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = "The Great " + Magicians[i];
    }
    return Magicians;
}
// Assignment #43
var greatMagicians = make_great(__spreadArray([], magiciansName, true));
console.log("\n\n ======== Original list of Magicians========");
show_Magicians(magiciansName);
console.log("\n\n ========list of Great Magicians========");
show_Magicians(greatMagicians);
