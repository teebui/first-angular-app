import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `

  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          PAGE NOT FOUND 😱
        </h1>
      </div>
    </div>
  </section>
  `,
  styles: [
  ],
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
