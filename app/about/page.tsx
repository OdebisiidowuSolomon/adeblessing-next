import React from 'react'
import AboutOurSalon from './_components/AboutOurSalon'
import AboutOurHappyClients from './_components/AboutOurHappyClients'
import AboutImage from './_components/AboutImage'

function AboutPage() {
    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div id="primary">
                    <main id="main" className="site-main">
                        <article id="post-15" className="post-15 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div data-elementor-type="wp-page" data-elementor-id="15" className="elementor elementor-15">
                                    <AboutOurSalon />
                                    <AboutImage />
                                    <AboutOurHappyClients />
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>

    )
}

export default AboutPage