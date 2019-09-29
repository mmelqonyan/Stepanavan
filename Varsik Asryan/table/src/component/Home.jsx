import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  "https://img2.akspic.ru/image/46291-dikaya_mestnost-ozero-pustynya-boloto-priroda-1920x1080.jpg",
  "https://s1.1zoom.ru/b5050/186/Norway_Mountains_Lake_488324_1920x1080.jpg",
  "http://wallpapers-images.ru/1920x1080/nature/wallpapers/nature-wallpapers-1920x1080-00014.jpg",
  "https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg",
  "http://magas.su/sites/magas.su/files/newspics/gori_dzheirah.jpg",
  "http://top-desktop.ru/files/priroda/1920x1080/156.jpg",
]
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: true,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
export default Home;