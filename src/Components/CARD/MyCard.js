import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logoShop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './MyCard.css';
const myCard = (props) => {
    const recipe = props.data;
    const img = recipe.strMealThumb;
    const name = recipe.strArea+" - "+recipe.strMeal;
    let idx = props.day;
    // console.log(props.handleCard);
    const handleCard = props.handleCard;
    return (
        <div className="col-md-4 text-center my-card">
            <Card className="card-details">
                <Card.Img style={{height: '200px',borderRadius: '5px',boxShadow: '2px 2px 7px gray'}} variant="top" src={img}/>
                <Card.Body>
                    <Card.Title style={{fontSize: '20px',fontWeight: '600', color: '#5CB85C'}}>{name}</Card.Title>
                    <Card.Text className="myText">
                       <span className='text text-info'>New to</span> <img style={{height: '30px',width:'50%'}} src={logo} alt=""/> Our newest additions that we can't stop talking about
                    </Card.Text>
                    <Button onClick={() => handleCard(recipe,props.price)} variant="primary"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> BUY NOW</Button>
                </Card.Body>
                {
                    idx < 1 ? <Card.Footer className="text-muted">A few hours ago invented</Card.Footer>: idx===1? <Card.Footer className="text-muted">{Math.round(idx)} day ago invented</Card.Footer> :
                    <Card.Footer className="text-muted">{Math.round(idx)} days ago invented</Card.Footer>
                }
            </Card>
        </div>
    );
};

export default myCard;