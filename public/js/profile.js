let user1 = {
    personalName: 'William L. Guest',
    personalEmail: 'wec951@safetymail.info',
    personalNumber: '905385031',
    companyName: 'Whixic Technologies',
    companyWebsite: 'www.whixictechnologies.com',
    companyGSTNumber: '18AABCU9603R1ZM',
    facebookURL: 'https://www.facebook.com',
    instagramURL: 'https://www.instagram.com',
    linkedinURL: 'https://www.linkedin.com',
    twitterURL: 'https://www.twitter.com',
    youtubeURL: 'https://www.youtube.com'
};

const informationForm = document.getElementById('information-form');
const formControl = document.querySelectorAll('.form-control');
const formDataShow = document.querySelectorAll('.form-data-show');
const socialMediaControl = document.querySelectorAll('.social-media-control');
const socialMediaDataShow = document.querySelectorAll('.social-media-data-show');
const editButton = document.getElementById('edit-button');
const cancelEditButton = document.getElementById('cancel-edit-button');
const saveChangesButton = document.getElementById('save-changes-button');
const clearFormButton = document.getElementById('clear-form-button');
const personalNameShow = document.getElementById('personal-name-show');
const personalEmailShow = document.getElementById('personal-email-show');
const personalNumberShow = document.getElementById('personal-number-show');
const companyNameShow = document.getElementById('company-name-show');
const companyWebsiteShow = document.getElementById('company-website-show');
const companyGSTShow = document.getElementById('company-gst-show');
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
    personalNameShow.innerText = user1.personalName;
    personalEmailShow.innerText = user1.personalEmail;
    personalNumberShow.innerText = user1.personalNumber;
    companyNameShow.innerText = user1.companyName;
    companyWebsiteShow.innerText = user1.companyWebsite;
    companyGSTShow.innerText = user1.companyGSTNumber;

    socialMediaDataShow.forEach((element) => {
        switch (element.dataset.social) {
            case 'facebook':
                element.childNodes[1].innerText = user1.facebookURL;
                break;
            case 'instagram':
                element.childNodes[1].innerText = user1.instagramURL;
                break;
            case 'linkedin':
                element.childNodes[1].innerText = user1.linkedinURL;
                break;
            case 'twitter':
                element.childNodes[1].innerText = user1.twitterURL;
                break;
            case 'youtube':
                element.childNodes[1].innerText = user1.youtubeURL;
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
            if (element.dataset.personname) {
                element.setAttribute('value', user1.personalName);
            } else if (element.dataset.email) {
                element.setAttribute('value', user1.personalEmail);
            } else if (element.dataset.number) {
                element.setAttribute('value', user1.personalNumber);
            } else if (element.dataset.companyname) {
                element.setAttribute('value', user1.companyName);
            } else if (element.dataset.companywebsite) {
                element.setAttribute('value', user1.companyWebsite);
            } else if (element.dataset.companygst) {
                element.setAttribute('value', user1.companyGSTNumber);
            }
        });
        socialMediaControl.forEach((element) => {
            element.classList.remove('hidden');
            if (element.id === 'facebook') {
                element.setAttribute('value', user1.facebookURL);
            } else if (element.id === 'instagram') {
                element.setAttribute('value', user1.instagramURL);
            } else if (element.id === 'linkedin') {
                element.setAttribute('value', user1.linkedinURL);
            } else if (element.id === 'twitter') {
                element.setAttribute('value', user1.twitterURL);
            } else if (element.id === 'youtube') {
                element.setAttribute('value', user1.youtubeURL);
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
        let submittedInput = {
            personalName: formData.get('name'),
            personalEmail: formData.get('email'),
            personalNumber: formData.get('number'),
            companyName: formData.get('companyName'),
            companyWebsite: formData.get('companyWebsite'),
            companyGSTNumber: formData.get('companyGSTNumber'),
            facebookURL: formData.get('facebook'),
            instagramURL: formData.get('instagram'),
            linkedinURL: formData.get('linkedin'),
            twitterURL: formData.get('twitter'),
            youtubeURL: formData.get('youtube')
        };
        user1 = { ...submittedInput };
        handleEdit();
    } else {
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
