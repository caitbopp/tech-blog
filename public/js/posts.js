const addPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    console.log(title);
    console.log(content);

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ "title": title, "content": content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const showCreatePost = (event) => {
    event.preventDefault();
    console.log('I was clicked!');
    document.querySelector('.create-new-post').classList.remove('hidden')
};




document
    .querySelector('.new-post-form')
    .addEventListener('submit', addPost);

document
    .querySelector('.new-post')
    .addEventListener('click', showCreatePost);