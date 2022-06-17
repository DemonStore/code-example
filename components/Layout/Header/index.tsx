import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import {
  ABOUT,
  BLOG,
  COLLECTION4,
  COLLECTION2,
  COLLECTION1,
  CONTACTS,
  SUBCOLLECTION2,
  MAIN,
  SUBCOLLECTION1,
  COLLECTION3,
  COLLECTION5
} from 'data/links'

import styles from './index.module.scss'

class MenuLink {
  constructor(public text: string, public href: string, public subLinks?: MenuLink[]) {}
}

const links: MenuLink[] = [
  new MenuLink(MAIN[0], MAIN[1]),
  new MenuLink(ABOUT[0], ABOUT[1]),
  new MenuLink(COLLECTION1[0], COLLECTION1[1]),
  new MenuLink(COLLECTION2[0], COLLECTION2[1], [
    new MenuLink(SUBCOLLECTION1[0], SUBCOLLECTION1[1]),
    new MenuLink(SUBCOLLECTION2[0], SUBCOLLECTION2[1])
  ]),
  new MenuLink(COLLECTION3[0], COLLECTION3[1]),
  new MenuLink(COLLECTION4[0], COLLECTION4[1]),
  new MenuLink(COLLECTION5[0], COLLECTION5[1]),
  new MenuLink(BLOG[0], BLOG[1]),
  new MenuLink(CONTACTS[0], CONTACTS[1])
]

const Header = () => {
  const { route } = useRouter()

  return (
    <div className="container">
      <Navbar variant="dark" bg="primary" expand="xl">
        <Link href="/" passHref>
          <Navbar.Brand className={styles.logo}>
            <img width={140} src="/images/logo.svg" alt="Логотип" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {links.map((link, index) => {
              const isActive =
                link.href.length === 1 ? route === link.href : route.startsWith(link.href)

              return !link.subLinks ? (
                <Link key={index} href={link.href} passHref>
                  <Nav.Link active={isActive}>
                    {link.text}
                  </Nav.Link>
                </Link>
              ) : (
                <NavDropdown
                  key={index}
                  title={link.text}
                  id={`dropdown-${index}`}
                  active={isActive}
                >
                  {link.subLinks?.map((subLink, subIndex) => (
                    <Link key={`${index}-${subIndex}`} href={subLink.href} passHref>
                      <NavDropdown.Item active={subLink.href === route}>
                        {subLink.text}
                      </NavDropdown.Item>
                    </Link>
                  ))}
                </NavDropdown>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default memo(Header)
