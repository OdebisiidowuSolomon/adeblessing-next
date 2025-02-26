/* eslint-disable @next/next/no-sync-scripts */
import { Metadata } from 'next';
import React from 'react';


// import '@/assets/'

import "@/public/assets/css/style.min.css";
import "@/public/assets/css/gutenberg-blocks.css";
import "@/public/assets/css/styles.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/header-footer-elementor.css";
import "@/public/assets/css/elementor-icons.min.css";
import "@/public/assets/css/custom-frontend.min.css";
import "@/public/assets/css/swiper.min.css";
import "@/public/assets/css/post-6.css";
import "@/public/assets/css/global.css";
import "@/public/assets/css/post-22.css";
import "@/public/assets/css/frontend.css";
import "@/public/assets/css/post-1570.css";
import "@/public/assets/css/post-39.css";
import "@/public/assets/css/css2.css";
import "@/public/assets/css/icons.css";
import "@/public/assets/css/style_2.css";
import "@/public/assets/css/post-1591.css";
import "@/public/assets/css/elementor.css";
import "@/public/assets/css/style_1.css";
import "@/public/assets/css/css.css";
import "@/public/assets/css/fontawesome.min.css";
import "@/public/assets/css/solid.min.css";
import "@/public/assets/css/brands.min.css";
import "@/public/assets/css/custom.css";
import "@/public/assets/css/custom-about.css";
import "@/public/assets/css/magnific-popup.css";
import "@/public/assets/css/animations.min.css";
import "@/public/assets/css/rs6.css";
import "@/public/assets/css/post-3977.css";


import Script from 'next/script';
import CanvasInfoRight from '../_components/CanvasInfoRight';
import SiteSearchPopUp from '../_components/SiteSearchPopUp';
import BeautiflyMobileNav from '../_components/BeautiflyMobileNav';
import PublicHeader from '../_components/PublicHeader';
import PublicFooter from '../_components/PublicFooter';
import PublicBreadCrumb from '../_components/PublicBreadCrumb';






export const metadata: Metadata = {
    title: "Service Page",
    description: "Ade Blessing Salon - Premier Beauty Salon Services in Edinburgh &amp; Aberdeen ",
};


