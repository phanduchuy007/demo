import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Silde extends Component {

    imagesChange = () => {
        const { imgLink } = this.props;
        const newImages = imgLink.map(img => {
            return {
                original: `http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${img}`,
                thumbnail: `http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${img}`
            }
        })
        return newImages;
    }
    render() {
        return (
            <div className="images-holder" >
                <ImageGallery
                    showFullscreenButton={false}
                    items={this.imagesChange()}
                    showPlayButton={false}
                    thumbnailPosition="right"
                />
            </div>
        )
    }
}

export default Silde;