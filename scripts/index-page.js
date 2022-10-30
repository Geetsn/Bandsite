getNewDate= (date) => 
{
  return new Date(date).toLocaleDateString("en-US");
}

let mainComment = document.querySelector(".comments");

const getData = function(){
axios
.get(`https://project-1-api.herokuapp.com/comments?api_key=20180084-46da-477c-9452-b765e215d2c4`)
.then(res => {
  console.log(res.data);
  const array = res.data;

  mainComment.innerHTML= "";
  //sorting array by date
  array.sort((a,b) =>{
    return new Date(b.timestamp) - new Date(a.timestamp)
  })   

  for (let i = 0; i <= array.length ; i++) {

    let name = array[i].name;
    let comment = array[i].comment;
    let date = new Date(array[i].timestamp);
    let id = array[i].id;
  
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

  // like and delete button
    const likeAndDltBtnContainer = document.createElement('div');
    likeAndDltBtnContainer.classList.add("comments-name__parag_btnContainer");
  
  // Like button and event listener
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("comments-name__parag_likeB");
    if (array[i].likes > 0) {
      likeBtn.innerHTML = "👍🏻" + array[i].likes;
    }else {
      likeBtn.innerHTML = "👍🏻" ;
    }
    likeBtn.addEventListener("click", () => {
      axios.put(`https://project-1-api.herokuapp.com/comments/${id}/like?api_key=20180084-46da-477c-9452-b765e215d2c4`).then(res => {
        console.log(res);
        getData();
      }).catch(err => {
        console.log(err);
      });
    })

    // Delete button 
    const dltBtn = document.createElement("DeleteBtn");
    dltBtn.classList.add("comment-name__parag_dltBtn");
    dltBtn.innerHTML = "ⓧ" ;
    dltBtn.addEventListener("click",() => {
      axios.delete(`https://project-1-api.herokuapp.com/comments/${id}?api_key=20180084-46da-477c-9452-b765e215d2c4`).then(res => {
        console.log(res);
        getData();
      }).then(err => {
        console.log(err);
      })
    })
    
    likeAndDltBtnContainer.appendChild(likeBtn);
    likeAndDltBtnContainer.appendChild(dltBtn);
    commentParts.appendChild(likeAndDltBtnContainer);
  } 
  
}).catch(err =>{
  console.log(err);
})
}

getData();

// Posting new comment
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
      getData();
      event.target.fullName.value = "";
      event.target.comment.value = "";
    }
  )
})

