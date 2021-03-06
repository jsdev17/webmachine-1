import React, { Component } from 'react';


class PricingTable extends Component {
  render() {
    return (
        <div className="priceTable">
            <div className="priceColumn">
                <ul className="price">
                    <li className="header">Basic</li>
                    <li className="grey">$ 9.99 / year</li>
                    <li>10GB Storage</li>
                    <li>10 Emails</li>
                    <li>10 Domains</li>
                    <li>1GB Bandwidth</li>
                    <li className="grey"><a href="#" id="priceButton">Sign Up</a></li>
                </ul>
            </div>
        
            <div className="priceColumn">
                <ul className="price">
                    <li className="header">Pro</li>
                    <li className="grey">$ 24.99 / year</li>
                    <li>25GB Storage</li>
                    <li>25 Emails</li>
                    <li>25 Domains</li>
                    <li>2GB Bandwidth</li>
                    <li className="grey"><a href="#" id="priceButton">Sign Up</a></li>
                </ul>
            </div>
        
            <div className="priceColumn">
                <ul className="price">
                    <li className="header">Premium</li>
                    <li className="grey">$ 49.99 / year</li>
                    <li>50GB Storage</li>
                    <li>50 Emails</li>
                    <li>50 Domains</li>
                    <li>5GB Bandwidth</li>
                    <li className="grey"><a href="#" id="priceButton">Sign Up</a></li>
                </ul>
            </div>
      </div>
    );
  }
}

export default PricingTable;
