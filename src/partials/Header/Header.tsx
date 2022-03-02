import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

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
          <Nav className={['me-auto', styles.navWrapper].join(' ')}>
            <Logo />
            <Nav.Link
              className={styles.navLink}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              href="#features"
            >
              Features
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              href="#pricing"
            >
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export {
  Header,
}
