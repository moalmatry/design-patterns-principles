// creating posts
// commenting posts
// sharing posts
// User: Admin | Regular

interface Post {
  title: string;
  content: string;
}
interface Comments {
  title: string;
  content: string;
}
interface PostCreator {
  createPost(post: Post): void;
}

interface CommentsCreator {
  createComments(comment: Comments): void;
}

interface PostSharer {
  sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentsCreator, PostSharer {
  createPost(post: Post): void {
    console.log("Admin is creating post");
  }
  createComments(comment: Comments): void {
    console.log(`Admin is creating comment`);
  }
  sharePost(post: Post): void {
    console.log(`Admin is sharing post`);
  }
}

class RegularUser implements CommentsCreator, PostSharer {
  createComments(comment: Comments): void {
    console.log(`Regular user is creating comment`);
  }
  sharePost(post: Post): void {
    console.log(`User is sharing post`);
  }
}
