import React from 'react';
import './Section4.css';
import Technology from './Technology';
import logo1 from '../../../../images/logo1.svg'
import logo2 from '../../../../images/logo2.svg'
import logo3 from '../../../../images/logo3.svg'
import logo4 from '../../../../images/logo4.svg'

function Section4() {
    return (
        <div className="container__wrapper">
            <div className="container">
                <h5 className="caption mt-5">Why Stripe?</h5>
                <p className="caption__title">A technology-first aproach to Payment<br></br> and finance</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 col-sm-6">
                        <Technology 
                        title="close to metal" 
                        desc="From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
                        img={logo1}
                        />
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <Technology 
                        title="Fastest-improving platform" 
                        desc="From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
                        img={logo2}
                        />
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <Technology 
                        title="Battle-tested reliability" 
                        desc="From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
                        img={logo3}
                        />
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <Technology 
                        title="Intelligent optimizations" 
                        desc="From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack."
                        img={logo4}
                        />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Section4
