import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import SelectedDish from './DishdetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            seelctedDish : null
        }
    }

    onDishSelect(dish){
        this.setState({seelctedDish : dish})
    }

    // renderDish(dish){
    //     if(dish != null){
    //         return(
    //             <card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </card>
    //         )
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         )
    //     }
    // }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  key ={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() =>this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle >{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            )
        })
        

        return (
          <div className="container">
            <div className="row">

                  {menu}

            </div>
            <div className="row">
           {/* {this.renderDish(this.state.seelctedDish)} */
           <SelectedDish status = {this.state.seelctedDish} />
           }
            </div>
          </div>
        );
    }
}
export default Menu;