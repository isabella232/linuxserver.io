import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { sectionListDocs } from '../utils/sectionList';

export default function DocTemplate({ data }) {

    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (

        <Container className="documentation">
            <Row>
                <Col md="4" className="contents"></Col>
                <Col md="8" className="article">
                    <h1>{frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                </Col>
            </Row>
        </Container>
    );
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
