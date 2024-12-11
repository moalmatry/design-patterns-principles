class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost() {
    // implement logic
  }

  updatePost() {
    // implement logic
  }

  deletePost() {
    // implement logic
  }
}

class BlogPostDisplay {
  constructor(public blogPost: BlogPost) {}

  displayHtml() {
    return `<h1>${this.blogPost.title}</h1><h3>${this.blogPost.content}</h3>`;
  }
}
