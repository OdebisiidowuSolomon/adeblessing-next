import React from 'react'

function SiteSearchPopUp() {
    return (
        <div className="site-search-popup">
            <div className="site-search-popup-wrap">
                <a href="#" className="site-search-popup-close">
                    <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" width="23.691" height="22.723" viewBox="0 0 23.691 22.723">
                        <g transform="translate(-126.154 -143.139)">
                            <line x2="23" y2="22" transform="translate(126.5 143.5)" fill="none" stroke="CurrentColor" strokeWidth="1"></line>
                            <path d="M0,22,23,0" transform="translate(126.5 143.5)" fill="none" stroke="CurrentColor" strokeWidth="1"></path>
                        </g>
                    </svg>
                </a>
                <div className="site-search">
                    <form role="search" method="get" className="search-form" action="https://demo2.pavothemes.com/beautifly/">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search …" name="s" />
                        </label>
                        <input type="submit" className="search-submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SiteSearchPopUp