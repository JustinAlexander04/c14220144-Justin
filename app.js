const container = document.getElementById('posts-container');

async function fetchPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    container.innerHTML = '';
    posts.slice(0, 10).forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <small>Post ID: ${post.id}</small>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = '<p>Failed to fetch posts. Are you offline?</p>';
  }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker Registered!', reg))
      .catch(err => console.log('Service Worker Failed to Register!', err));
  }
  
}

fetchPosts();
