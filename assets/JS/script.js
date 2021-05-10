$(function(){
    //smooth scrolling
    
    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var smooth = this.hash;

            $("html, body").animate({
                scrollTop: $(smooth).offset().top
            }, 800, function(){
                window.location.hash = smooth;
            });
        }
});