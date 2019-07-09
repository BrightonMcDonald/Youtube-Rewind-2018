import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        console.log("WILL SMITH SUX");
        super();    
    }
    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
            </div>
        );
    }
}