/**
 * Created by ste on 06/07/17.
 */

class Zoom {

    constructor() {

        this.bindEvents();
        this.toggle = $('.product-gallery .zoom-toggle');
        this.overlay = $('.overlay-zoom');
        this.modal = $('.modal-image-zoom');
        this.modalContent = $('.modal-image-zoom .content');
        this.modalLoading = $('.modal-image-zoom .loading');
        this.modalClose = $('.modal-image-zoom .modal-close');
        this.clonedThumb = $('.cloned-thumb');
        this.displayThumb = false;

        let {getScreenHeight, getImageHeight, centerScreen, centerPosImage, moveImage, animation, clonedImages} = '';

    }

    bindEvents() {

        this.toggle.on('click', e => {

            const zoomItem = $(e.currentTarget).attr('data-zoom');
            const dataCounter = $(e.currentTarget).attr('data-counter');

            this._fullscreenImageZoom(zoomItem, dataCounter);

            if(this.displayThumb) {
                this._createThumb(dataCounter);
            }

        });
    }

    _fullscreenImageZoom(zoomItem){

        const zoomHeight = $(window).height();

        this.modal.css({ 'top':0, 'height': zoomHeight });
        this.modalLoading.show();
        this.modalContent.find('img').attr('src', '');
        this.modalContent.find('img').hide();

        $('<img src="'+ zoomItem +'">').load( e => {
            if(e.currentTarget.complete){

                this.modalLoading.hide();
                this.modalContent.find('img').attr('src', zoomItem);
                this.modalContent.find('img').fadeIn("slow");
                this.overlay.fadeIn("slow");

                this._ceateZoom();

            }
        });

    }

    _createThumb(dataCounter){

        this.clonedThumb.find('img').off('click');
        this.clonedThumb.empty();

        $( ".picture-image" ).not('.slick-cloned').find('img').each(( i, e ) => {

            this.clonedImages = $(e.currentTarget).clone();
            this.clonedThumb.append(this.clonedImages);

        });

        this.clonedThumb.find('img[data-counter='+dataCounter+']').addClass("selected");

        this.clonedThumb.find('img').on('click', e => {
            this.modalContent.find('img').attr('src', e.currentTarget.dataset.zoom);
            $(e.currentTarget).addClass('selected').siblings().removeClass('selected');
        });

    }

    _ceateZoom(){
        this.zoomHandler = (e) => {
            this.getImageHeight = $(e.currentTarget).height();
            this.getScreenHeight = ($(window).height());
            this.centerScreen = this.getScreenHeight / 2;
            const y = e.currentTarget.modal.offset();
            this.centerPosImage = (this.getImageHeight - this.getScreenHeight) / 2;
            this.moveImage = (- this.centerPosImage * (e.pageY - y.top )) / this.centerScreen;
            this.moveImage = parseInt(this.moveImage);

            if ( typeof this.animation !== 'undefined'){
                this.animation.pause();
            }
            if ( this.moveImage < 0 ){
                this.animation = TweenMax.to($(e.currentTarget), 0.7, {y:this.moveImage, transformOrigin:'0% 0%'});
            }else{
                this.animation = TweenMax.to($(e.currentTarget), 0.7, {y:this.moveImage, transformOrigin:'0% 100%'});
            }
        };

        this.mouseMove = e => {
            getImageHeight = $(e.currentTarget).height();
            getScreenHeight = $(window).height();
            centerScreen = getScreenHeight / 2;
            const y = e.currentTarget.modal.offset();
            centerPosImage = (getImageHeight - getScreenHeight) / 2;
            moveImage = (-centerPosImage * e.originalEvent.touches[0].pageY) / centerScreen;
            $(e.currentTarget).css('margin-top', moveImage+'px');
            e.preventDefault();

            getImageWidth = $(e.currentTarget).width();
            getScreenWidth = $(window).width();
            centerScreenWidth = getScreenWidth / 2;
            const x = e.currentTarget.modal.offset();
            centerPosImageX = (getImageWidth - getScreenWidth) / 2;
            moveImageX = (-centerPosImageX * e.originalEvent.touches[0].pageX) / centerScreenWidth;
            $(e.currentTarget).css('margin-left', moveImageX+'px');
            e.preventDefault();

        };

        this.modalContent.find('img').on({
            mousemove: this.zoomHandler,
            touchmove : this.mouseMove,
            click: e => {

                this.modalClose.click();

            }
        });

    }

}