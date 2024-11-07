import { Component } from '@angular/core';
import { BlogpostsComponent } from '../../components/blogposts/blogposts.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogpostsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
