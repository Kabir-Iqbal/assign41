// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array
var magician = ["Ali", "Ahmed", "Sumair", "Shohaib"];
function show_magicians() {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var items = magician_1[_i];
        console.log(items);
    }
}
show_magicians();
