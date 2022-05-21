// const API_KEY = "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";

async function getUserInformation(username) {
    const URL = `https://api.github.com/search/users?q=${username}`;

    const response = await fetch(URL);
    const data = await response.json();

    const user = data.items.find((item) => {
        return item.login === username;
    });

    const repos = await (await fetch(user.repos_url)).json();
    user.repos = repos.length;

    return user;
}

export default getUserInformation;