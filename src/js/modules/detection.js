import 'jquery'

const Detection = {
    
    _target: jQuery('body'),
    _mediaQueries: ['mobile', 'desktop', 'xs', 'sm', 'md', 'lg', 'xl'],

    isTouchDevice: () => {
        return (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        );
    },
    testClass: classToTest => {
        return Detection._target.hasClass( classToTest );
    },
    isIosDevice: () => {
        return (navigator.userAgent.match(/iPhone|iPad|iPod/i));
    },
    isOsx: () => {
        return (navigator.userAgent.match(/OS X/i));
    },
    isAWRMA: () => {
        return Detection.testClass("aw-rma");
    },
    isAWRMAGUEST: () => {
        return Detection.testClass("awrma-guest");
    },
    isFirefox: () => {
        return navigator.userAgent.match(/Firefox/i)
    },
    isMobileDevice: () => {
        return (navigator.userAgent.match(/Mobile/i));
    },
    isHome: () => {
        return Detection.testClass('cms-index-index');
    },
    isListing: () => {
        return Detection.testClass('catalog-category-view');
    },
    isLogged: () => {
        return Detection.testClass('logged');
    },
    isProductView: () => {
        return Detection.testClass('catalog-product-view');
    },
    isCheckout: () => {
        return Detection.testClass('checkout-cart-index') || Detection.testClass('onestepcheckout-index-index');
    },
    isSearch: () => {
        return Detection.testClass('catalogsearch-result-index');
    },
    isCorporate: () => {
        return Detection.testClass('corporate-page');
    },
    isBoutique: () => {
        return Detection.testClass('boutique-page');
    },
    isJournal: () => {
        return Detection.testClass('journal-page');
    },
    isMyAccount: () => {
        return Detection.testClass('all-account-pages');
    },
    isLookSection: () => {
        return Detection.testClass("look-section");
    },
    isCmsPages: () => {
        return Detection.testClass("cms-page-view");
    },
    isHDPI: () => {
        return Detection._mM && Detection._mM.matches
    },
    isIPadPro: () => {
        return (Detection._mM && Detection._mM.matches) && (window.innerWidth > 1023) && navigator.userAgent.match(/iPad/i)
    },
    isInBreakpoint: breakpoint => {
        return ( ~$.inArray( breakpoint, Detection._mediaQueries ) ) && Detection._testBreakpoint( breakpoint );
    },
    _testBreakpoint: breakpoint => {
        return $('#breakpoint-tester').find('[data-breakpoint-test="'+ breakpoint +'"]').is(':visible');
    },
    print: () => {
    window.print()
    },

}

export default Detection