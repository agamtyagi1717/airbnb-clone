export default function Card(props){
    return (
        <div className='card'>
            <img alt="img-card1" className="img-card1" src={props.img} />
            <div className="all-stats">
                <div className='card-stats'>
                    <img alt="star" className="star" src='./Images/star.png' />
                    <span>{props.rating}</span>
                    <span className='gray'>({props.reviews}) •</span>
                    <span className='gray'> {props.country}</span>                
                </div>

                <p>{props.title}</p>
                <p><span className='price'>From {props.price}$</span> / person</p>
            </div>
            
        </div>
    )
}

