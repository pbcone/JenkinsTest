
function jenkTest(){
    return("hello World");
}

function jenkSuccTest(x){
    return(x+1);
}

module.exports.jenkTest     = jenkTest;
module.exports.jenkSuccTest = jenkSuccTest;