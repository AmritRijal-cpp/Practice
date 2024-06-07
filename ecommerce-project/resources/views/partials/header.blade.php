@stack('style')
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a href="/" id="logo" class="navbar-brand">
            <img src="images/logo.png" alt="Company Logo" class="img-thumbnail">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Laptop
                    </a>
                    <ul class="dropdown-menu">
                        <li class="nav-item dropend">
                            <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Brands
                            </a>
                            <ul class="dropdown-menu" id="brand-submenu">
                                <li><a href="#" class="dropdown-item">Dell</a></li>
                                <li><a href="#" class="dropdown-item">Hp</a></li>
                                <li><a href="#" class="dropdown-item">Lenovo</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Services</a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#" class="dropdown-item">Action 1</a>
                        </li>
                        <li>
                            <a href="#" class="dropdown-item">Action 2</a>
                        </li>
                        <li>
                            <a href="#" class="dropdown-item">Action 3</a>
                        </li>
                    </ul>

                </li>
                <li class="nav-item">
                    <a href="/contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>