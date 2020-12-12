import React, { useEffect, useState, useRef } from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import Seperator from "@assets/seperators/a-seperator-4.svg"
import Container from "@atoms/container"
import SliderTestimonials from "@molecules/sliderTestimonials"
import { media } from "@utils/media"

const SectionCheckout = () => {
  return (
    <Container content>
      <CheckoutContainer>
        <Content id="app">
          <h6>Checkout the App</h6>
          <h1>Ready to start building the future?</h1>
          <p>Yes sir!</p>
          <Seperator />
          <SliderTestimonials />
        </Content>
        <a href="/app.apk">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
            width="200"
            height="59"
          />
        </a>
        <a href="/app.apk">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/02/Google_Play_logo_black.png"
            width="200"
            height="59"
            alt=""
          />
        </a>
      </CheckoutContainer>
    </Container>
  )
}

export default SectionCheckout

const CheckoutContainer = styled(Container)`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.button.radius};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  grid-template-columns: var(--gridSplit);

  @media ${media.lg} {
    flex-direction: row;
  }
`

const Content = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
  }

  h6 {
    color: ${props => props.theme.colors.lightGray};
    letter-spacing: 3px;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h1 {
    color: ${props => props.theme.colors.white};
  }

  p {
    color: ${props => props.theme.colors.lightGray};
  }
`

const Form = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
  }

  a {
    display: none;
  }
`
