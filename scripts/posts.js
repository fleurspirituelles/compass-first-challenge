document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("postsContainer");

    posts.forEach((post) => {
        const postSection = createPostSection(post);
        postSection.addEventListener("click", () => handlePostClick(post));

        postsContainer.appendChild(postSection);
    });
});

function createPostSection(post) {
    const postSection = document.createElement("section");
    postSection.classList.add("postSection");

    const postImageElement = createPostImage(post.imageUrl);
    const postTitleElement = createPostTitle(post.title);
    const postContentElement = createPostContent(post.body);
    const expandLinkElement = createExpandLink(post.id);

    postSection.appendChild(postImageElement);
    postSection.appendChild(postTitleElement);
    postSection.appendChild(postContentElement);
    postSection.appendChild(expandLinkElement);

    return postSection;
}

function createPostImage(imageUrl) {
    const postImageElement = document.createElement("img");
    postImageElement.classList.add("postImage");
    postImageElement.src = imageUrl;
    return postImageElement;
}

function createPostTitle(title) {
    const postTitleElement = document.createElement("h3");
    postTitleElement.classList.add("postTitle");
    postTitleElement.textContent = title;
    return postTitleElement;
}

function createPostContent(content) {
    const postContentElement = document.createElement("p");
    postContentElement.classList.add("postContent");
    postContentElement.textContent = content;
    return postContentElement;
}

function createExpandLink(postId) {
    const expandLinkElement = document.createElement("a");
    expandLinkElement.href = `post.html?id=${postId}`;
    expandLinkElement.classList.add("expandLink");
    expandLinkElement.textContent = "Expand...";
    return expandLinkElement;
}

function handlePostClick(post) {
    localStorage.setItem("postToDisplay", JSON.stringify(post));
    window.location.href = `post.html?id=${post.id}`;
}
