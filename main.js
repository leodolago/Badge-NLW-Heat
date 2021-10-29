const userSocialMedia = {
    github: 'leodolago',
    youtub: 'leodolago',
    facebook: 'leodolago',
    instagram: 'leodolago',
    twitter: 'leonardodolago'
}

function changeSocialMediaLinkd() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `http://${social}.com/${userSocialMedia[social]}`;

    }
}

changeSocialMediaLinkd()

function getGithubProfileInfo() {
    const url = `https://api.github.com/users/${userSocialMedia.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        login.textContent = data.login;
        userBio.textContent = data.bio;
        html_url.href = data.html_url;
        avatar.src = data.avatar_url;
    })

}

getGithubProfileInfo()