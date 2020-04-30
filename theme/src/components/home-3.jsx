import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import ImageBox from "./common/image-box/image-box";
import OurValuesSection from "./sections/ourvalues/ourvalues";
import ExploreAmenitiesSection from "./sections/explore-amenities/explore-amenities";
import ModernFurnitureSection from "./sections/modern-furniture/modern-furniture";
import OfficeSpaceSection from "./sections/office-space/office-space";
import CallToActionSection from "./sections/caltoaction/caltoaction";
import BlogBlockGridStyle1 from "./common/blog/blog";
import BlogBlockGridStyle2 from "./common/blog/blog1";

class Home3 extends Component {
    render() {
        return (
            <div className={`home-page-wrap`}>
                <Helmet>
                    <title>MaisonCo | Home 3</title>
                </Helmet>
                <div className="section-wrapper pt-0">
                    <div className="categories-banner">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-xl-3 col-md-6">
                                    <ImageBox
                                        subTitle="The building"
                                        title="Extraordinary and luxury living experience "
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/the-building.webp`}
                                    >
                                    </ImageBox>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <ImageBox
                                        subTitle="Amenities"
                                        title="Top 10 Full-Amenities Buildings"
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/amenities.webp`}
                                    >
                                    </ImageBox>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <ImageBox
                                        subTitle="Neighbourhood"
                                        title="Social and environmental determinants"
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/neighbourhood.webp`}
                                    >
                                    </ImageBox>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <ImageBox
                                        subTitle="The Modern"
                                        title="luxury features and spectacular views"
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/the-modern.webp`}
                                    >
                                    </ImageBox>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="section-wrapper">
                        <OurValuesSection/>
                </div>
                <div className="section-wrapper pb-0">
                    <ExploreAmenitiesSection/>
                </div>
                <div className="section-wrapper p-0">
                    <ModernFurnitureSection/>
                </div>
                <div className="section-wrapper p-0">
                    <OfficeSpaceSection/>
                </div>
                <div className="section-wrapper p-0">
                    <CallToActionSection/>
                </div>
                <div className="section-wrapper bg-blog" style={{backgroundColor: "#f8f8f8"}}>
                    <BlogBlockGridStyle1/>
                </div>
            </div>
        )
    }
}

export default Home3;