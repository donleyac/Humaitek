import React from 'react';
import ReactDOM from 'react-dom';
var Lightbox = require('react-image-lightbox');


const LightboxComponent = React.createClass({
    getInitialState() {
        return {
            index: 0,
            isOpen: false
        };
    },
    openLightbox() {
        this.setState({ isOpen: true });

        //We need to hide affixed elements, on open
        let affixed = document.getElementsByClassName("ant-affix")[0];
        if(affixed){
          affixed.classList.add("hide");
        }
    },
    closeLightbox() {
        this.setState({ isOpen: false });
        let affixed = document.getElementsByClassName("ant-affix")[0];
        if(affixed){
          affixed.classList.remove("hide");
        }
    },
    moveNext() {
        this.setState({ index: (this.state.index + 1) % this.props.attr.images.length });
    },
    movePrev() {
        this.setState({ index: (this.state.index + this.props.attr.images.length - 1) % this.props.attr.images.length });
    },
    render() {
        let lightbox;
        if (this.state.isOpen) {
            lightbox = (
                <Lightbox
                    mainSrc={this.props.attr.images[this.state.index]}
                    nextSrc={this.props.attr.images[(this.state.index + 1) % this.props.attr.images.length]}
                    prevSrc={this.props.attr.images[(this.state.index + this.props.attr.images.length - 1) % this.props.attr.images.length]}

                    onCloseRequest={this.closeLightbox}
                    onMovePrevRequest={this.movePrev}
                    onMoveNextRequest={this.moveNext}

                    imageTitle={this.props.attr.titles[this.state.index]}
                    imageCaption={this.props.attr.captions[this.state.index]}
                />
            );
        }

        return (
                  <div className={this.props.className} onClick={this.openLightbox}>
                      {this.props.children}
                      {lightbox}
                  </div>
        );
    }
});

module.exports = LightboxComponent;
