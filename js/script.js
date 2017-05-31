$(window).load(function() {
    
    

    var w = $( window ).width();
    var h = $( window ).height();
    
        
    
    function animate_1() {
        var x = 200;
        var rndX = Math.random()*500+x;       

        $("#streak_1").transition({ x: rndX, y:  -100},10,'linear');
        $("#streak_1").transition({ opacity: 1},10,'linear');

        $("#streak_1").transition({ x: -1*(h+rndX), y:  (h+rndX+100)},3000,'linear');      
    }
    setInterval(animate_1, 200);
    
    
    function animate_2() {
        var x = 400;
        var rndX = Math.random()*800+x;       

        $("#streak_2").transition({ x: rndX, y:  -100},10,'linear');
        $("#streak_2").transition({ opacity: 1},10,'linear');
        $("#streak_2").transition({ x: -1*(h+rndX), y:  (h+rndX+100)},4000,'linear');      
    }
    setInterval(animate_2, 500);

    
    
    function animate_3() {
        var x = 600;
        var rndX = Math.random()*w+x;       

        $("#streak_3").transition({ x: rndX, y:  -100},10,'linear');
        $("#streak_3").transition({ opacity: 1},10,'linear');
        $("#streak_3").transition({ x: -1*(h+rndX), y:  (h+rndX+100), delay:200},5000,'linear');      
    }
    setInterval(animate_3, 600);
    

    
    function animateOverlay(){
        $(".text").css( {y:-2+"%"});
        $("#moonSVG").css( {y:0});
        $("#button").css( {y:20+"%"});
        $("#cloudsSVG").css( {y:12+"%"});
        $("#darken").css( {opacity:1});
        $("#splashScreenSVG").css( {scale:1.3});
        
        $("#splashScreenSVG").transition({ scale:1},3000,'easeOutCubic');
        $("#darken").transition({ opacity: 0},3000,'ease');
        $("#cloudsSVG").transition({ y:8+"%"},3000,'easeOutCubic');
        $(".text").transition({ y:10+"%"},3000,'easeOutCubic');
        $("#button").transition({ y:10+"%"},3000,'easeOutCubic');
        $("#moonSVG").transition({ y:5+ "%"},3000,'easeOutCubic');
    }
    animateOverlay();
    

    
           

});