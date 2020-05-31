import React from "react";
import { v4 as uuid } from "uuid";

import styles from "./ProductGallery.module.scss";

export class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredImage: 0,
    };
  }

  handleFeaturedImage = ({ target }) => {
    const imageIndex = target.getAttribute("data-index");
    this.setState({ featuredImage: imageIndex });
  };

  renderThumbnails = () => {
    const { images } = this.props;
    if (images) {
      return images.map((image, index) => {
        return (
          <div className={styles.image} key={uuid()}>
            <img
              onClick={this.handleFeaturedImage}
              src={image}
              data-index={index}
            />
          </div>
        );
      });
    }
  };

  render() {
    const { images } = this.props;
    const { featuredImage } = this.state;
    if (images) {
      return (
        <div className={styles.container}>
          <div className={styles.gallery}>
            <div className={styles.featured_image}>
              <img
                src={featuredImage ? images[featuredImage] : images[0]}
                data-image-index="0"
              />
            </div>
            <div className={styles.thumbnails}>{this.renderThumbnails()}</div>
          </div>
        </div>
      );
    } else {
      return <div>Gallery is loading...</div>;
    }
  }
}
