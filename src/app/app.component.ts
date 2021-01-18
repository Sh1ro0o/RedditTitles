import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getPosts();
  }

  title = "Reddit Titles";
  loading = false;
  readonly ROOT_URL_HOT = 'https://www.reddit.com/hot/.json';
  readonly ROOT_URL_NEW = 'https://www.reddit.com/new/.json';
  posts: any;
  decidedSearch = "hot"

  async getPosts(search: ("hot" | "new" | "top") = "hot") {
    this.loading = true;
    try {
      const response = await fetch(`https://www.reddit.com/${search}/.json`);
      console.log(response);
      this.posts = (await response.json()).data.children;
      console.log(this.posts);
    }
    catch(err) {
      throw err;
    }
    finally {
      this.loading = false;
    }
  }
}
