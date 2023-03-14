// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    ourId: 0,
  }

  onChangeReviewLeft = () => {
    const {ourId} = this.state
    const res =
      ourId >= 1
        ? this.setState(prevState => ({ourId: prevState.ourId - 1}))
        : this.setState(prevState => ({ourId: prevState.ourId}))
  }

  onChangeReviewRight = () => {
    const {ourId} = this.state
    const {reviewsList} = this.props
    const res =
      ourId < reviewsList.length - 1
        ? this.setState(prevState => ({ourId: prevState.ourId + 1}))
        : this.setState(prevState => ({ourId: prevState.ourId}))
  }

  getData = searchResult => {
    const {imgUrl, username, companyName, description} = searchResult

    return (
      <div className="cont">
        <img src={imgUrl} alt={username} className="pic" />
        <p className="name">{username}</p>
        <p className="com-name">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
   
    const {ourId} = this.state
    const searchResult = reviewsList[ourId]
    console.log(reviewsList[ourId])

    return (
      <div className="bg-container">
        <h1 className="head">Reviews</h1>

        <div className="arrow-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onChangeReviewLeft}
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.getData(searchResult)}

          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.onChangeReviewRight}
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
