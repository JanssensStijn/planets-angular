import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogposts: BlogPost[] = [
    {
      title: "The Birth of Stars",
      text: "Discover the fascinating process of star formation in nebulas.",
      imageUrl: "https://spaceholder.cc/i/800x600",
      postDate: "July 12, 2023",
      author: "Dr. Jane Smith",
      readMoreLink: "#",
      liked: false
    },
    {
      title: "Journey to Mars",
      text: "Explore the challenges and goals of human missions to the Red Planet.",
      imageUrl: "https://spaceholder.cc/i/400x300",
      postDate: "March 8, 2024",
      author: "Prof. Mark Johnson",
      readMoreLink: "#",
      liked: false
    },
    {
      title: "Black Holes: Mysteries Unveiled",
      text: "Dive into the enigmatic world of black holes and their powerful forces.",
      imageUrl: "https://spaceholder.cc/i/400x301",
      postDate: "November 23, 2022",
      author: "Dr. Emily Davis",
      readMoreLink: "#",
      liked: false
    },
    {
      title: "The Expanding Universe",
      text: "Learn about the ongoing expansion of the universe and its implications.",
      imageUrl: "https://spaceholder.cc/i/400x303",
      postDate: "January 15, 2024",
      author: "Dr. Robert Brown",
      readMoreLink: "#",
      liked: false
    },
    {
      title: "The Milky Way: Our Galactic Home",
      text: "Take a closer look at our galaxy and its stunning structure.",
      imageUrl: "https://spaceholder.cc/i/400x305",
      postDate: "June 30, 2023",
      author: "Dr. Linda Wilson",
      readMoreLink: "#",
      liked: false
    },
    {
      title: "Exoplanets: New Worlds",
      text: "Discover planets beyond our solar system and the search for alien life.",
      imageUrl: "https://spaceholder.cc/i/400x307",
      postDate: "September 19, 2023",
      author: "Prof. David M.",
      readMoreLink: "#",
      liked: false
    }
  ];

  constructor() { }

  getAllBlogPosts(): BlogPost[] {
    return this.blogposts;
  }

  addNewBlogPost(blogpost: BlogPost): void {
    this.blogposts.push(blogpost);
  }

  toggleLikePost(post: BlogPost) {
    post.liked = !post.liked;
  }
}
