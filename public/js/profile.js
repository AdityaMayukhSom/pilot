class User {
    constructor(personalName, personalEmail, personalNumber, companyName, companyWebsite, companyGSTNumber, facebookURL, instagramURL, linkedinURL, twitterURL, youtubeURL) {
        this.personalName = personalName;
        this.personalEmail = personalEmail;
        this.personalNumber = personalNumber;
        this.companyName = companyName;
        this.companyWebsite = companyWebsite;
        this.companyGSTNumber = companyGSTNumber;
        this.facebookURL = facebookURL;
        this.instagramURL = instagramURL;
        this.linkedinURL = linkedinURL;
        this.twitterURL = twitterURL;
        this.youtubeURL = youtubeURL;
    }
}

let user = new User('William L. Guest', 'wec951@safetymail.info', '905385031', 'Whixic Technologies', 'www.whixictechnologies.com', '18AABCU9603R1ZM', 'https://www.facebook.com', 'https://www.instagram.com', 'https://www.linkedin.com', 'https://www.twitter.com', 'https://www.youtube.com');

const informationForm = document.getElementById('information-form');
const formControl = document.querySelectorAll('.form-control');
const formDataShow = document.querySelectorAll('.form-data-show');
const socialMediaControl = document.querySelectorAll('.social-media-control');
const socialMediaDataShow = document.querySelectorAll('.social-media-data-show');
const editButton = document.getElementById('edit-button');
const cancelEditButton = document.getElementById('cancel-edit-button');
const saveChangesButton = document.getElementById('save-changes-button');
const clearFormButton = document.getElementById('clear-form-button');
const saveChangesContainer = document.getElementById('save-changes-container');

formControl.forEach((element) => {
    element.classList.add('hidden');
});

socialMediaControl.forEach((element) => {
    element.classList.add('hidden');
});

handleValueShow();
cancelEditButton.classList.add('hidden');

function handleValueShow() {
    formDataShow.forEach((element) => {
        switch (element.id) {
            case 'personal-name-show':
                element.innerText = user.personalName;
                break;
            case 'personal-email-show-container':
                element.childNodes[1].innerText = user.personalEmail;
                break;
            case 'personal-number-show':
                element.innerText = user.personalNumber;
                break;
            case 'company-name-show':
                element.innerText = user.companyName;
                break;
            case 'company-website-show-container':
                element.childNodes[1].innerText = user.companyWebsite;
                break;
            case 'company-gst-show':
                element.innerText = user.companyGSTNumber;
                break;
        }
    });

    socialMediaDataShow.forEach((element) => {
        switch (element.dataset.social) {
            case 'facebook':
                element.childNodes[1].innerText = user.facebookURL;
                break;
            case 'instagram':
                element.childNodes[1].innerText = user.instagramURL;
                break;
            case 'linkedin':
                element.childNodes[1].innerText = user.linkedinURL;
                break;
            case 'twitter':
                element.childNodes[1].innerText = user.twitterURL;
                break;
            case 'youtube':
                element.childNodes[1].innerText = user.youtubeURL;
                break;
        }
    });
}
function handleEdit() {
    if (formControl[0].classList.contains('hidden')) {
        editButton.classList.add('hidden');
        cancelEditButton.classList.remove('hidden');
        saveChangesContainer.classList.remove('hidden');

        formDataShow.forEach((element) => {
            element.classList.add('hidden');
        });
        socialMediaDataShow.forEach((element) => {
            element.classList.add('hidden');
        });

        formControl.forEach((element) => {
            element.classList.remove('hidden');
            switch (element.dataset.info) {
                case 'personalName':
                    element.setAttribute('value', user.personalName);
                    break;
                case 'personalEmail':
                    element.setAttribute('value', user.personalEmail);
                    break;
                case 'personalNumber':
                    element.setAttribute('value', user.personalNumber);
                    break;
                case 'companyName':
                    element.setAttribute('value', user.companyName);
                    break;
                case 'companyWebsite':
                    element.setAttribute('value', user.companyWebsite);
                    break;
                case 'companyGST':
                    element.setAttribute('value', user.companyGSTNumber);
                    break;
            }
        });
        socialMediaControl.forEach((element) => {
            element.classList.remove('hidden');
            switch (element.id) {
                case 'facebook':
                    element.setAttribute('value', user.facebookURL);
                    break;
                case 'instagram':
                    element.setAttribute('value', user.instagramURL);
                    break;
                case 'linkedin':
                    element.setAttribute('value', user.linkedinURL);
                    break;
                case 'twitter':
                    element.setAttribute('value', user.twitterURL);
                    break;
                case 'youtube':
                    element.setAttribute('value', user.youtubeURL);
                    break;
                default:
                    break;
            }
        });
    } else {
        formControl.forEach((element) => {
            element.classList.add('hidden');
        });
        formDataShow.forEach((element) => {
            element.classList.remove('hidden');
        });
        socialMediaControl.forEach((element) => {
            element.classList.add('hidden');
        });
        socialMediaDataShow.forEach((element) => {
            element.classList.remove('hidden');
        });
        editButton.classList.remove('hidden');
        cancelEditButton.classList.add('hidden');
        saveChangesContainer.classList.add('hidden');
        handleValueShow();
    }
}

editButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    handleEdit();
});

cancelEditButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    handleEdit();
});

informationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(informationForm);
    if (formData.get('name') || formData.get('email') || formData.get('number') || formData.get('companyName') || formData.get('companyWebsite') || formData.get('companyGSTNumber')) {
        //creates temporary object

        let submittedUserInformation = new User(
            formData.get('name'),
            formData.get('email'),
            formData.get('number'),
            formData.get('companyName'),
            formData.get('companyWebsite'),
            formData.get('companyGSTNumber'),
            formData.get('facebook'),
            formData.get('instagram'),
            formData.get('linkedin'),
            formData.get('twitter'),
            formData.get('youtube')
        );
        user = { ...submittedUserInformation };
        handleEdit();
    } else {
        //If personal and company form is empty, show alert and do nothing.
        alert('Personal And Company information Cannot Be Empty!');
    }
});

clearFormButton.addEventListener('click', () => {
    formControl.forEach((element) => {
        element.setAttribute('value', '');
    });
    socialMediaControl.forEach((element) => {
        element.setAttribute('value', '');
    });
});
