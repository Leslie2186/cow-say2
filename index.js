const cowsay = require("cowsay");
const person = require('./information');



console.log(cowsay.say({
    text : `Hello i'm ${person.name} from campus ${person.campus}`,
    e : "oO",
    T : "U "
}));