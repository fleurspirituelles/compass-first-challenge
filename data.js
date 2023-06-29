let posts = [
    {
        id: 0,
        title: "The Beginning",
        imageUrl: "/chay.jpg",
        body: "Chayanne is one of the dragon eggs in the QSMP. After the dragon parent had gone missing, the egg was adopted by Missasinfonia and Phil during the Partner Egg Event on April 3, 2023. He resides in Garden of Hope and Music, a safe basement under Phil's house along with Tallulah, due to her shared home not being reinforced. Chayanne is a white, pixelated egg with two black legs sticking out of its shell. He sports a vibrant yellow duck ring floatie, complete with an orange beak and light brown eyes. According to him, the duck floatie gives him with superpowers. After the kidnappings on April 30, 2023, Chayanne returned home with a crack on his eggshell. After the dragon had gone missing, its eggs were placed in an adoption facility. During the egg event on day 13, Missa and Phil received the same ticket and later retrieved their egg at the adoption center. They named the egg Chayanne and built a small home for it called 'Casa Bonita', which means 'pretty house' in Spanish. Chayanne has had quite an eventful journey despite being well taken care of. His first instance of danger occurred when Slimecicle and JuanaFlippa broke in and attempted to kill him while he was asleep. However, this death is considered non-canonical due to technicalities.",
    },
    {
        id: 1,
        title: "The First Death",
        imageUrl: "/death.jpg",
        body: "On day 16, April 6, 2023, Chayanne lost a life due to parental neglect. This was unintentional, as Philza had completed Chayanne's tasks but was not streaming, so it did not count. Since then has been living on 'Hardcore Mode' ever since, which led to Phil being overprotective and Chayanne becoming the most geared-up egg on the island. Despite being constantly protected, Chayanne has managed to have his own share of experiences. He has met and conversed with other members and eggs and even tamed a cat named Avocado, who has kept the phantoms at bay. One of his most iconic moments was when he committed his first arson and subsequent arsons. Missa also provided Chayanne with the infamous Skeleton armor, which he is frequently seen wearing. Chayanne has also faced challenges like when he and the other eggs were abducted and imprisoned underground, only to be rescued by Foolish and Fit. Chayanne has also showcased his bravery by killing a green dragon at one point.",
    },
    {
        id: 2,
        title: "Chayanne The Chef",
        imageUrl: "/chef.jpg",
        body: "Recently Chayanne has developed a hobby of cooking and will do so at just about every opportunity. His favorite dishes have potatoes but he loves cooking other things, even when it isn't quest related. He was asked to cater for Tallulah's Birthday and Cellbit and Roier's wedding and accepted immediately. Minutes after being asked to cater the wedding Chayanne already had the menu planned out. The menu consisted of an appetizer of cesar salad, a potato soup, Stuffed Pumpkin and Roasted Chicken for the main meal, and Raspberry Trifle for dessert. For Tallulah's birthday, he prepared stuffed pumpkin and sushi for dinner and three pies for cake, as well as the candy for the piñata.",
    },
    {
        id: 3,
        title: "The Beginning",
        imageUrl: "/chay.jpg",
        body: "Chayanne is one of the dragon eggs in the QSMP. After the dragon parent had gone missing, the egg was adopted by Missasinfonia and Phil during the Partner Egg Event on April 3, 2023. He resides in Garden of Hope and Music, a safe basement under Phil's house along with Tallulah, due to her shared home not being reinforced. Chayanne is a white, pixelated egg with two black legs sticking out of its shell. He sports a vibrant yellow duck ring floatie, complete with an orange beak and light brown eyes. According to him, the duck floatie gives him with superpowers. After the kidnappings on April 30, 2023, Chayanne returned home with a crack on his eggshell. After the dragon had gone missing, its eggs were placed in an adoption facility. During the egg event on day 13, Missa and Phil received the same ticket and later retrieved their egg at the adoption center. They named the egg Chayanne and built a small home for it called 'Casa Bonita', which means 'pretty house' in Spanish. Chayanne has had quite an eventful journey despite being well taken care of. His first instance of danger occurred when Slimecicle and JuanaFlippa broke in and attempted to kill him while he was asleep. However, this death is considered non-canonical due to technicalities.",
    },
    {
        id: 4,
        title: "The First Death",
        imageUrl: "/death.jpg",
        body: "On day 16, April 6, 2023, Chayanne lost a life due to parental neglect. This was unintentional, as Philza had completed Chayanne's tasks but was not streaming, so it did not count. Since then has been living on 'Hardcore Mode' ever since, which led to Phil being overprotective and Chayanne becoming the most geared-up egg on the island. Despite being constantly protected, Chayanne has managed to have his own share of experiences. He has met and conversed with other members and eggs and even tamed a cat named Avocado, who has kept the phantoms at bay. One of his most iconic moments was when he committed his first arson and subsequent arsons. Missa also provided Chayanne with the infamous Skeleton armor, which he is frequently seen wearing. Chayanne has also faced challenges like when he and the other eggs were abducted and imprisoned underground, only to be rescued by Foolish and Fit. Chayanne has also showcased his bravery by killing a green dragon at one point.",
    },
    {
        id: 5,
        title: "Chayanne The Chef",
        imageUrl: "/chef.jpg",
        body: "Recently Chayanne has developed a hobby of cooking and will do so at just about every opportunity. His favorite dishes have potatoes but he loves cooking other things, even when it isn't quest related. He was asked to cater for Tallulah's Birthday and Cellbit and Roier's wedding and accepted immediately. Minutes after being asked to cater the wedding Chayanne already had the menu planned out. The menu consisted of an appetizer of cesar salad, a potato soup, Stuffed Pumpkin and Roasted Chicken for the main meal, and Raspberry Trifle for dessert. For Tallulah's birthday, he prepared stuffed pumpkin and sushi for dinner and three pies for cake, as well as the candy for the piñata.",
    },
];
let postsContainer = document.getElementById("postsContainer");
posts.forEach(function (post) {

    let postSection = document.createElement("section");
    let postTitleElement = document.createElement("h3");
    let postImageElement = document.createElement("img");
    let postContentElement = document.createElement("p");
    let expandLinkElement = document.createElement("a");

    postTitleElement.textContent = post.title;
    postImageElement.src = post.imageUrl;
    postContentElement.textContent = post.body;
    expandLinkElement.textContent = "Expand...";
    expandLinkElement.href = "post.html?id=".concat(post.id);

    postSection.classList.add("postSection");
    postImageElement.classList.add("postImage");
    postContentElement.classList.add("postContent");
    expandLinkElement.classList.add("expandLink");

    postSection.appendChild(postImageElement);
    postSection.appendChild(postTitleElement);
    postSection.appendChild(postContentElement);
    postSection.appendChild(expandLinkElement);
    postsContainer.appendChild(postSection);
});
