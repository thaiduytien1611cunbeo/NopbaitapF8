var database = [
    [
        'https://image.imgcreator.ai/ImgCreator/f712c26befb24a37b7cab7df77ac5427/hq/3e19ec3e-e29c-11ed-8017-0242ac110008_1.webp',
        'Tiêu đề bài viết',
        'Lorem ipsum dolor, sit amet com ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi! uri eaque vnsectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi!',
    ],
    [
        'https://image.imgcreator.ai/ImgCreator/f712c26befb24a37b7cab7df77ac5427/hq/3e19ec3e-e29c-11ed-8017-0242ac110008_1.webp',
        'Tiêu đề bài viết',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi! uri eaque vm quasi! uri eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti exceptTempora ullam id corporis accusamus molestiae corrupti excepturi!',
    ],
    [
        'https://image.imgcreator.ai/ImgCreator/f712c26befb24a37b7cab7df77ac5427/hq/3e19ec3e-e29c-11ed-8017-0242ac110008_1.webp',
        'Tiêu đề bài viết',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi! uri eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti except',
    ],
]

var html = ``;

for (var i = 0; i < database.length; i++) {
    html += `<div class="item">
            <img src="${database[i][0]}">
            <div class="content">
            <h2>${database[i][1]} ${i + 1}</h2>
            <p>${database[i][2]}</p></div>
            </div>
            <hr>`
}

document.write(html);