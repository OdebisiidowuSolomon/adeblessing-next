import React from 'react'
import HomeBanner from './_components/HomeBanner'
import HomeWelcomeToOurServices from './_components/HomeWelcomeToOurServices'
import HomeOurServices from './_components/HomeOurServices'
import HomeFullRangeOfOurService from './_components/HomeFullRangeOfOurService'
import HomeExploreOurPrograms from './_components/HomeExploreOurPrograms'

function HomePage() {
    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div id="primary">
                    <main id="main" className="site-main">
                        <article id="post-10" className="post-10 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div data-elementor-type="wp-page" data-elementor-id="10" className="elementor elementor-10">
                                    <HomeBanner />
                                    <HomeWelcomeToOurServices />
                                    <HomeOurServices />
                                    <HomeFullRangeOfOurService/>
                                    <HomeExploreOurPrograms/>
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default HomePage