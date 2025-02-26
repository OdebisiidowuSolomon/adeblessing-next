'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function PublicHeader() {

    const pathName = usePathname()

    const isActivePage = (path: string) => pathName === path ? 'current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor' : ''

    return (
        <header id="masthead" itemScope>
            <p className="main-title bhf-hidden" itemProp="headline">
                <a href="#" title="Beautifly " rel="home">Beautifly </a>
            </p>
            <div data-elementor-type="wp-post" data-elementor-id="1570" className="elementor elementor-1570">
                <div className="elementor-element elementor-element-8ef6996 e-con-full e-flex e-con" data-id="8ef6996" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                    <div className="elementor-element elementor-element-5e135f6 e-con-full e-flex e-con" data-id="5e135f6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                        <div className="elementor-element elementor-element-cfe32a3 elementor-widget elementor-widget-site-logo" data-id="cfe32a3" data-element_type="widget" data-widget_type="site-logo.default">
                            <div className="elementor-widget-container">
                                <div className="hfe-site-logo">
                                    <a data-elementor-open-lightbox="" className="elementor-clickable" href="#">
                                        <div className="hfe-site-logo-set">
                                            <div className="hfe-site-logo-container">
                                                <h4 style={{ fontWeight: 'bold', fontSize: "28px", fontFamily: 'Oranienbaum', paddingTop: "20px" }}>
                                                    <Image src="/assets/images/logo_light.png" width={333} height={124} alt='logolight' />
                                                </h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-3792594 e-con-full e-flex e-con" data-id="3792594" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                        <div className="elementor-element elementor-element-7b60750 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-beautifly-nav-menu" data-id="7b60750" data-element_type="widget" data-widget_type="beautifly-nav-menu.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-nav-menu-wrapper">
                                    <nav className="main-navigation" role="navigation" aria-label="Primary Navigation">
                                        <div className="primary-navigation">
                                            <ul id="menu-1-7b60750" className="menu">
                                                <li id="menu-item-109" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home !menu-item-has-children menu-item-109 ${isActivePage('/home')}`}>
                                                    <Link href="/"><span className="menu-title">Home</span></Link>

                                                </li>
                                                <li id="menu-item-121" className={`menu-item menu-item-type-post_type menu-item-object-page !menu-item-has-children menu-item-121 ${isActivePage('/about')} `}>
                                                    <a href="/about"><span className="menu-title">About Us</span></a>

                                                </li>
                                                <li id="menu-item-5157" className={`menu-item menu-item-type-post_type_archive menu-item-object-beautifly_portfolio !menu-item-has-children menu-item-5157 ${isActivePage('/services')} `}>
                                                    <a href="/services"><span className="menu-title">Services</span></a>

                                                </li>

                                                <li id="menu-item-119" className={`menu-item menu-item-type-post_type menu-item-object-page !menu-item-has-children menu-item-119 ${isActivePage('/contact')} `}>
                                                    <a href="/contact"><span className="menu-title">Contacts</span></a>

                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-e63c115 e-transform elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra beautifly-canvas-menu-layout-2 elementor-widget elementor-widget-beautifly-menu-canvas" data-id="e63c115" data-element_type="widget" data-settings="{&quot;_transform_rotateZ_effect_tablet&quot;:{&quot;unit&quot;:&quot;deg&quot;,&quot;size&quot;:180,&quot;sizes&quot;:[]},&quot;_transform_rotateZ_effect_mobile&quot;:{&quot;unit&quot;:&quot;deg&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;_transform_rotateZ_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_rotateZ_effect_laptop&quot;:{&quot;unit&quot;:&quot;deg&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_rotateZ_effect_tablet_extra&quot;:{&quot;unit&quot;:&quot;deg&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_rotateZ_effect_mobile_extra&quot;:{&quot;unit&quot;:&quot;deg&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="beautifly-menu-canvas.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-canvas-menu-wrapper">
                                    <a href="#" className="menu-mobile-nav-button">
                                        <span className="toggle-text screen-reader-text">Menu</span>
                                        <div className="beautifly-icon">
                                            <span className="icon-1"></span>
                                            <span className="icon-2"></span>
                                            <span className="icon-3"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-f214b8d e-con-full elementor-hidden-mobile elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra e-flex e-con" data-id="f214b8d" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                        <div className="elementor-element elementor-element-8219952 elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-id="8219952" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                                +(44) 751 1622 801 </div>
                        </div>

                    </div>
                    <div className="elementor-element elementor-element-03a6193 e-con-full elementor-hidden-mobile e-flex e-con" data-id="03a6193" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                        <div className="elementor-element elementor-element-53ddc09 elementor-button-outline elementor-hidden-mobile elementor-widget elementor-widget-button" data-id="53ddc09" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-icon elementor-align-icon-left">
                                                <i aria-hidden="true" className="beautifly-icon- beautifly-icon-calendar-1"></i> </span>
                                            <span className="elementor-button-text">book now!</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-7bc2be5 elementor-hidden-mobile elementor-widget elementor-widget-beautifly-info-canvas" data-id="7bc2be5" data-element_type="widget" data-widget_type="beautifly-info-canvas.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-canvas-info-wrapper">
                                    <a href="#" className="beautifly-info-button">
                                        <div className="beautifly-icon">
                                            <span className="icon-1"></span>
                                            <span className="icon-2"></span>
                                            <span className="icon-3"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PublicHeader