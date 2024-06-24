// assignment # 36
// function for printing size and text on t_shirt
function make_shirt(size, text) {
    console.log("The size you selected is ", size, "and the text that to be printed is \"", text, "\"");
}
//function calling
make_shirt("small", "Dream, Plan and Execute");
//assignment # 37
// function for large and medium t-shirt with default message 
// and other size with different message
function make_shirt_editted(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love Typescript"; }
    console.log("The size you selected is ", size, "and the text that to be printed is \"", text, "\"");
}
// function calling with default message
make_shirt_editted();
// function calling for medium with default message
make_shirt_editted("Medium");
// function calling by different size and message
make_shirt_editted("small", "I love javascript");
