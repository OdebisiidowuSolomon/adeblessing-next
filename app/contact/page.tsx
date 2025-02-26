import React from 'react'
import ContactLeftImage from './_components/ContactLeftImage'
import ContactRight from './_components/ContactRight'

function ContactPage() {
    return (
        <div id="content" className="site-content" tabIndex={-1}>
            <div className="col-full">
                <div id="primary">
                    <main id="main" className="site-main">
                        <article id="post-13" className="post-13 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div data-elementor-type="wp-page" data-elementor-id="13" className="elementor elementor-13">
                                    <div className="elementor-element elementor-element-f0ddb2a e-flex e-con-boxed e-con" data-id="f0ddb2a" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;boxed&quot;}">
                                        <div className="e-con-inner">
                                            <ContactLeftImage />
                                            <ContactRight />
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

export default ContactPage