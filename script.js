// Sample data (simulate fetching from a backend)
const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is my first blog post.' },
    { id: 2, title: 'Second Post', content: 'This is my second blog post.' }
  ];
  
  // Function to display blog posts
  function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
  
    // Clear existing content
    blogPostsContainer.innerHTML = '';
  
    // Create HTML for each blog post
    blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
        <p>${post.content}</p>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
  
  // Display initial blog posts on page load
  document.addEventListener('DOMContentLoaded', displayBlogPosts);
  