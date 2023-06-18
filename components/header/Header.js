import React from "react"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import Link from "next/link"
import Search from "../search/Search"
import AuthContext from "@/context/AuthContext"
import styles from "@/styles/Header.module.css"

const Header = () => {
  const { user, logout } = React.useContext(AuthContext)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>BeerTunes - Alicante</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            // If logged in
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            // if logged out
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt />
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
