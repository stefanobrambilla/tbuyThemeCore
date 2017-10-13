
const Utility = (() => {

    imageUnveil: function(element, callback) {

        element.find('img').unveil(200, function () {

            jQuery(this).load(function() {

                element.addClass('loaded');
                if (typeof callback === 'function' ){ callback() }

            });

        });

    },

    setHeight: function (element) {

        EL.config();
        element.outerHeight(EL.w.height());

    },

    scrollToPoint: function(pointTag){

        var pointTag = jQuery(pointTag);
        var headerHeight = jQuery("#header").height();

        jQuery('html,body').stop().animate({scrollTop: (parseInt(pointTag.offset().top) - parseInt(headerHeight)), duration: 'slow', easing: 'easeOutQuart' });

    },

    scrollTop: function(callback){

        var animationTime = 400;

        jQuery('html,body').stop().animate({scrollTop: 0} , animationTime);

        if (typeof callback === 'function' ){
            setTimeout(function() {
                callback();
            },animationTime)
        }

    },

    lockScroll: function( target ) {

        ( target || jQuery('body') ).css('overflow', 'hidden');

        if ( PAGE.isIosDevice() && PAGE.isMobileDevice() )
            ( jQuery('html') ).css('overflow', 'hidden');

    },

    unlockScroll: function( target ) {

        ( target || jQuery('body') ).css('overflow', 'auto');

        if ( PAGE.isIosDevice() && PAGE.isMobileDevice() )
            ( jQuery('html') ).removeAttr('style');

    },

    getScrollDirection: function (event) {

        if (event.wheelDelta > 0 || event.deltaY === -3){
            scrollDirection = 'up'
        } else {
            scrollDirection = 'down'
        }
        return scrollDirection;

    },


    triggerResize: function () {
        jQuery('window').trigger('resize');
    },

});