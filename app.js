
function jenkTest(){
    return("helloWorld");
}

function jenkSuccTest(x){
    return(x+1);
}

module.exports.jenkTest     = jenkTest;
module.exports.jenkSuccTest = jenkSuccTest;