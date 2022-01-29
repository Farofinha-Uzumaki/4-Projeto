function ev(nameFunction, callback) {
    var rir = {
        light: false,
        verdeBack: true,
        cpuSpeed: true,
    };
    var chorar = {
        triste: true,
        felicidade: false,
        amor: true,
        salavo: "?",
        amor() {
        console.log("atsagyuhsnamk");
        }
    };
    switch (nameFunction) {
        case "rir":
            callback(rir);break;
        case "chorar":
            callback(chorar);break;
        default:
            console.log("Esse objeto não existe.");
    }

}
ev("chorar", function(e) {
    e.amor();

});
