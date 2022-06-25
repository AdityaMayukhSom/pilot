class FAQ extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` <section class="how-to-use mx-8">
            <section class="relative py-8 md:py-16 bg-white min-w-screen animation-fade animation-delay">
                <div class="container px-8 mx-auto sm:px-12 xl:px-5">
                    <p class="text-xs font-bold text-left text-purple-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">Got a Question? We’ve got answers.</p>
                    <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">Frequently Asked Questions</h3>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                        <h3 class="text-lg font-bold text-indigo-700 sm:text-xl md:text-2xl">How does it work?</h3>
                        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">It's rather simple. All you need is to enter what you want your post about and Writee will come up the best content possible. P.S. You may have to try 2-3 times to get the most optimised result.</p>
                    </div>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                        <h3 class="text-lg font-bold text-indigo-700 sm:text-xl md:text-2xl">Do you have an example Quote Type?</h3>
                        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            Yes, we do! <br />
                            Ex 1: Quote on Marketing by Steve Jobs<br />
                            Ex 2: Quote to inspire person for entrepreneurship<br />
                            Ex 3: Quote on physics by Albert Einstein
                        </p>
                    </div>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                        <h3 class="text-lg font-bold text-indigo-700 sm:text-xl md:text-2xl">How do I make changes?</h3>
                        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">The quote generated is editable. Although, we suggest not paraphrasing quotes. :)</p>
                    </div>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                        <h3 class="text-lg font-bold text-indigo-700 sm:text-xl md:text-2xl">Why is AI-Generated Quote Better?</h3>
                        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">It isn’t. Albert Einstein’s quote remains the same, the speed at which you get it reduces manifold.</p>
                    </div>
                </div>
            </section>
        </section>`;
    }
}

customElements.define('faq-component', FAQ);
