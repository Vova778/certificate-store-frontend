import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';


const CardItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="card-item">
            <div className="card">
                <img className="card-image"
                     src={props.image}
                     alt="Item's Image"/>
                <div className="card-main">
                    <h2 className="card-name">
                        <Link to={'/certificates/' + props.certificate.id} className="card-name">
                            {props.certificate.name}
                        </Link>
                    </h2>
                    <p className="card-description">{props.certificate.description}</p>
                </div>
                <hr className="card-break-line"/>
                <div className="card-bottom">
                    <p className="card-price">${props.certificate.price}</p>
                    <p className="tags" hidden
                       key={props.certificate.id}>{props.certificate.tags.map(tag => tag.name)}</p>
                    <button className="card-button-add">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;