import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import './faq.scss';
class FAQPage extends Component {
    render (){

        return (
            <div className="faq-wrap">
                <Helmet>
                    <title>MaisonCo | FAQ's Page</title>
                </Helmet>
                <Breadcrumb title={`FAQ's`}/>
                <div className="section-wrapper mt-5">
                    <div className="container">
                        <h3 className="text-uppercase text-center">Get all the answers to the most
                            frequently asked questions (FAQs) </h3>
                        <h3 className="text-uppercase text-center">regarding visit, services, IntelligentHome, and much, much
                            more.</h3>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <h2 className="text-uppercase text-center text-primary mb-5">general questions</h2>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What accomodations are made for visitors with disabilities?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What security precautions do you take?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I bring a tripod for my camera?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What security precautions do you take?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    </div>
                </div>
                <div className="section-wrapper mb-5">
                    <div className="container">
                        <h2 className="text-uppercase text-center text-primary mb-5">OTHER QUESTIONS</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What Women Want in the Restroom ?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What Condo Amenities Do Today's Buyers Desire Most?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What Amenities are People looking for in a Campground?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What Amenities Should Landlords Provide to Their Tenants?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We have handicapped restrooms on the 86th Floor Observatory and also have lowered viewing walls and binoculars. Service dogs are allowed throughout the building. Motorized and non-motorized wheelchairs are permitted. The 86th Floor has ramps to make getting around easier and lowered viewing walls so that visitors in chairs can still take in the view. The 102nd Floor currently has a higher wall, but we are working to make it more accessible to all our visitors.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQPage