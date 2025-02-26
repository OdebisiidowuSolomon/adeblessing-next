import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BeautiflyMobileNav() {
    return (
        <div className="beautifly-mobile-nav">
            <div className="menu-scroll-mobile">
                <a href="#" className="mobile-nav-close"><i className="beautifly-icon-times"></i></a>
                <div className="mobile-nav-tabs">
                    <ul>
                        <li className="mobile-tab-title mobile-pages-title active" data-menu="pages">
                            <span>Main Menu</span>
                        </li>
                    </ul>
                </div>
                <nav className="mobile-menu-tab mobile-navigation mobile-pages-menu active" aria-label="Mobile Navigation">
                    <div className="handheld-navigation">
                        <ul id="menu-main-menu" className="menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-109">
                                <Link href="/">Home</Link>

                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-121">
                                <a href="/about">About Us</a>

                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-113">
                                <a href="/services">Services</a>

                            </li>
                            <li className="menu-item menu-item-type-post_type_archive menu-item-object-beautifly_portfolio menu-item-has-children menu-item-5157">
                                <a href="/contact">Contact</a>

                            </li>

                        </ul>
                    </div>
                </nav>
                <nav className="mobile-menu-tab mobile-navigation-categories mobile-categories-menu" aria-label="Mobile Navigation">
                    <div className="menu">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li className="page_item page-item-14"><a href="/about">About Us</a></li>
                            <li className="page_item page-item-12"><a href="/contact">Contact Us</a></li>
                            <li className="page_item page-item-16"><a href="/services">Services</a></li>

                        </ul>
                    </div>
                </nav>
            </div>
            <div className="beautifly-language-switcher-mobile">
                <ul className="menu">
                    <li className="item">
                        <div className="language-switcher-head">
                            <Image src="/assets/images/en.jpg" alt="WPML" width={24} height={16} />
                        </div>
                    </li>
                    <li className="item">
                        <div className="language-switcher-img">
                            <a href="#">
                                <Image src="/assets/images/de.jpg" alt="WPML" width={24} height={16} />
                            </a>
                        </div>
                    </li>
                    <li className="item">
                        <div className="language-switcher-img">
                            <a href="#">
                                <Image src="/assets/images/it.jpg" alt="WPML" width={24} height={16} />
                            </a>
                        </div>
                    </li>
                    <li className="item">
                        <div className="language-switcher-img">
                            <a href="#">
                                <Image src="/assets/images/hi.jpg" alt="WPML" width={24} height={16} />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BeautiflyMobileNav