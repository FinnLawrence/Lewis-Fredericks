$(document).ready(function() {
    clipHero();
    pushBrand();
    
    // SMOOTH SCROLL
    $('a[href^=#]').click(function(){
        if ($.attr(this, 'href') === "#" || $(this).hasClass("btn-tabpanel")) {
            return true; // Allows the tabbed panes to work
        } else {
            // Close mobile nav if it's open
            //if ($(this).closest('.navbar-collapse').hasClass("in")) {
            //    $(this).closest('.navbar-collapse').removeClass("in");
            //}
            var current = $(window).scrollTop();
            var target = $( $.attr(this, 'href') ).offset().top;
            var duration = Math.abs(target - current);
            $('html, body').animate({
                scrollTop: target
            }, duration);
            return false;
        }
    });
});

$(window).scroll(function() {
    clipHero();
    pushBrand();
});

$(window).resize(function() {
    clipHero();
    pushBrand();
});

function clipHero() {
    var heroImage = $('#hero-light .center-image');
    var top = heroImage.offset().top;
    var bottom = top + heroImage.height();
    var height = heroImage.height();
    var width = heroImage.width();
    
    var greySectionTop = $('#hero-dark').offset().top;
    
    if (greySectionTop < top) {
        heroImage.css("opacity", "0");
    } else if (greySectionTop < bottom) {
        var clipAmount = height - bottom + greySectionTop;
        var clipString = "rect(0px, " + width + "px, " + clipAmount + "px, 0px)"
        heroImage.css("opacity", "1");
        heroImage.css("clip", clipString);
    } else {
        var clipString = "rect(0px, " + width + "px, " + height + "px, 0px)"
        heroImage.css("opacity", "1");
        heroImage.css("clip", clipString);
    }
}

function pushBrand() {
    var brand = $('#brand-wrapper');
    var brandTop = brand.offset().top;
    var brandBottom = brandTop + brand.height();
    var top = $('#brand-top').offset().top;
    var bottom = $('#brand-bottom').offset().top;
    
    var heroDark = $('#hero-dark .center-image');
    
    var pushBrand = $('#content').offset().top;
    
    var scroll = $(window).scrollTop();
    
    if (pushBrand < top) {
        brand.css("position", "fixed");
        brand.css("top", top - scroll + "px");
    } else if (pushBrand < bottom) {
        brand.css("position", "absolute");
        brand.css("top", "0px");
    } else {
        brand.css("position", "fixed");
        brand.css("top", bottom - scroll + "px");
    }
}