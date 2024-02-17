function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    element.classList.toggle('hidden');

    var eyeIcon = document.getElementById(elementId + '-eye');
    var copyIcon = document.getElementById(elementId + '-copy');
    if (element.classList.contains('hidden')) {
        eyeIcon.style.visibility = 'visible';
        copyIcon.style.visibility = 'hidden';
    } else {
        eyeIcon.style.visibility = 'hidden';
        copyIcon.style.visibility = 'visible';
    }
}

function copyText(elementId) {
    var element = document.getElementById(elementId);
    var text = element.innerText;

    // Create a temporary input element
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);

    // Select and copy the text
    input.select();
    document.execCommand('copy');

    // Remove the temporary input
    document.body.removeChild(input);

    // Alert the user
    alert('Copied: ' + text);
}

function generateAccounts() {
    var button = document.getElementById('generate-button');
    button.innerHTML = 'Generating Accounts...';

    setTimeout(function() {
        button.innerHTML = '3';
        setTimeout(function() {
            button.innerHTML = '2';
            setTimeout(function() {
                button.innerHTML = '1';
                setTimeout(function() {
                    var accounts = document.getElementById('accounts');
                    accounts.innerHTML = '';

                    // Create premium account box
                    var premiumBox = document.createElement('div');
                    premiumBox.className = 'premium-box';

                    // Create title for premium account box
                    var premiumBoxTitle = document.createElement('h1');
                    premiumBoxTitle.className = 'premium-box-title';
                    premiumBoxTitle.innerText = 'Ha Tunnel UDP';
                    premiumBox.appendChild(premiumBoxTitle);

                    // Create account details
                    var accountDetails = document.createElement('div');
                    accountDetails.className = 'account-details';

                    var username = document.createElement('div');
                    username.innerHTML = 'Username: <span id="username" class="hidden">exoweek</span> <img src="https://link.anshbotzone.tech/78228/eye-A.png?hash=56d13d" alt="Show Username" onclick="toggleVisibility(\'username\')" class="eye-icon" id="username-eye"><img src="https://link.anshbotzone.tech/78246/copy.png?hash=c38d53" alt="Copy Username" onclick="copyText(\'username\')" class="copy-icon" id="username-copy">';
                    accountDetails.appendChild(username);

                    var password = document.createElement('div');
                    password.innerHTML = 'Password: <span id="password" class="hidden">12345</span> <img src="https://link.anshbotzone.tech/78228/eye-A.png?hash=56d13d" alt="Show Password" onclick="toggleVisibility(\'password\')" class="eye-icon" id="password-eye"><img src="https://link.anshbotzone.tech/78246/copy.png?hash=c38d53" alt="Copy Password" onclick="copyText(\'password\')" class="copy-icon" id="password-copy"><p>';
                    accountDetails.appendChild(password);

                    var expiry = document.createElement('div');
                    expiry.innerHTML = 'Expiry: 1 day left';
                    accountDetails.appendChild(expiry);

                    premiumBox.appendChild(accountDetails);

                    // Append premium box to accounts div
                    accounts.appendChild(premiumBox);

                    button.style.display = 'none';
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
