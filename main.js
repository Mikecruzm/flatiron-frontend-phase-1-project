console.log('connected')

const generateMemeBtn = document.querySelector(".meme-finder .generate-meme-btn");

const memeImage = document.querySelector(".meme-finder img");
const memeTitle = document.querySelector(".meme-finder .meme-title");
const memeAuthor = document.querySelector(".meme-finder .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme created by: ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
         updateDetails(data.url, data.title, data.author);
        }); 

};

generateMemeBtn.addEventListener("click", generateMeme);


