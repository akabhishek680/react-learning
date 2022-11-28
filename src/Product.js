import React from 'react';

class Product extends React.Component {

    constructor() {
        super();
        this.state = {
            title: 'fan',
            qty: 200
        }
    }

    increaseQty = () => {
        
        //Approach 2, to set the state
        this.setState( (prevState) => {

            let newState = { qty: prevState.qty + 1 }
            return newState;
        });
    }

    render() {
        let { title, qty } = this.state;
        return (
            <React.Fragment>
                <h2>inside product component</h2>
                <div>Title: { title } </div>
                <div style={ { display:'flex', alignItems: 'center', justifyContent: 'center'}}>

                    <span>Stock Qty: { qty } </span>
                    <img src="https://cdn-icons-png.flaticon.com/512/2550/2550342.png" 
                        style={ { width: 20, height: 20, cursor:'pointer', marginLeft:5 }}
                        onClick={this.increaseQty}
                    ></img>
                
                </div>
                
            </React.Fragment>
        );
    }
}

export default Product;