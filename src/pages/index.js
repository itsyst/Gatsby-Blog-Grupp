import React from "react"
import { Container, FeatureImage, Content} from "../components"
import { H1, P } from "../elements"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1> Here goes all contents</H1>
        <P>Testing</P>
      </Content>
    </Container>
  )
}
export default IndexPage



