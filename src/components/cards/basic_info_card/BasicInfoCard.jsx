import './BasicInfoCard.css';

const BasicInfoCard = ({ category }) => {
    return (
        <div className='basic-info-card'>
            <div className="basic-info-img-container">
                <img 
                    alt='card img' 
                    src={category.imgUrl} 
                    className="basic-info-img"
                />
            </div>
            <div className="basic-info-details-container">
                <p className="basic-info-detail">
                    {category.name}
                </p>
            </div>
        </div>
    )
}

export default BasicInfoCard;
