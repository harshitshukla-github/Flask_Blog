function like(post_id){
  const likeCount = document.getElementById(`likes-count-${postId}
  `);
  const likeButton = documeny.getElementById(`like-button-${postId}`);

  fetch(`/like-post/${postId}`, { method: "POST" })
  .then((res) => res.json())
  .then((data) => {
    likeCount.innerHTML = data["likes"];
    if (data["liked"] === true) {
      likeButton.className = "fa-light fa-thumbs-up";
    } else {
      likeButton.className = "far fa-thumbs-up";
    }
  })
  .catch((e) => alert("Could not like post."));
}