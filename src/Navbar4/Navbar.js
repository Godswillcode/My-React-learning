import React from 'react'

function Navbar() {
    return (
       
    <header>
    <div class="logo">
        <img src="./assets/img/logo.png" alt="" />
        <a href="!#" class="header__logo">Ay-Projex</a>
    </div>
    <nav class="nav" id="nav-menu">

        <i class="fas fa-bars header__close" id="nav-close"></i>

        <ul class="nav__list">

            <li class="nav__item"><a href="!#" class="nav__link">Home</a></li>
            <li class="nav__item"><a href="!#" class="nav__link">About</a></li>
            <li class="nav__item"><a href="!#" class="nav__link">Skills</a></li>
            <li class="nav__item"><a href="!#" class="nav__link">Portfolio</a></li>
            <li class="nav__item"><a href="!#" class="nav__link">Contact</a></li>

        </ul>

    </nav>

    <i class="fas fa-times header__toggle" id="nav-toggle"></i>
</header>
    )
}

export default Navbar
