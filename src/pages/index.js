import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "@utils/layout"
import SEO from "@utils/seo"
import Img from "gatsby-image"
import Button from "@atoms/button"
import ContentBlock from "@atoms/contentBlock"
import Container from "@atoms/container"
import List from "@atoms/list"
import Subheading from "@atoms/subheading"
import SectionHeader from "@molecules/sectionHeader"
import SectionSetup from "@molecules/sectionSetup"
import SectionCheckout from "@molecules/sectionCheckout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexImagesQuery {
      moonclerk: file(relativePath: { eq: "seagull3.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      gatsbyjs: file(relativePath: { eq: "env-growth.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      netlify: file(relativePath: { eq: "register-app2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader />
      <SectionSetup />
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.gatsbyjs.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading id="facts">Waste Cut</Subheading>
          <h2>Environment breathing again</h2>
          <p>
            Here are some interesting facts, that <b> you </b> can assist in
            tackling by using our app
          </p>
          <List>
            <li>
              <b> 100,000 marine animals </b> are killed by plastic bags
              annually.
            </li>
            <li>
              It only takes about 14 plastic bags for the equivalent of the gas
              required to drive one mile.
            </li>
            <li>
              According to Waste Management, only <b> 1 percent </b> of plastic
              bags are returned for recycling. That means that the average
              family only recycles 15 bags a year; the rest end up in landfills
              or as litter.
            </li>
          </List>
          <Button
            href="//www.biologicaldiversity.org/programs/population_and_sustainability/sustainability/plastic_bag_facts.html"
            aria-label="Env Facts"
            target="_blank"
          >
            Learn More
          </Button>
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.netlify.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading id="partners">
            Interested in registering in our app?
          </Subheading>
          <h2>Feel free to reach out to us</h2>
          <p>
            Get in contact with us & join us on the crusade of reducing usage of
            plastic bags by registering your store in our application. What we
            need from you:
          </p>
          <List>
            <li>Shop Name</li>
            <li>Shop Address</li>
            <li>Shop Category</li>
            <li>Shop working hours</li>
          </List>
          <Button
            href="https://netlify.com"
            aria-label="Learn more about Netlify"
          >
            I want to register 🚀
          </Button>
        </ContentBlock>
      </ContentContainer>

      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.moonclerk.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading id="sponsor">Sponsor us?</Subheading>
          <h2>Help us improving </h2>
          <p>Scaling our app faster will lead to less plastic pollution 🐬</p>
          <List>
            <li>Assist us by making a donation </li>
            <li>Spread the word</li>
            <li>Or even mentor us </li>
          </List>
          <Button href="#app" aria-label="Learn more about MoonClerk">
            Get started
          </Button>
        </ContentBlock>
      </ContentContainer>

      <SectionCheckout />
    </Layout>
  )
}

export default IndexPage

const Image = styled.div``

const ContentContainer = styled(Container)`
  &:nth-of-type(odd) {
    direction: rtl;

    div {
      direction: ltr;
    }
  }
`
