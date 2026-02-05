(function(){
    'use strict';
    console.log("reading.js");
    const myform = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

        myform.addEventListener('submit', function(event){
        event.preventDefault();

        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const vehicle = document.querySelector('#vehicle').value;
        const animal = document.querySelector('#animal').value;


        let myText;

        if (noun1 == ''){
            myText = 'Please provide a noun';
            document.querySelector('#noun1').focus();
        } else if (noun2 == '') {
            myText ='Please provide a noun';
            document.querySelector('#noun2').focus();
        } else if (adj == '') {
            myText ='Please provide a adjective';
            document.querySelector('#adj').focus();
        } else if (noun3 == '') {
            myText ='Please provide a noun';
            document.querySelector('#noun3').focus();
        } else if (verb == '') {
            myText ='Please provide a verb';
            document.querySelector('#verb').focus();
        } else if (vehicle == '') {
            myText ='Please provide a vehicle noun';
            document.querySelector('#vehicle').focus();
        } else if (animal == '') {
            myText ='Please provide a animal noun';
            document.querySelector('#animal').focus();
        }else {
            myText = `I have a ${noun1}.<br>
            I do not ${verb} it in the ${noun2}. <br>
            I do not ${verb} it on a ${noun3}.<br>
            I do not like this ${adj} thing.<br>
            I do not like the ${noun1} it brings.<br>
            I will not ${verb} it to the ${noun2}.<br>
            I will not ${verb} it in the ${noun3}.<br>
            I would not ${verb} it on a ${vehicle}.<br>
            I will not ${verb} it with a ${animal}.<br>
            I will not ${verb} it here or there.<br>
            I will not ${verb} it anywhere.`;

            const textFields = document.querySelectorAll
            ('input[type=text]');

            for(let i = 0; i < textFields.length; i++) {
                textFields[i].value ='';
            }

        }

        madlib.innerHTML = myText;
    } );
})()