$('#newBlog').on('click', function () {
  // fetch('/', {
  //     method: 'POST',
  //     body: JSON.stringify({title: $('#blogTitle').val(), body: $('#blogBody').val() }),
  //     headers: { 'Content-Type': 'application/json' },
  // }).then(function() {
  //     console.log('.then of fetch!!')
  // })
  console.log('clicked');
  document.location.replace('/newBlog');
});
