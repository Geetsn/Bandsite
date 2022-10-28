getNewDate= (date) => 
{
  // let year = date.getFullYear();

  // let month =(1 + date.getMonth()).toString();
  // month = month.length > 1 ? month : '0' + month;

  // let day = date.getDate().toString();
  // day = day.length > 1 ? day : '0' + day;

  // return month + '/' + day + '/' + year;
  return new Date(date).toLocaleDateString("en-US");
}

let mainComment = document.querySelector(".comments")

const getData = function(){
axios
.get(`https://project-1-api.herokuapp.com/comments?api_key=20180084-46da-477c-9452-b765e215d2c4`)
.then(res => {
  console.log(res.data);
  getComment(res.data);
}
)}

getData();

function getComment(array) {
  mainComment.innerHTML= "";
  for (let i = 0; i <= array.length ; i++) {
  array.sort((a,b) =>{
    return new Date(b.timestamp) - new Date(a.timestamp)
  })    


    let name = array[i].name;
    let comment = array[i].comment;
    let date = new Date(array[i].timestamp);
    

    
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

const addComment = document.getElementById("comment-container__form");
addComment.addEventListener('submit', event => {
  event.preventDefault();
  let comment = {
    "name": event.target.fullName.value,
    "comment": event.target.comment.value,
  }
  axios
  .post(`https://project-1-api.herokuapp.com/comments?api_key=20180084-46da-477c-9452-b765e215d2c4`, comment)
  .then(res => {
      console.log(res.data);
      getData(getComment);
      event.target.fullName.value = "";
      event.target.comment.value = "";
    }
  )
})
