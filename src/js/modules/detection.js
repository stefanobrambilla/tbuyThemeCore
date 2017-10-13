import $ from '../vendor/jquery/jquery-3.2.1.min'

const Detection = (() => {

    isTouchDevice(() => {
        return (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        );
    });
    testClass((classToTest) => {
        return this._target.hasClass( classToTest );
    });
    isIosDevice(() => {
        return (navigator.userAgent.match(/iPhone|iPad|iPod/i));
    });
    isOsx(() => {
        return (navigator.userAgent.match(/OS X/i));
    });
    isAWRMA(() => {
        return this.testClass("aw-rma");
    });
    isAWRMAGUEST(() => {
        return this.testClass("awrma-guest");
    });
    isFirefox(() => {
        return navigator.userAgent.match(/Firefox/i)
    });
    isMobileDevice(() => {
        return (navigator.userAgent.match(/Mobile/i));
    });
    isHome(() => {
        return this.testClass('cms-index-index');
    });
    isListing(() => {
        return this.testClass('catalog-category-view');
    });
    isLogged(() => {
        return this.testClass('logged');
    });
    isProductView(() => {
        return this.testClass('catalog-product-view');
    });
    isCheckout(() => {
        return this.testClass('checkout-cart-index') || this.testClass('onestepcheckout-index-index');
    });
    isSearch(() => {
        return this.testClass('catalogsearch-result-index');
    });
    isCorporate(() => {
        return this.testClass('corporate-page');
    });
    isBoutique(() => {
        return this.testClass('boutique-page');
    });
    isJournal(() => {
        return this.testClass('journal-page');
    });
    isMyAccount(() => {
        return this.testClass('all-account-pages');
    });
    isLookSection(() => {
        return this.testClass("look-section");
    });
    isCmsPages(() => {
        return this.testClass("cms-page-view");
    });
    isHDPI(() => {
        return this._mM && this._mM.matches
    });
    isIPadPro(() => {
        return (this._mM && this._mM.matches) && (window.innerWidth > 1023) && navigator.userAgent.match(/iPad/i)
    });
    isInBreakpoint(( breakpoint ) => {
        return ( ~$.inArray( breakpoint, this._mediaQueries ) ) && this._testBreakpoint( breakpoint );
    });
    _testBreakpoint(( breakpoint ) => {
        return $('#breakpoint-tester').find('[data-breakpoint-test="'+ breakpoint +'"]').is(':visible');
    });
    print(() => {
    window.print()
    });

});

export default Detection