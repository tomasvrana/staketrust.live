import React from 'react'
import styled from 'styled-components'
import Video from '../Video'
import Carousel from '../Carousel'
import Query from './Query'
import { Grid, Row, Column } from '@input-output-hk/react-grid'
import { ThemeConsumer } from '../../state'

const Container = styled.div`
  width: 100%;
`

const videoIds = [ 'yx2Abw8PBAA', '_Xw-0ANS2X0', 'cr4vTPPE8ps' ]

export default () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Query
        render={({ frontmatter }) => (
          <Container className='text-align-center'>
            <h2>{frontmatter.content.components.carousel}</h2>
            <Grid fillRows>
              <Row sm={1} spacing={1.2}>
                <Column spacing={0.5} className='max-width-100'>
                  <Carousel
                    navigationBackgroundColor={theme.colors.primaryHighlight}
                    name='carousel_example'
                  >
                    {videoIds.map(videoId => (
                      <Video
                        id={videoId}
                        key={videoId}
                        height={300}
                      />
                    ))}
                  </Carousel>
                </Column>
              </Row>
            </Grid>
          </Container>
        )}
      />
    )}
  </ThemeConsumer>
)
