import React, { Component, PropTypes } from 'react'
import { isObject } from 'lodash'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
// import { Link, Navigation } from 'react-router'
import classnames from 'classnames'

import SlideNavigation from './SlideNavigation'
import SlideThumb from './SlideThumb'

class Slideshow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPosition: 0,
      animation: 'initial',
    }
    this.slideAdvance = this.slideAdvance.bind(this)
    this.slideRewind = this.slideRewind.bind(this)
    this.moveToSlide = this.moveToSlide.bind(this)
  }

  // Returns arrays of indices for viewable slides before and after the active slide
  getSlideIndices(activeIndex) {
    const collectionSize = this.props.collection.length - 1
    // Slides that should appear before our active slide
    const previousSlides = [
      activeIndex - 2,
      activeIndex - 1,
    ].map((item) => {
      let indexVal = item
      // If slide index is negative, wrap
      if (item < 0) {
        indexVal = collectionSize + item + 1
      }
      return indexVal
    })
    // Slides that should appear after the active slide
    const nextSlides = [
      activeIndex + 1,
      activeIndex + 2,
    ].map((item) => {
      let indexVal = item
      // If index is beyond the end of the collection
      if (item > collectionSize) {
        indexVal = item % (collectionSize + 1)
      }
      return indexVal
    })
    // When we don't have at least 5 pieces of art, shift and pop our way to
    // success
    // TODO: something better
    if (collectionSize === 3) {
      previousSlides.shift()
    }
    if (collectionSize === 2) {
      previousSlides.shift()
      nextSlides.pop()
    }
    if (collectionSize === 1) {
      previousSlides.shift()
      previousSlides.shift()
      nextSlides.pop()
    }
    if (collectionSize === 0) {
      previousSlides.shift()
      previousSlides.shift()
      nextSlides.pop()
      nextSlides.pop()
    }
    return {
      previousSlides,
      nextSlides,
    }
  }

  // Get the active slides for a given collection based on position.
  getThumbs(collection) {
    const lastPosition = collection.length - 1
    const { currentPosition } = this.state
    const viewableSlides = this.getSlideIndices(currentPosition)
    // Add the slides that should appear before the active slide.
    let slides = viewableSlides.previousSlides.map(slideIndex =>
      this.generateSlide(
        collection[slideIndex], slideIndex, lastPosition, this.slideRewind
      )
    )
    // Add the active slide.
    slides.push(
      this.generateSlide(
        collection[currentPosition], currentPosition, lastPosition, null
      )
    )
    // Add the slides that should appear before the active slide
    slides = slides.concat(
      viewableSlides.nextSlides.map(slideIndex =>
        this.generateSlide(
          collection[slideIndex], slideIndex, lastPosition, this.slideAdvance
        )
      )
    )
    return slides
  }

  // Process work data to generate slide
  generateSlide(slideItem, slideIndex, lastPosition, handleClick) {
    const { associatedMedia, id, image, title } = slideItem
    const { currentPosition } = this.state
    const videoInfo = {}
    let imgSrc
    // work is sometimes undefined. check for info in work.url and set the
    // image source.
    if (image) {
      if (image.url) {
        imgSrc = image.url
      }
    }
    // If it's an embeddable thing with html and the active slide
    if (isObject(associatedMedia)) {
      if (currentPosition === slideIndex) {
        if (associatedMedia.html) {
          videoInfo.provider = associatedMedia.provider.name
          videoInfo.url = associatedMedia.url
        }
      }
      if (associatedMedia.html) {
        imgSrc = imgSrc || associatedMedia.image.url
      }
    }
    return (
      <SlideThumb
        key={id}
        src={imgSrc}
        title={title}
        currentPosition={currentPosition}
        videoInfo={videoInfo}
        handleClick={handleClick}
        classNames={{
          first: slideIndex === 0,
          last: slideIndex === lastPosition,
          active: slideIndex === currentPosition,
        }}
      />
    )
  }

  // Generate slide indicators based on the size of the collection
  generateIndicators() {
    const { collection } = this.props
    const { currentPosition } = this.state
    const slideIndicators = []
    for (let index = 0; index < collection.length; index++) {
      const activeSlide = index === currentPosition
      slideIndicators.push(
        <li
          key={index}
          onClick={() => this.moveToSlide(index)}
          className={classnames({
            active: activeSlide,
          })}
        >
          { activeSlide ?
            <span className="active">{index}</span> : <span>{index}</span>
          }
        </li>
      )
    }
    return (
      <ul className="thumbs-indicator">
        {slideIndicators}
      </ul>
    )
  }

  // Set active slide to parameter value
  moveToSlide(currentPosition) {
    this.setState({
      currentPosition,
    })
  }

  // Move film strip forward
  slideAdvance() {
    const { currentPosition } = this.state
    const { collection } = this.props
    let newPosition = currentPosition + 1
    // If we're beyond the last index, set to 0
    if (newPosition > collection.length - 1) {
      newPosition = 0
    }
    this.setState({
      animation: 'slide-advance',
      currentPosition: newPosition,
    })
  }

  // Move film strip backwards
  slideRewind() {
    const { currentPosition } = this.state
    const { collection } = this.props
    let newPosition = currentPosition - 1
    // If we're beyond the 0th element, move to the end
    if (newPosition < 0) {
      newPosition = collection.length - 1
    }
    this.setState({
      animation: 'slide-rewind',
      currentPosition: newPosition,
    })
  }

  render() {
    const { collection } = this.props
    const { animation } = this.state
    const collectionExists = collection && collection.length > 0
    let thumbEl
    let slideIndicators
    // Only generate thumbs and slide indicators if we have a collection that
    // is both defined and has length greater than zero
    if (collectionExists) {
      thumbEl = this.getThumbs(collection)
      slideIndicators = this.generateIndicators()
    }

    return (
      <div id="slideshow">
        <ul className="thumbs">
          <ReactCSSTransitionGroup
            transitionName={animation}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {thumbEl}
          </ReactCSSTransitionGroup>
        </ul>
        { collectionExists &&
          <SlideNavigation
            slideAdvance={this.slideAdvance}
            slideRewind={this.slideRewind}
          />
        }
        {slideIndicators}
      </div>
    )
  }

}

// TODO: real proptypes
Slideshow.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.object).isRequired,
}
Slideshow.defaultProps = {
}

export default Slideshow
