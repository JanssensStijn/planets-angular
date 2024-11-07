import { Component } from '@angular/core';
import { BlogPost } from '../../interfaces/blog-post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogposts',
  standalone: true,
  imports: [],
  templateUrl: './blogposts.component.html',
  styleUrl: './blogposts.component.css'
})
export class BlogpostsComponent {
  blogposts: BlogPost[] ;

  constructor(private blogService: BlogService) {
    this.blogposts = this.blogService.getAllBlogPosts();
  }

  toggleLikePost(post: BlogPost) {
    this.blogService.toggleLikePost(post);
  }
}
