import React from 'react';
import { Link } from 'react-router-dom';
import '../css/price.css'

const PricingSection = () => {
    return (
        <div className="container py-3">
            
            <header>
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Simple, Transparent Pricing for Every Business Size</h1>
                    <p className="fs-5 text-muted">Get started with our powerful NLP solutions today. We offer flexible pricing plans designed to meet the needs of businesses of all sizes. Choose the plan that's right for you and begin harnessing the power of language data. Please note: Our services are currently in development and will be launching soon. Join our waitlist to be the first to access our tools when they become available.</p>
                </div>
            </header>

            <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                  
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Starter</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$50<small className="text-muted fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Up to 10,000 API calls</li>
                                    <li>Access to basic NLP features</li>
                                    <li>Email support</li>
                                </ul>
                                <Link to="/waitlist">
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Join the waitlist</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Professional</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$200<small className="text-muted fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Up to 50,000 API calls</li>
                                    <li>Access to all NLP features</li>
                                    <li>Priority email support</li>
                                    <li>Advanced analytics and reports</li>
                                </ul>
                                <Link to="/waitlist">
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Join the waitlist</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Enterprise</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">Custom<small className="text-muted fw-light">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Custom API call volume</li>
                                    <li>Access to all NLP features</li>
                                    <li>Dedicated support</li>
                                    <li>Custom analytics and reports</li>
                                </ul>
                                <Link to="/contact">
                                    <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                    <h2 className="display-6 text-center mb-4">Compare plans</h2>
                    <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th style={{width: "34%"}}></th>
                            <th style={{width: "22%"}}>Starter</th>
                            <th style={{width: "22%"}}>Professional</th>
                            <th style={{width: "22%"}}>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="text-start">API Calls</th>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Advanced NLP Features</th>
                            <td></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row" className="text-start">Email Support</th>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Dedicated Support</th>
                            <td></td>
                            <td></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Custom Analytics and Reports</th>
                            <td></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Custom API Call Volume</th>
                            <td></td>
                            <td></td>
                            <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        </tr>
                    </tbody>
                </table>
            </div>
                </main>
            </div>
        );
    }

export default PricingSection;
