import React from 'react'

function PublicBreadCrumb({ title }: { title: string }) {
    return (
        <div className="breadcrumb-wrap">
            <div data-elementor-type="wp-post" data-elementor-id="1591" className="elementor elementor-1591">
                <div className="elementor-element elementor-element-0b56b2f e-con-full e-flex e-con" data-id="0b56b2f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;content_width&quot;:&quot;full&quot;}">
                    <div className="elementor-element elementor-element-3ef6e7b elementor-widget elementor-widget-beautifly-breadcrumb" data-id="3ef6e7b" data-element_type="widget" data-widget_type="beautifly-breadcrumb.default">
                        <div className="elementor-widget-container">
                            <div className="breadcrumb" typeof="BreadcrumbList" vocab="https://schema.org/">
                                <h1 className="beautifly-title">
                                    {title} </h1>
                                <div className="breadcrumb-listItem">
                                    <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" title="Go to Home." href="#" className="home"><span property="name">Home</span></a>
                                        <meta property="position" content="1" />
                                    </span>/<span property="itemListElement" typeof="ListItem"><span property="name" className="post post-page current-item">{title}</span>
                                        <meta property="url" content="#" />
                                        <meta property="position" content="2" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicBreadCrumb