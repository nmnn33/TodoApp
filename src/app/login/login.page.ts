import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Creating router
  constructor(private router: Router) { }

  ngOnInit() {
    // Creating variables and making a eventlistener for the button.
    // the self = this thing had to be added so that I could use the routing as otherwise it wouldn't work
    const self = this;
    const element = document.getElementById("button");
    const google = document.getElementById("google");
    google.addEventListener("click", function(){
      document.getElementById("title").innerHTML = "Sign in and start planning!";
      document.getElementById("title").style.color = "#000000";
      self.router.navigate(["/home"])
    });
    element.addEventListener("click", function(){
      //Getting the values of the input fields. Had to use <HTMLionInputElement> as otherwise it wouldn't return a value.
      var i =(<HTMLIonInputElement>document.getElementById("password")).value;
      var j =(<HTMLIonInputElement>document.getElementById("username")).value;
      // Checking if both the password and username fields are empty 
      // If they're empty we change the lower title text to tell you what to do.
      if(j == "" && i == "") {
        document.getElementById("title").innerHTML = "Enter username and password please!";
        console.log("enter username and pw");
        document.getElementById("title").style.color = "#ff0000";
      } else if(i == ""){
        document.getElementById("title").innerHTML = "Enter password please!";
        console.log("enter pw");
        document.getElementById("title").style.color = "#ff0000";
      } else if(j == ""){
        document.getElementById("title").innerHTML = "Enter username please!";
        console.log("enter username");
        document.getElementById("title").style.color = "#ff0000";
      }
       else {
         //Changing the title back to the default title in case it was changed to some other text by the errors previously.
         //This needed to be done as otherwise if you came back to the page it would still display the "Enter X please!" messages.
        document.getElementById("title").innerHTML = "Sign in and start planning!";
        console.log("You entered something in the fields");
        document.getElementById("title").style.color = "#000000";
        //Navigating to the home page with the router.
        self.router.navigate(["/home"])
      }
    });
}
}
