import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import Information from '../components/Information'
import NextMeeting from '../components/NextMeeting'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Home`} />
        <SEO />
        <div className="container">
          <Information />
          <NextMeeting />
          {/* <div className="lead">
            <div className="elevator">
              <h1>{`DMV Book Club`}</h1>
              <p>
                버지니아, 메릴랜드, 워싱턴 DC 지역 북클럽입니다. 투표를 통해 선정된 책을 각자 읽고 2주에 한번씩 만나 책에 대하여 이야기를 나눕니다. 
              </p>
              <p>
                <a href="https://open.kakao.com/o/gR5zVlY" target="_blank" rel="noopener noreferrer">
                  카카오톡 오픈채팅
                </a>{' '}
                에 입장하셔서 더 많은 이야기를 나누어 보세요.<br />
              </p>
              {/* <div className="social-buttons">
                <GitHubButton
                  href="https://github.com/taniarascia"
                  data-size="large"
                  data-show-count="true"
                >
                  taniarascia
                </GitHubButton>
              </div> 

            </div>
            <div className="newsletter-section">
              <img src={'http://image.yes24.com/Goods/63038113/800x0'} className="bookd-of-week" alt="book of the week" />
              <div>
                <h3>1월 31일 (금) 7 PM</h3>
                <p>Soricha Tea & Theater, Annandale VA 
                  <a href="https://goo.gl/maps/cVaetQtC1aNjpVKj8" target="_blank" rel="noopener noreferrer" className="location">
                    <img src={location} alt="Location Icon" className="location-icon bounce-7" />
                </a>{' '}
                </p>
                <a className="button" href="https://open.kakao.com/o/gR5zVlY">
                  참석여부 투표하기
                </a>
              </div>
            </div>
          </div> */}
        </div>

        {/*<div className="container front-page">
          <section className="section">
            <h2>
              새로 선정된 책
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

         <div className="container front-page">
          <section className="section">
            <h2>
              Latest Articles
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Most Popular
              <Link to="/categories/popular" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section> */}

          {/* <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Interviews</h2>
            <SimpleListing simple data={podcasts} />
          </section>

          <section className="section">
            <h2>Talks</h2>
            <SimpleListing simple data={speaking} />
          </section> */}

          {/* <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              {quotes.map(quote => (
                <blockquote className="quotation" key={quote.name}>
                  <p>{quote.quote}</p>
                  <cite>— {quote.name}</cite>
                </blockquote>
              ))}
            </div>
          </section>
        </div> */}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
