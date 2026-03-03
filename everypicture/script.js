(function () {
    'use strict';
    console.log("reading js");

    console.log(document.querySelector('#sq1'));
    
    document.querySelector('#sq1').addEventListener('pointerenter', function(){
        document.querySelector('#sq1-image').className = "active-photo";
        document.querySelector('.active-text').className ="hidden-text";
        document.querySelector('#sq1-text').className = 'active-text'
        console.log('over sq1');
    })

    document.querySelector('#sq1').addEventListener('pointerleave', function(){
        document.querySelector('#sq1-image').className = "hidden-photo";
        document.querySelector('#original-text').className ="active-text";
        document.querySelector('#sq1-text').className = 'hidden-text'
        console.log('leaving sq1');
    })

    document.querySelector('#sq2').addEventListener('pointerenter', function(){
        document.querySelector('#sq2-image').className = "active-photo";
        document.querySelector('.active-text').className ="hidden-text";
        document.querySelector('#sq2-text').className = 'active-text'
        console.log('over sq2');
    })

    document.querySelector('#sq2').addEventListener('pointerleave', function(){
        document.querySelector('#sq2-image').className = "hidden-photo";
        document.querySelector('#original-text').className ="active-text";
        document.querySelector('#sq2-text').className = 'hidden-text'
        console.log('leaving sq2');
    })

    document.querySelector('#sq3').addEventListener('pointerenter', function(){
        document.querySelector('#sq3-image').className = "active-photo";
        document.querySelector('.active-text').className ="hidden-text";
        document.querySelector('#sq3-text').className = 'active-text'
        console.log('over sq3');
    })

    document.querySelector('#sq3').addEventListener('pointerleave', function(){
        document.querySelector('#sq3-image').className = "hidden-photo";
        document.querySelector('#original-text').className ="active-text";
        document.querySelector('#sq3-text').className = 'hidden-text'
        console.log('leaving sq3');
    })

    document.querySelector('#sq4').addEventListener('pointerenter', function(){
        document.querySelector('#sq4-image').className = "active-photo";
        document.querySelector('.active-text').className ="hidden-text";
        document.querySelector('#sq4-text').className = 'active-text'
        console.log('over sq4');
    })

    document.querySelector('#sq4').addEventListener('pointerleave', function(){
        document.querySelector('#sq4-image').className = "hidden-photo";
        document.querySelector('#original-text').className ="active-text";
        document.querySelector('#sq4-text').className = 'hidden-text'
        console.log('leaving sq4');
    })
})();