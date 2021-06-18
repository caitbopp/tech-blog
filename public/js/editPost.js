const editPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const id = event.target.value;

    console.log(title);
    console.log(content);
    console.log(id);

    if (title && content) {
        const response = await fetch(`/api/posts/edit/${id}`, {
            method: 'PUT',
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

const deletePost = async (event) => {
    event.preventDefault();
    const id = event.target.value;

    const response = await fetch(`/api/posts/edit/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};


document
    .querySelector('.update-btn')
    .addEventListener('click', editPost);

document
    .querySelector('.delete-btn')
    .addEventListener('click', deletePost);