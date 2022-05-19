import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  regresarLogin(){
    this.router.navigate(["/login"]);
    Swal.fire({
      icon: 'success',
      title: 'Has cerrado sesión correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
