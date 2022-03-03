import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { Logo } from '../../components/Logo'

import styles from './Header.module.scss'

/**
 * Header Component.
 *
 * @returns {JSX.Element}
 */
function Header (): JSX.Element {
  return (
    <header>
      <Navbar >
        <Container >
          <Nav
            className={[
              'me-auto',
              'justify-content-md-between',
              'flex-grow-1',
            ].join(' ')}
          >
            <Logo />
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                className={styles.navLink}
                to="/"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                className={styles.navLink}
                to="/contact"
              >
                Kontakt
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export {
  Header,
}
