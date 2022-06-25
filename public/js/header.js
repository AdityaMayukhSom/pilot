class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="w-full shadow-sm">
                <nav class="flex justify-between items-center py-4 w-full">
                    <a class="text-3xl font-semibold leading-none pl-8 lg:pl-0 lg:min-w-[200px] flex justify-end pr-10" href="./index.html">
                        <img class="w-[76px]" src="./metis-assets/images/logo2.svg" alt="" height="auto" />
                    </a>

                    <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                        <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="./products.html">Product</a></li>
                        <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Company</a></li>
                        <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Features</a></li>
                        <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="./blogs.html">Blogs</a></li>
                        <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="./team.html">Team</a></li>
                        <li><a class="text-sm text-blueGray-400 hover:text-blueGray-500" href="./contact.html">Contact Us</a></li>
                    </ul>
                    <div class="hidden lg:flex min-w-[200px] " id="login-container"></div>
                    <div class="lg:hidden pr-8">
                        <button class="navbar-burger flex items-center py-2 px-3 text-indigo-600 hover:text-indigo-700 rounded border border-indigo-200 hover:border-indigo-300">
                            <svg class="fill-current h-4 w-4" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                    <div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
                    <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                        <div class="flex items-center mb-8">
                            <a class="mr-auto text-3xl font-semibold leading-none" href="./index.html">
                                <img class="h-20" src="./metis-assets/images/logo2.svg" alt="" width="auto" />
                            </a>
                            <button class="navbar-close">
                                <svg class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-indigo-600" href="./products.html">Product</a></li>
                                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-indigo-600" href="#">Company</a></li>
                                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-indigo-600" href="#">Features</a></li>
                                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-indigo-600" href="./blogs.html">Blogs</a></li>
                                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-indigo-600" href="./team.html">Team</a></li>
                                <li class="mb-1"><a class="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-indigo-600" href="./contact.html">Contact Us</a></li>
                            </ul>
                            <div class="mt-2 pt-6 border-t border-blueGray-100">
                                <a class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-indigo-600 hover:bg-indigo-700 text-white rounded" href="./signup.html">Sign Up</a
                                >
                                <a class="block px-4 py-3 mb-2 text-xs text-center text-indigo-600 hover:text-indigo-700 font-semibold leading-none border border-indigo-200 hover:border-indigo-300 rounded" href="./signin.html">Log In</a>
                            </div>
                        </div>
                        <div class="mt-auto">
                            <p class="my-4 text-xs text-blueGray-400">
                                <span>Get in Touch</span>
                                <a class="text-indigo-600 hover:text-indigo-600 underline" href="#">hello@writee.in</a>
                            </p>
                            <a class="inline-block px-1" href="https://www.facebook.com/writeeai/">
                                <img src="./metis-assets/icons/facebook-blue.svg" alt="facebook icon" />
                            </a>
                            <a class="inline-block px-1" href="https://twitter.com/writeeai">
                                <img src="./metis-assets/icons/twitter-blue.svg" alt="twitter icon" />
                            </a>
                            <a class="inline-block px-1" href="https://instagram.com/writeeai">
                                <img src="./metis-assets/icons/instagram-blue.svg" alt="instagram icon" />
                            </a>
                            <a class="inline-block px-1" href="https://www.linkedin.com/company/writee-ai/">
                                <img class="h-[22px] w-[22px]" src="./metis-assets/icons/linkedin-blue.svg" alt="linkedin icon" />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);
