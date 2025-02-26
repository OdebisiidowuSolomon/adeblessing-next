import React from 'react'
import ServiceContent from './_components/ServiceContent'

function page() {
    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div id="primary">
                    <main id="main" className="site-main">
                        <article id="post-22" className="post-22 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div data-elementor-type="wp-page" data-elementor-id="22" className="elementor elementor-22">
                                <div className="elementor-element elementor-element-cf9a012 e-flex e-con-boxed e-con" data-id="cf9a012" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
                                        <div className="e-con-inner">
                                            <ServiceContent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page