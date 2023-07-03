# Compass's First Web Development Challenge

This is the README file for the **Compass's First Web Development Challenge** project.

## Description

The **Compass's First Web Development Challenge** is a web application developed as the inaugural challenge for Front-end interns at Compass Uol. It features a list of posts on the main page, showcasing images, titles, and brief descriptions for each post.

Upon selecting a post, a detailed view page is presented, providing complete post details. The detailed view includes related comments featuring user email information, promoting engagement and interaction.

Designed using modern web technologies, the application offers a visually appealing and user-friendly experience.

## Project Structure

The project has the following structure:

    ├── images
    │   ├── arrow-icon.png
    │   ├── chay.jpg
    │   ├── chef.jpg
    │   ├── death.jpg
    │   └── logomarca.png
    ├── scripts
    │   ├── data.js
    │   ├── detailed.js
    │   └── posts.js
    ├── styles
    │   ├── common.css
    │   ├── detailed.css
    │   └── posts.css
    ├── index.html
    └── post.html

- The `images` directory contains image files used in the project, such as `arrow-icon.png`, `chay.jpg`, `chef.jpg`, `death.jpg`, and `logomarca.png`.
- The `scripts` directory includes JavaScript files for the project: `data.js`, `detailed.js`, and `posts.js`.
- The `styles` directory contains CSS files for styling the project: `common.css`, `detailed.css`, and `posts.css`.
- The `index.html` file represents the main HTML file for the project.
- The `post.html` file represents a separate HTML file for displaying individual blog posts.

## Data Structure

The project relies on the `data.js` script to provide the necessary data for the blog posts and comments. The structure of the data is as follows:

### Posts

The `data.js` script contains an array of post objects, where each object represents a blog post. Each blog post object has the following properties:

- `id` (number): Unique identifier for the post.
- `title` (string): The title of the post.
- `imageUrl` (string): The file name or path to the image associated with the post.
- `body` (string): The content of the post.

### Comments

Each post object in the `data.js` script also contains a `comments` property, which is an array of comment objects. Each comment object represents a user comment on the corresponding post and has the following properties:

- `id` (number): Unique identifier for the comment.
- `postId` (number): The ID of the post to which the comment belongs.
- `email` (string): The email address of the user who posted the comment.
- `body` (string): The content of the comment.

The `data.js` script is responsible for populating the blog posts dynamically on the website, including their associated comments.

## Usage

To use the project, follow the steps below:

1. Clone the repository to your local machine:

    ```git clone https://github.com/fleurspirituelles/compass-first-challenge.git```

2. Navigate to the project directory:

    ```cd compass-first-challenge```

3. Install the required dependencies using npm:

    ```npm install```

4. Start the development server:

    ```npm start```

This command will start the server and make the blog posts and comments available at `http://localhost:3000`.

5. Open your web browser and visit `http://localhost:3000` to view the blog.

## Contributing

If you would like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).
