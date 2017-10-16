import 'jquery'


const Utility = {

    imageUnveil: (element, callback) => {

        element.find('img').unveil(200, function () {
            $(this).load(function() {
                element.addClass('loaded');
                if (typeof callback === 'function' ){ callback() }
            });
        });

    },

    setHeight: element => {
        EL.config();
        element.outerHeight(EL.w.height());
    },

    scrollToPoint: pointTag => {

        var pointTag = $(pointTag);
        var headerHeight = $("#header").height();
        $('html,body').stop().animate({scrollTop: (parseInt(pointTag.offset().top) - parseInt(headerHeight)), duration: 'slow', easing: 'easeOutQuart' });

    },

    scrollTop: callback => {

        var animationTime = 400;
        $('html,body').stop().animate({scrollTop: 0} , animationTime);
        if (typeof callback === 'function' ){
            setTimeout(function() {
                callback();
            },animationTime)
        }

    },

    lockScroll: target => {

        ( target || $('body') ).css('overflow', 'hidden');

        if ( PAGE.isIosDevice() && PAGE.isMobileDevice() )
            ( $('html') ).css('overflow', 'hidden');

    },

    unlockScroll: target => {

        ( target || $('body') ).css('overflow', 'auto');
        if ( PAGE.isIosDevice() && PAGE.isMobileDevice() )
            ( $('html') ).removeAttr('style');

    },

    getScrollDirection: event => {
        let scrollDirection;
        if (event.wheelDelta > 0 || event.deltaY === -3){
            scrollDirection = 'up'
        } else {
            scrollDirection = 'down'
        }
        return scrollDirection;

    },


    triggerResize: () => {
        $('window').trigger('resize');
    },

};

export default Utility;