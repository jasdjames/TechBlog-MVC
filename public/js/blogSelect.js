$('#newBlog').on('click', function () {
  console.log('clicked');
  document.location.replace('/newBlog');
});

$('#dashboard').on('click', function () {
  document.location.replace('/allBlogs');
  console.log('all blogs clicked');
});

// const allPostH = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#postDiv').value;
//   const body = document.querySelector('#postDive').value;

//   if (title && body) {
//     console.log('ABOUT TO SAVE !!!! doing fetch call!!');
//     const response = await fetch('/api/posts', {
//       method: 'POST',
//       body: JSON.stringify({ title, body }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/allBlogs');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };
