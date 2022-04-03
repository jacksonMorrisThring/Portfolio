//Comment form handler
const commentFormHandler = async function(event) {
    event.preventDefault();
    //Selects areas of form
    const postId = document.querySelector('input[na me="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    //fetches the comment
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);