const output = document.querySelector("pre");

var math = {
    "plus" : "2 + 2",
    "subtract": " 2 - 2"
}

// output.innerText = math.plus.length;
var i = 0;

function read()
{
    if(i < math.plus.length - 1){
        setTimeout(() => 
            {
                output.innerText += math.plus[i];
                read();
                i++;
            }
        , 200);
    }
}

read();