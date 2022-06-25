class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` <footer class="px-4 pt-2 w-full flex flex-wrap mt-2 border-t border-gray-200 border-opacity-50">
            <div class="w-full lg:w-1/2 pt-8 px-4 lg:pl-12 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                <a class="w-full mx-auto lg:ml-0 text-3xl font-semibold leading-none flex flex-row items-center justify-center lg:justify-start" href="./">
                    <img class="h-10" src="./metis-assets/images/logo2.svg" alt="" width="auto" />
                    <span class="text-3xl">ritee</span>
                </a>
                <div class="my-6">
                    <p class="mb-4 text-xs text-blueGray-400 text-center lg:text-left">The only marketing newsletter you'll ever need.</p>
                    <div class="flex flex-wrap lg:flex-nowrap items-center mt-4">
                        <div class="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                            <svg class="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <input class="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none" type="text" placeholder="Type your e-mail" />
                        </div>
                        <button class="w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-indigo-600 hover:bg-indigo-700 rounded" type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-4 lg:pt-8 lg:pb-0 lg:pl-12">
                <div class="flex flex-row flex-wrap justify-around gap-y-4">
                    <div class="w-1/2 ">
                        <h5 class="mb-4 text-lg font-bold">About</h5>
                        <ul class="space-y-2">
                            <li><a class="text-blueGray-400 hover:text-blueGray-500" href="./company.html">Company</a></li>
                            <li><a class="text-blueGray-400 hover:text-blueGray-500" href="./team.html">Team</a></li>
                            <li><a class="text-blueGray-400 hover:text-blueGray-500" href="./features.html">Features</a></li>
                        </ul>
                    </div>
                    <div class="w-1/2 ">
                        <h5 class="mb-4 text-lg font-bold">Catalogue</h5>
                        <ul class="space-y-2">
                            <li><a class="text-blueGray-400 hover:text-blueGray-500" href="./pricing.html">Pricing</a></li>
                            <li><a class="text-blueGray-400 hover:text-blueGray-500" href="./contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="block w-full px-8 border-t border-gray-200 border-opacity-50 pb-4 mt-4">
                <div class="flex lg:flex-row justify-between items-center flex-col">
                    <p id="all-rights-reserved" class="text-xs text-blueGray-400 pt-4 lg:pt-2">&copy; ${new Date().getFullYear()}. All rights reserved.</p>
                    <div class="mt-4 flex flex-row gap-x-4 items-center justify-evenly">
                        <a class="" href="https://www.facebook.com/writeeai/">
                            <img src="./metis-assets/icons/facebook-blue.svg" alt="facebook icon" />
                        </a>
                        <a class="" href="https://twitter.com/writeeai">
                            <img src="./metis-assets/icons/twitter-blue.svg" alt="twitter icon" />
                        </a>
                        <a class="" href="https://instagram.com/writeeai">
                            <img src="./metis-assets/icons/instagram-blue.svg" alt="instagram icon" />
                        </a>
                        <a class="" href="https://www.linkedin.com/company/writee-ai/">
                            <img class="h-[22px] w-[22px]" src="./public/metis-assets/icons/linkedin-blue.svg" alt="linkedin icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>`;
    }
}

customElements.define('footer-component', Footer);
