import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.router.navigate(["/home"]);
    Swal.fire({
      icon: 'success',
      title: 'Has iniciado sesión correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }
  

}
