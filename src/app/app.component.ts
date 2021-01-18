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
  posts: any;
  decidedSearch = "hot"

  setDecidedSearchAndGetPosts (decidedSearch: 'hot' | 'new' | 'top')
  {
    this.decidedSearch = decidedSearch;
    this.getPosts();
  }

  async getPosts() {
    this.loading = true;
    try {
      const response = await fetch(`https://www.reddit.com/${this.decidedSearch}/.json`);
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
