import React from 'react';
import { Helmet } from "react-helmet";
import { ogimg } from '../../assets';
interface props {
    onLeftMenu?(): void,
    seoData?:any
}

export default class Seo extends React.Component<props, any> {

    render(): any {

        const seoData = this.props.seoData

        return (
                <Helmet>
                    <title>{seoData.title}</title>
                    <meta property="og:image" content={ogimg} />
                    <meta property="og:title" content={seoData.title} />
                    <meta property="og:description" content={seoData.metaDescription} />
                    <meta property="og:keywords" content={seoData.metaTags} />
                    <meta property="og:site_name" content="Byndr" />
                </Helmet>
                );
    }
}