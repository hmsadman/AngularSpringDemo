import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  messagewelcome: string
  name = ''
  errormsg: string
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    //console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage() {
    // console.log (this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      reply => {
        return this.handleSuccessfulResponse(reply);
      },
      errormessage => {
        return this.handleErrorResponse(errormessage)
      }
    );
    console.log("last line of the number 1 ")
    // console.log("get welcome message")
  }

  getWelcomeMessageWithParameter() {
    // console.log (this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      reply => {
        return this.handleSuccessfulResponse(reply);
      },
      errormessage => {
        return this.handleErrorResponse(errormessage)
      }
    );
    console.log("last line of the getwelcomemessage with parameter")
    // console.log("get welcome message")
  }

  handleSuccessfulResponse(reply) {
    this.messagewelcome = reply.message

  }

  handleErrorResponse(errormessage) {
    this.errormsg = errormessage.error.message
  }

}
