// Burger menus
let isLoggedIn = false;

document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    //Handling Login
    const loginContainer = document.getElementById('login-container');
    const notLoggedInString = ` <a class="mr-2 inline-block px-4 py-3 text-xs text-indigo-600 hover:text-indigo-700 font-semibold leading-none border border-indigo-200 hover:border-indigo-300 rounded" href="./signin.html"> Log In </a>
                        <a class="inline-block px-4 py-3 text-xs font-semibold leading-none bg-indigo-600 hover:bg-indigo-700 text-white rounded" href="./signup.html"> Sign Up </a>`;
    const loggedInString = ` <div class="relative" id="dropdown-button">
                            <div class="flex h-10 w-10 cursor-pointer items-center">
                                <img src="./metis-assets/avatar/male.png" class="h-full w-full rounded-full object-cover object-bottom" alt="" />
                            </div>
                            <div id="dropdown-menu" class="absolute hidden z-50 mt-3 rounded-lg bg-blueGray-50 py-2 shadow-md w-48" style="right: -18px">
                                <ul class="rounded-lg bg-blueGray-50">
                                    <li>
                                        <a href="./profile.html" class="block px-4 py-2 hover:bg-blueGray-100">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-blueGray-100">Change Password</a>
                                    </li>

                                    <li class="w-full">
                                        <button class="w-full block px-4 py-2 hover:bg-blueGray-100 text-left">Sign out</button>
                                    </li>
                                </ul>
                            </div>
                        </div>`;
    if (loginContainer) {
        if (isLoggedIn) {
            loginContainer.innerHTML = loggedInString;
            const dropdownButton = document.getElementById('dropdown-button');
            const dropdownMenu = document.getElementById('dropdown-menu');

            dropdownButton.addEventListener('click', () => {
                if (dropdownMenu.classList.contains('hidden')) {
                    dropdownMenu.classList.remove('hidden');
                } else {
                    dropdownMenu.classList.add('hidden');
                }
            });
        } else {
            loginContainer.innerHTML = notLoggedInString;
        }
    }
});
