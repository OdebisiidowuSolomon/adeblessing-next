import Image from 'next/image'
import React from 'react'

function ContactLeftImage() {
    return (
        <div className="elementor-element elementor-element-53767f6 e-con-full e-flex e-con" data-id="53767f6" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
            <div className="elementor-element elementor-element-ed21d0e elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-hidden-mobile_extra elementor-widget elementor-widget-image" data-id="ed21d0e" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                    <Image decoding="async" fetchPriority="high" width="480" height="360" src="/assets/images/contact-us-img-01-min.jpg" className="attachment-full size-full wp-image-1910" alt="" />
                </div>
            </div>
            <div className="elementor-element elementor-element-a269844 elementor-absolute e-transform elementor-widget-mobile_extra__width-inherit elementor-widget-mobile__width-initial elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="a269844" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;_transform_flipX_effect&quot;:&quot;transform&quot;}" data-widget_type="image.default">
                <div className="elementor-widget-container">
                    <Image decoding="async" width="315" height="420" src="/assets/images/makeup.jpg" className="attachment-full size-full wp-image-1775" alt="" sizes="(max-width: 315px) 100vw, 315px" />
                </div>
            </div>
        </div>
    )
}

export default ContactLeftImage