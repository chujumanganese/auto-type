const type = document.querySelector(".container pre");

let message = "Google is best known for its search engine, although Google now offers a number of other services.\n\nGoogle's mission is to organise the world's information and make it universally acceptible and usefull. \n\nIt's founders Larry Page and Serie Brin stated that google at stanford university. ";

message = message.split("");
var i = 0; 


function read()
{
    if(i < message.length - 1)
        {
            setTimeout(() => 
                {
                    type.innerText += message[i];
                    read();
                    i++;
                }
            , 150);
    }else {
        return;
    }
    
}

read();