function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <head>
                <script async src="/assets/js/jquery.min.js" id="jquery-core-js"></script>
                <script async src="/assets/js/jquery-migrate.min.js" id="jquery-migrate-js"></script>
                <script async src="/assets/js/jarallax.js" id="jarallax-js"></script>

                <script>
                    {`function setREVStartSize(e) {
                    //window.requestAnimationFrame(function() {
                    window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
                    window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
                    try {
                var pw = document.getElementById(e.c).parentNode.offsetWidth,
                    newh;
                    pw = pw === 0 || isNaN(pw) || (e.l == "fullwidth" || e.layout == "fullwidth") ? window.RSIW : pw;
                    e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
                    e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
                    e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
                    e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
                    e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
                    e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
                    e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
                    if (e.layout === "fullscreen" || e.l === "fullscreen")
                    newh = Math.max(e.mh, window.RSIH);
                    else {
                        e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
                    for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
                    e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
                    e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
                    for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

                    var nl = new Array(e.rl.length),
                    ix = 0,
                    sl;
                    e.tabw = e.tabhide >= pw ? 0 : e.tabw;
                    e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
                    e.tabh = e.tabhide >= pw ? 0 : e.tabh;
                    e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
                    for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
                    sl = nl[0];
                    for (var i in nl) if (sl > nl[i] && nl[i] > 0) {sl = nl[i]; ix = i; }
                    var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
                    newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
                }
                    var el = document.getElementById(e.c);
                    if (el !== null && el) el.style.height = newh + "px";
                    el = document.getElementById(e.c + "_wrapper");
                    if (el !== null && el) {
                        el.style.height = newh + "px";
                    el.style.display = "block";
                }
            } catch (e) {
                        console.log("Failure at Presize of Slider:" + e)
                    }
            //});
        };`}
                </script>
            </head>
            <body
                className={`page-template-default page page-id-13 wp-custom-logo wp-embed-responsive ehf-header ehf-footer ehf-template-beautifly ehf-stylesheet-demo-child no-wc-breadcrumb elementor-default elementor-kit-6 elementor-page elementor-page-13`}
            >
                <div id="page" className="hfeed site">
                    <PublicHeader />
                    <PublicBreadCrumb title='Our Services' />
                    {children}
                    <PublicFooter />
                </div>

                {/* Page */}
                {/* Mobile nav */}
                {/* popup */}
                {/* canvas info right */}

                <BeautiflyMobileNav />
                <div className="beautifly-overlay"></div>
                <script>
                    {`window.RS_MODULES = window.RS_MODULES || {};
        window.RS_MODULES.modules = window.RS_MODULES.modules || {};
        window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
        window.RS_MODULES.defered = true;
        window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
        window.RS_MODULES.type = 'compiled';`}
                </script>
                <SiteSearchPopUp />
                <div className="site-search-popup-overlay"></div>
                <script>
                    {`(function () {
            function maybePrefixUrlField() {
                const value = this.value.trim()
                if (value !== '' && value.indexOf('http') !== 0) {
                    this.value = 'http://' + value
                }
            }

            const urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]')
            for (let j = 0; j < urlFields.length; j++) {
                urlFields[j].addEventListener('blur', maybePrefixUrlField)
            }
        })();`}
                </script><a href="#" className="scrollup"><span className="scrollup-icon beautifly-icon-long-arrow-up"></span><span className="scrollup-label">Top</span></a>


                <CanvasInfoRight />
                <div className="beautifly-info-overlay"></div>



                <>
                    <Script data-cfasync="false" src="/assets/js/email-decode.min.js"></Script>
                    <Script src="/assets/js/index_1.js" id="swv-js"></Script>
                    <Script id="contact-form-7-js-extra">
                        {` var wpcf7 = { "api": { "root": "https:\/\/demo2.pavothemes.com\/beautifly\/wp-json\/", "namespace": "contact-form-7\/v1" } };`}
                    </Script>
                    <Script src="/assets/js/index.js" id="contact-form-7-js"></Script>
                    <Script src="/assets/js/rbtools.min.js" defer async id="tp-tools-js"></Script>
                    <Script src="/assets/js/rs6.min.js" defer async id="revmin-js"></Script>
                    <Script src="/assets/js/jquery.sticky-kit.min.js" id="sticky-kit-js"></Script>
                    <Script src="/assets/js/underscore.min.js" id="underscore-js"></Script>
                    <Script id="wp-util-js-extra">
                        {`var _wpUtilSettings = { "ajax": { "url": "\/beautifly\/wp-admin\/admin-ajax.php" } };`}
                    </Script>
                    <Script src="/assets/js/wp-util.min.js" id="wp-util-js"></Script>
                    <Script src="/assets/js/swiper.js" id="swiper-js"></Script>
                    <Script id="beautifly-theme-js-extra">
                        {`var beautiflyAjax = { "ajaxurl": "https:\/\/demo2.pavothemes.com\/beautifly\/wp-admin\/admin-ajax.php" };`}
                    </Script>
                    <Script src="/assets/js/main.js" id="beautifly-theme-js"></Script>
                    <Script src="/assets/js/imagesloaded.min.js" id="imagesloaded-js"></Script>
                    <Script src="/assets/js/skip-link-focus-fix.min.js" id="beautifly-skip-link-focus-fix-js"></Script>
                    <Script src="/assets/js/search-popup.js" id="beautifly-search-popup-js"></Script>
                    <Script src="/assets/js/text-editor.js" id="beautifly-text-editor-js"></Script>
                    <Script src="/assets/js/nav-mobile.js" id="beautifly-nav-mobile-js"></Script>
                    <Script src="/assets/js/frontend.js" id="beautifly-megamenu-frontend-js"></Script>
                    <Script src="/assets/js/login.js" id="beautifly-ajax-login-js"></Script>
                    <Script src="/assets/js/jquery-numerator.min.js" id="jquery-numerator-js"></Script>
                    <Script src="/assets/js/webpack.runtime.min.js" id="elementor-webpack-runtime-js"></Script>
                    <Script src="/assets/js/frontend-modules.min.js" id="elementor-frontend-modules-js"></Script>
                    <Script src="/assets/js/waypoints.min.js" id="elementor-waypoints-js"></Script>
                    <Script src="/assets/js/core.min.js" id="jquery-ui-core-js"></Script>
                    <Script id="elementor-frontend-js-before">
                        {`var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": { "shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close", "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right", "a11yCarouselPrevSlideMessage": "Previous slide", "a11yCarouselNextSlideMessage": "Next slide", "a11yCarouselFirstSlideMessage": "This is the first slide", "a11yCarouselLastSlideMessage": "This is the last slide", "a11yCarouselPaginationBulletMessage": "Go to slide" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": { "breakpoints": { "mobile": { "label": "Mobile Portrait", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "Mobile Landscape", "value": 880, "default_value": 880, "direction": "max", "is_enabled": true }, "tablet": { "label": "Tablet Portrait", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "Tablet Landscape", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": true }, "laptop": { "label": "Laptop", "value": 1440, "default_value": 1366, "direction": "max", "is_enabled": true }, "widescreen": { "label": "Widescreen", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } }, "version": "3.15.3", "is_static": false, "experimentalFeatures": { "e_dom_optimization": true, "e_optimized_assets_loading": true, "additional_custom_breakpoints": true, "container": true, "e_swiper_latest": true, "landing-pages": true, "nested-elements": true, "e_global_styleguide": true }, "urls": { "assets": "https:\/\/demo2.pavothemes.com\/beautifly\/wp-content\/plugins\/elementor\/assets\/" }, "swiperClass": "swiper", "settings": { "page": [], "editorPreferences": [] }, "kit": { "active_breakpoints": ["viewport_mobile", "viewport_mobile_extra", "viewport_tablet", "viewport_tablet_extra", "viewport_laptop"], "body_background_background": "classic", "viewport_laptop": 1440, "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": { "id": 15, "title": "About%20Us%202%20%E2%80%93%20Beautifly%20", "excerpt": "", "featuredImage": false } };`}
                    </Script>
                    <Script src="/assets/js/frontend.min.js" id="elementor-frontend-js"></Script>
                    <Script src="/assets/js/team-box.js" id="beautifly-elementor-team-box-js"></Script>
                    <Script src="/assets/js/testimonial.js" id="beautifly-elementor-testimonial-js"></Script>
                    <Script src="/assets/js/brand.js" id="beautifly-elementor-brand-js"></Script>
                    <Script src="/assets/js/jquery.magnific-popup.min.js" id="magnific-popup-js"></Script>
                    <Script defer src="/assets/js/forms.js" id="mc4wp-forms-api-js"></Script>
                    <Script src="/assets/js/elementor-frontend.js" id="beautifly-elementor-frontend-js"></Script>
                    <Script src="/assets/js/jquery-sticky.js" id="elementor-sticky-js"></Script>
                    <Script src="/assets/js/sticky.js" id="beautifly-elementor-sticky-js"></Script>
                    <Script src="/assets/js/isotope.pkgd.min.js" id="isotope-js"></Script>
                    <Script src="/assets/js/masonry.pkgd.min.js" id="masonry-pkgd-js"></Script>
                    <Script src="/assets/js/image-gallery.js" id="beautifly-elementor-image-gallery-js"></Script>


                </>


            </body>
        </html>
    );
}


export default ServicesLayout