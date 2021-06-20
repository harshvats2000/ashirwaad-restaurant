import { Link } from "gatsby"
import React from "react"
import { Container, Content, Wrapper, Button, Title } from "./styles"
import bgImage from "../../images/banner.jpg"

const HomepageBanner = () => {
  return (
    <Wrapper bgImage={bgImage}>
      <Container id="banner">
        <Content>
          <Title>ASHIRWAAD</Title>
          <p>Make your moments memorable with Ashirwaad.</p>
          <Link
            to="/#bookTable"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button>BOOK A TABLE</Button>
          </Link>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default HomepageBanner
