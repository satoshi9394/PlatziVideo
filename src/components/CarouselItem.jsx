import React from 'react'
import PropTypes from 'prop-types' 

//redux
import  { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../store/action'

//styles
import '../assets/styles/components/CarouselItem.scss'

//img
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import deleteIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) =>  {
  const {
    id,
    cover, 
    title, 
    year, 
    contentRating, 
    duration
  } = props

  const HandleSetFavorite = () => {
    props.setFavorite({
      id,
      cover, 
      title, 
      year, 
      contentRating, 
      duration
    })
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }
  return(
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      <div className="carousel-item__details">
        <div>
          <img 
            className="carousel-item__details--img" 
            src={playIcon} 
            alt="Play Icon"
          /> 
          <img 
            className="carousel-item__details--img" 
            src={plusIcon} 
            alt="Plus Icon"
            onClick={HandleSetFavorite} 
          />
          <img 
            className="carousel-item__details--img" 
            src={deleteIcon} 
            alt="Delete Icon"
            onClick={()=>handleDeleteFavorite(id)} 
          />  
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} minutos`} 
        </p>
      </div>
    </div>
  )
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number

}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);