let form = document.querySelector('form');
let carddiv = document.querySelector('#card');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userurl = 'https://api.github.com/users/' + form.elements.username.value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            console.log(data);
            carddiv.style.display = 'block';
            let userImage = carddiv.querySelector('#user-image');
            let userName = carddiv.querySelector('#user-name');
            let userBio = carddiv.querySelector('#bio');
            let numFollowers = carddiv.querySelector('#followers');
            let numFollowing = carddiv.querySelector('#following');
            let numRepos = carddiv.querySelector('#repos');

            userImage.setAttribute('src', data.avatar_url);
            userName.textContent = data.name;
            userBio.textContent = data.bio;
            numFollowers.textContent = data.followers;
            numFollowing.textContent = data.following;
            numRepos.textContent = data.public_repos;

            form.elements.username.value = '';
        }
    }
    xhr.open('GET', userurl,);
    xhr.send();
});

