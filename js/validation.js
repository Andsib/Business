const patterns = {
    name: new RegExp(/^[a-zA-Z ]+$/),
    email: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    phone: new RegExp(/^\d[\d\(\)\ -]{4,14}\d$/),
}


function submit() {
    let userName = document.querySelector(".name");
    let userEmail = document.querySelector(".email");
    let userPhone = document.querySelector(".phone");
    let submitButton = document.querySelector('.submit');

    submitButton.addEventListener('click', function (event) {
        let submitAllow = true;
        if (!checkData(patterns.name, userName, `Hint: Mary Sole`) ||
            !checkData(patterns.email, userEmail, 'Hint: blok90@gmail.com') ||
            !checkData(patterns.phone, userPhone, 'Hint: 8 (999) 1234567')) {
            if (submitAllow) {
                event.preventDefault();
            }
        } else {
            submitAllow = false;
        }
    });
}

function subscribe() {
    let subscriberName = document.querySelector(".news_input");
    let subscriberEmail = document.querySelector(".news_email");
    let subscribeButton = document.querySelector('.submit_subscriber');

    subscribeButton.addEventListener('click', function (event) {
        let subscribeAllow = true;
        if (!checkData(patterns.name, subscriberName, `Hint: Mary Sole`) ||
            !checkData(patterns.email, subscriberEmail, 'Hint: blok90@gmail.com')) {
            if (subscribeAllow) {
                event.preventDefault();
            }
        } else {
            subscribeAllow = false;
        }
    });
}

function checkData(validation, item, text) {
    let result = validation.test(item.value);
    if (item.value === '' || !result) {
        item.style.border = '1px solid red';
        item.title = text;
        return false;
    } else {
        item.style.border = 'none';
        return true;
    }
}

submit();
subscribe();