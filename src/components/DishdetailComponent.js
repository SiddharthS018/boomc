import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'

class DishDetail extends Component{

constructor(props){
    super(props)
    this.state = {
        
    }
}

 render(){
   let dish = this.props.dish

        if(dish != null){
            const addComment = dish.comments.map((comment) =>{
                return(
                <div>
                    
                <p>{comment.comment}</p>
                <p>{"-- "+ comment.author +" , "+ comment.date.substring(0,10)}</p>
                </div>
                )
                })
            return(
                <div className = 'container'>
                <div className = 'row'>
                <div className = 'col-sm-5 col-12 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className = 'col-sm-5 col-12 m-1'>

                
                <h4>Comments</h4>
                <ul>
                    {addComment}
                </ul>
                
                </div>
                </div>
                </div>
            )
            addComment = null
        }
        else{
            return(
                <div>id varla</div>
            )
        }
    }

 }


export default DishDetail