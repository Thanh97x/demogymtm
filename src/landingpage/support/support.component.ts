import { MessageService } from 'primeng/api';
import { SupporDto, SupportServiceProxy } from './../../shared/service-proxies/service-proxies';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  providers: [MessageService]
})
export class SupportComponent {
  newSupport: SupporDto = new SupporDto;
  isFormSubmitted: boolean = false;
  isRegistrationSuccess: boolean = false;

  constructor(
    private supportService: SupportServiceProxy,
    private messageService: MessageService,
  ){}

  //tao moi
  createSupport(){
    if (this.isFormValid()) {
      this.supportService.addSupport(this.newSupport).subscribe((res) => {
        console.log('thanh công', res),
        this.isRegistrationSuccess = true;
        this.isFormSubmitted = true;
        this.newSupport = new SupporDto();
        console.log(this.newSupport)

        setTimeout(()=> {
          this.isRegistrationSuccess = false;
          this.isFormSubmitted = false;
        }, 5000);
       
      },(error) => {
        console.log("that bai",error)
        this.isRegistrationSuccess = false;
        this.isFormSubmitted = true;

        setTimeout(()=> {
        this.isRegistrationSuccess = false;
        this.isFormSubmitted = false;
        }, 5000);
      }
      )
    }else {
      this.isRegistrationSuccess = false;
      this.isFormSubmitted = true;

      setTimeout(()=> {
        this.isRegistrationSuccess = false;
        this.isFormSubmitted = false;
      }, 5000);
    }}

    isFormValid():boolean {
      return !!this.newSupport.name && !!this.newSupport.phone && !!this.newSupport.email && !!this.newSupport.address;
    }
}
