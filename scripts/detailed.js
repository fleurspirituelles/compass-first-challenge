function displayDetailedPost() {
    document.addEventListener("DOMContentLoaded", () => {
        const postToDisplay = JSON.parse(localStorage.getItem("postToDisplay"));

        if (postToDisplay) {
            const detailedPost = createDetailedPost(postToDisplay);
            const postContainer = document.getElementById("postsContainer");
            postContainer.appendChild(detailedPost);

            const postComments = getCommentsByPostId(postToDisplay.id);
            const commentsSection = document.getElementById("commentsSection");
            postComments.forEach((comment) => {
                const commentElement = createCommentElement(comment);
                commentsSection.appendChild(commentElement);
            });
        }
    });

    function createDetailedPost(post) {
        const detailedPost = document.createElement("div");
        detailedPost.classList.add("detailedPost");

        const postImageElement = document.createElement("img");
        postImageElement.classList.add("detailedPostImage");
        postImageElement.src = post.imageUrl;

        const postTitleElement = document.createElement("h2");
        postTitleElement.classList.add("detailedPostTitle");
        postTitleElement.textContent = post.title;

        const postContentElement = document.createElement("p");
        postContentElement.classList.add("detailedPostContent");
        postContentElement.textContent = post.body;

        detailedPost.appendChild(postImageElement);
        detailedPost.appendChild(postTitleElement);
        detailedPost.appendChild(postContentElement);

        return detailedPost;
    }

    function getCommentsByPostId(postId) {
        return comments.filter((comment) => comment.postId === postId);
    }

    function createCommentElement(comment) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const commentBody = document.createElement("p");
        commentBody.classList.add("commentBody");

        const commentUsername = comment.email.split("@")[0];

        const usernameSpan = document.createElement("span");
        usernameSpan.classList.add("commentUsername");
        usernameSpan.textContent = commentUsername;

        const emailSpan = document.createElement("span");
        emailSpan.classList.add("commentEmail");
        emailSpan.textContent = comment.email;

        const commentText = document.createElement("span");
        commentText.textContent = comment.body;

        commentBody.appendChild(usernameSpan);
        commentBody.appendChild(document.createTextNode(": "));
        commentBody.appendChild(emailSpan);
        commentBody.appendChild(document.createTextNode(": "));
        commentBody.appendChild(commentText);

        commentElement.appendChild(commentBody);

        return commentElement;
    }
}

displayDetailedPost();
