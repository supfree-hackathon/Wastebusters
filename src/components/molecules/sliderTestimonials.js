import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import SlideTestimonial from "@atoms/slideTestimonial"
import "slick-carousel/slick/slick.css"

class SliderTestimonials extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    var settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    }

    return (
      <StaticQuery
        query={graphql`
          query TestimonialImagesQuery {
            testimonialOne: file(relativePath: { eq: "avatars/john.png" }) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            testimonialTwo: file(relativePath: { eq: "avatars/thanasis.png" }) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            testimonialThree: file(
              relativePath: { eq: "avatars/paraskevi.png" }
            ) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            testimonialFour: file(relativePath: { eq: "avatars/sofia.png" }) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            testimonialFive: file(
              relativePath: { eq: "avatars/lefteris.png" }
            ) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Carousel>
            <Slider {...settings} ref={slider => (this.slider1 = slider)}>
              <SlideTestimonial
                testimonial=" “It was a challenging Hackathon”"
                name="John Rouggeris"
                title="CEO"
              />
              <SlideTestimonial
                testimonial=" “I had fun learning thunkable ”"
                name="Thanasis Kirmizis"
                title="CTO"
              />
              <SlideTestimonial
                testimonial=" “It was an enjoyable expirience”"
                name="Paraskevi Antonopoulou"
                title="CGO"
              />
              <SlideTestimonial
                testimonial=" “Will definitely try again”"
                name="Sofia Chanioti"
                title="CCO"
              />
              <SlideTestimonial
                testimonial=" “Had fun, will try again”"
                name="Lefteris Davros"
                title="CWO"
              />
            </Slider>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              focusOnSelect={true}
              slidesToShow={5}
              variableWidth={true}
              className="carouselNav"
            >
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialOne.childImageSharp.fixed} />
                <a
                  href="https://www.linkedin.com/in/ioannis-rougeris-29b92018a/"
                  target="_blank"
                >
                  <img
                    src="https://mikespringer.files.wordpress.com/2014/08/linkedin-icon.png"
                    style={{
                      position: "absolute",
                      margin: "5px 0px 20px 12px",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </a>
              </SlideAvatar>
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialTwo.childImageSharp.fixed} />
                <a
                  href="https://www.linkedin.com/in/thanasis-kirmizis/"
                  target="_blank"
                >
                  <img
                    src="https://mikespringer.files.wordpress.com/2014/08/linkedin-icon.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "5px 0px 0 12px",
                    }}
                  />
                </a>
              </SlideAvatar>
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialThree.childImageSharp.fixed} />
                <a
                  href="//www.linkedin.com/in/paraskevi-antonopoulou/"
                  target="_blank"
                >
                  <img
                    src="https://mikespringer.files.wordpress.com/2014/08/linkedin-icon.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "5px 0px 0 13px",
                    }}
                  />
                </a>
              </SlideAvatar>
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialFour.childImageSharp.fixed} />
                <a
                  href="//www.linkedin.com/in/sofia-chanioti-ba89471b3/"
                  target="_blank"
                >
                  <img
                    src="https://mikespringer.files.wordpress.com/2014/08/linkedin-icon.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "5px 0px 0 13px",
                    }}
                  />
                </a>
              </SlideAvatar>
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialFive.childImageSharp.fixed} />
                <a
                  href="//www.linkedin.com/in/lefteris-davros/"
                  target="_blank"
                >
                  <img
                    src="https://mikespringer.files.wordpress.com/2014/08/linkedin-icon.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "5px 0px 0 15px",
                    }}
                  />
                </a>
              </SlideAvatar>
            </Slider>
          </Carousel>
        )}
      />
    )
  }
}

export default SliderTestimonials

const Carousel = styled.div`
  padding-top: 2rem;

  .carouselNav {
    .slick-slide {
      opacity: 0.5;
      position: relative;
      transition: ${props => props.theme.animation.transition};

      svg {
        left: 0;
        position: absolute;
        top: -7px;
        z-index: 10;

        circle {
          opacity: 0;
          fill: none;
          stroke: ${props => props.theme.colors.primary};
          stroke-width: 0.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 39 39;
          stroke-dashoffset: 39;
          transition: stroke-dashoffset 0.5s, opacity 0.5s;
        }
      }

      &.slick-current {
        opacity: 1;

        circle {
          opacity: 1;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 0.5s, opacity 0.5s;
        }
      }
    }
  }
`

const SlideAvatar = styled.div`
  height: 40px;
  margin: 0.5rem 0.75rem 1.5rem;
  outline: none;
  width: 40px;

  &:focus {
    outline: none;
  }
`
