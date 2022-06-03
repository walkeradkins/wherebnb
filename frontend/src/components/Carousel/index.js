import './Carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

const PhotoCarousel = ({ images }) => {
  return (
    <div>
      <Carousel className='photo__carousel' infiniteLoop showThumbs={false}>
        {images.map(image =>
          <div className='image'>
            <figure className='card__image' style={{ backgroundImage: `url( ${image.url} )` }} />
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default PhotoCarousel
