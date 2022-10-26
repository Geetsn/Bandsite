const commentData = [
  {
      name:'Connor Walton',
      commentText:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      date:new Date (2021, 17, 02)
  },
  {
      name:'Emilie Beach',
      commentText:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      date:new Date (2021, 09, 01)
  },
  {
      name:'Miles Acosta',
      commentText:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
      date:new Date (2020, 11, 20)
  }
];

getNewDate= (date) => 
{
  let year = date.getFullYear();

  let month =(1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}

let mainComment = document.querySelector(".comments")

const form = document.querySelector(".comment-container__form");
console.log(form);
form.addEventListener('submit', event => {
event.preventDefault();
const name = event.target.fullName.value;
console.log(name);
const comment = event.target.comment.value;
console.log(comment);
commentData.unshift(
  {
    name:name,
    commentText:comment,
    date: new Date()
  }
)
   mainComment.innerText = "";
  getComment(commentData);
});

function getComment(array) {
  for (let i = 0; i < array.length; i++) {
    let name = array[i].name;
    let comment = array[i].commentText;
    let date = array[i].date;
    
    let commentDetails = document.createElement("div");
    commentDetails.classList.add("comments-details");
    mainComment.appendChild(commentDetails);

    let commentAvatar = document.createElement("div");
    commentAvatar.classList.add("comments-avatar");
    commentDetails.appendChild(commentAvatar);

    let commentParts = document.createElement("div");
    commentParts.classList.add("comments-parts");
    commentDetails.appendChild(commentParts);

    let commentName = document.createElement("div");
    commentName.classList.add("comments-name");
    commentParts.appendChild(commentName);

    let commentHeader = document.createElement("h3");
    commentHeader.classList.add("comments-name__header");
    commentHeader.innerText = name;
    commentName.appendChild(commentHeader);

    let commentDate = document.createElement("p");
    commentDate.classList.add("comments-name__date");
    commentDate.innerText = getNewDate(date);
    commentName.appendChild(commentDate);

    let commentP = document.createElement("p");
    commentP.classList.add("comments-name__parag");
    commentP.innerText = comment;
    commentParts.appendChild(commentP);
    mainComment.appendChild(commentDetails);
  }
}
getComment(commentData);