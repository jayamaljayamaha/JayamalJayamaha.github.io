
window.onload = function() {
    var javaCirBar = document.getElementById('javaCanvas');
    var cCirBar = document.getElementById('cCanvas');
    var cSharpCirBar = document.getElementById('cSharpCanvas');
    var htmlCirBar = document.getElementById('htmlCanvas');
    var cssCirBar = document.getElementById('cssCanvas');
    var jsCirBar = document.getElementById('jsCanvas');
    var ajaxCirBar = document.getElementById('ajaxCanvas');
    var mySqlCirBar = document.getElementById('mySqlCanvas');
    var mongoDbCirBar = document.getElementById('mongoDbCanvas');
    var phpCirBar = document.getElementById('phpCanvas');
    var nodeJsCirBar = document.getElementById('nodeJsCanvas');
    var bootstrapBar = document.getElementById('bootstrapCanvas');
    var angularBar = document.getElementById('angularCanvas');
    var springCirBar = document.getElementById('springCanvas');
    var chartJsCirBar = document.getElementById('chartJsCanvas');

    var javaImage = document.getElementById('javaLogo');
    var cImage = document.getElementById('cLogo');
    var cSharpImage = document.getElementById('cSharpLogo');
    var htmlImage = document.getElementById('htmlLogo');
    var cssImage = document.getElementById('cssLogo');
    var jsImage = document.getElementById('jsLogo');
    var ajaxImage = document.getElementById('ajaxLogo');
    var mySqlImage = document.getElementById('mySqlLogo');
    var mongoDbImage = document.getElementById('mongoDbLogo');
    var phpImage = document.getElementById('phpLogo');
    var nodeJsImage = document.getElementById('nodeJsLogo');
    var bootstrapImage = document.getElementById('bootstrapLogo');
    var angularImage = document.getElementById('angularLogo');
    var springImage = document.getElementById('springLogo');
    var chartJsImage = document.getElementById('chartJsLogo');


    var progressBars = [javaCirBar,cCirBar,cSharpCirBar,htmlCirBar,cssCirBar,jsCirBar,ajaxCirBar,mySqlCirBar,
        mongoDbCirBar,phpCirBar,nodeJsCirBar,bootstrapBar, angularBar, springCirBar, chartJsCirBar];

    var images = [javaImage,cImage,cSharpImage,htmlImage,cssImage,jsImage,ajaxImage,mySqlImage,mongoDbImage,phpImage,
        nodeJsImage,bootstrapImage, angularImage, springImage, chartJsImage];

    var objects = {
        "metaData":[
            {"X":40,"Y":35,"width":100,"height":100,"angle": Math.PI*11/10},
            {"X":35,"Y":35,"width":110,"height":110,"angle": Math.PI*1/2},
            {"X":40,"Y":40,"width":100,"height":100,"angle": Math.PI*9/10},
            {"X":50,"Y":40,"width":80,"height":100,"angle": Math.PI*11/10},
            {"X":45,"Y":35,"width":90,"height":110,"angle": Math.PI*11/10},
            {"X":45,"Y":35,"width":90,"height":110,"angle": Math.PI*7/10},
            {"X":45,"Y":35,"width":90,"height":110,"angle": Math.PI*1/2},
            {"X":40,"Y":43,"width":100,"height":100,"angle": Math.PI*11/10},
            {"X":35,"Y":45,"width":110,"height":110,"angle": Math.PI*7/10},
            {"X":48,"Y":45,"width":85,"height":100,"angle": Math.PI*7/10},
            {"X":40,"Y":40,"width":100,"height":100,"angle": Math.PI*7/10},
            {"X":40,"Y":40,"width":100,"height":100,"angle": Math.PI*9/10},
            {"X":25,"Y":25,"width":130,"height":130,"angle": Math.PI*9/10},
            {"X":25,"Y":25,"width":130,"height":130,"angle": Math.PI*1/2},
            {"X":25,"Y":25,"width":130,"height":130,"angle": Math.PI*1/2}
        ]
    };


    var i;
    for(i=0; i<progressBars.length; i++){
        var ctxs = progressBars[i].getContext('2d');
        progressBars[i].width=180;
        progressBars[i].height=180;

        ctxs.lineWidth =15;
        ctxs.strokeStyle = ' #c9f9ea ';
        ctxs.beginPath();
        ctxs.arc(90,90,75,Math.PI/2,Math.PI/2*3);
        ctxs.stroke();

        ctxs.lineWidth =15;
        ctxs.strokeStyle = ' #14ba62 ';
        ctxs.beginPath();
        ctxs.arc(90,90,75,Math.PI/2*3,objects.metaData[i].angle);
        ctxs.stroke();

        var Image = images[i];
        ctxs.drawImage(Image, objects.metaData[i].X, objects.metaData[i].Y, objects.metaData[i].width ,objects.metaData[i].height);
    }

    /*
        var mongoDbImage = document.getElementById('mongoDbLogo');
        ctxMongoDb.drawImage(mongoDbImage, 35, 35, 110 ,110);*/
};

$(document).ready(function(){
    var $nav = $('#navBar');

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) { //For dynamic effect use $nav.height() instead of '100'
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });

});



