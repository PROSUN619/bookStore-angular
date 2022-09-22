import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      this.name = queryParam.name;
      console.log(queryParam);
    })
  }

  gotoSignUp(): void {

    this.router.navigate(['/auth/signup']);

    //  this.router.navigate(['/auth/signup']).then((value) =>{
    //     console.log(value);
    //  });
  }

  gotoBookDetail(id: number, authorid: number): void {
    this.router.navigate(['public/book-detail', id, 'author', authorid], {
      queryParams: { authorname: 'My Author', bookname: 'My Book' }
    })
  }

}

