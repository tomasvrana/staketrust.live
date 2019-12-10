import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from '../Link'

const Container = styled.div`
  text-align: center;
  margin: 2rem 0;

  a,
  p {
    display: inline-block;
    vertical-align: middle;
    padding: 0.8rem;
    font-size: 2.4rem;
    margin: 0;
  }

  p {
    font-weight: 600;
  }
`

const Pagination = ({ totalPages, currentPage, getHref, name }) => {
  const pages = []
  let start = currentPage - 2
  while (pages.length < Math.min(totalPages, 3)) {
    if (start >= 1) pages.push(start)
    start++
  }

  return (
    <Container>
      {currentPage > 1 &&
        <Link href={getHref(currentPage - 1)} tracking={{ label: `pagination_${name}_previous_${currentPage}` }}>
          <FaChevronLeft />
        </Link>
      }
      {pages[0] > 1 &&
        <Link href={getHref(1)} tracking={{ label: `pagination_${name}_first_${currentPage}` }}>
          1...
        </Link>
      }
      {pages.length > 1 && pages.map(page => (
        <Fragment key={page}>
          {page === currentPage &&
            <p>
              {page}
            </p>
          }
          {page !== currentPage &&
            <Link href={getHref(page)} tracking={{ label: `pagination_${name}_page_${page}_${currentPage}` }}>
              {page}
            </Link>
          }
        </Fragment>
      ))}
      {pages[pages.length - 1] < totalPages &&
        <Link href={getHref(totalPages)} tracking={{ label: `pagination_${name}_last_${currentPage}` }}>
          ...{totalPages}
        </Link>
      }
      {currentPage < totalPages &&
        <Link href={getHref(currentPage + 1)}>
          <FaChevronRight />
        </Link>
      }
    </Container>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  getHref: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Pagination
