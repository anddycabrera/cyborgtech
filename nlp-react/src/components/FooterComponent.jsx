import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/footer.css'

const FooterComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Resources</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a onClick={() => navigate('/dashboard')} className="nav-link p-0 text-muted">Sandbox</a></li>
                            <li className="nav-item mb-2"><a onClick={() => navigate('/features')} className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a onClick={() => navigate('/pricing')} className="nav-link p-0 text-muted">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Company</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a onClick={() => navigate('/about')} className="nav-link p-0 text-muted">About</a></li>
                            <li className="nav-item mb-2"><a onClick={() => navigate('/waitlist')} className="nav-link p-0 text-muted">Join Our Waitlist</a></li>
                            <li className="nav-item mb-2"><a onClick={() => navigate('/contact')} className="nav-link p-0 text-muted">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Legal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a onClick={() => navigate('/privacy')} className="nav-link p-0 text-muted">Privacy Policy</a></li>
                            <li className="nav-item mb-2"><a onClick={() => navigate('/terms')} className="nav-link p-0 text-muted">Terms</a></li>
                        </ul>
                    </div>

                 

                    {/* <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                <button className="btn btn-primary" type="button">Subscribe</button>
                           </div>
                        </form>
                    </div> */}
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2023 MyStarlog, Inc. All rights reserved.</p>
                    {/* <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
                    </ul> */}
                </div>
            </footer>
        </div>
    );
}

export default FooterComponent;
