(function($){"use strict";$(window).on('elementor/frontend/init',()=>{const addHandler=($element)=>{elementorFrontend.elementsHandler.addHandler(beautiflySwiperBase,{$element,});};elementorFrontend.hooks.addAction('frontend/element_ready/beautifly-team-box.default',addHandler);});})(jQuery);