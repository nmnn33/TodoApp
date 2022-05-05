import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    const self = this;
    const element = document.getElementById("button");
    element.addEventListener("click", function(){
      var i =(<HTMLIonInputElement>document.getElementById("password")).value;
      var j =(<HTMLIonInputElement>document.getElementById("username")).value;

      if(j == "" && i == "") {
        document.getElementById("title").innerHTML = "Enter username and password please!";
        console.log("enter username and pw");
      } else if(i == ""){
        document.getElementById("title").innerHTML = "Enter password please!";
        console.log("enter pw");
      } else if(j == ""){
        document.getElementById("title").innerHTML = "Enter username please!";
        console.log("enter username");
      }
       else {
        document.getElementById("title").innerHTML = "Sign in and start planning!";
        console.log("You entered something in the fields");
        self.router.navigate(["/home"])
      }
    });
}
}
