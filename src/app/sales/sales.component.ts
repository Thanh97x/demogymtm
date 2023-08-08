import { Router } from '@angular/router';
import { CreateRoleDialogComponent } from './../roles/create-role/create-role-dialog.component';
import { SaleDto } from './../../shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { Component, Injector } from '@angular/core';
import { RoleDto, SaleServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateSalesComponent } from './create-sales/create-sales.component';
import { EditSalesComponent } from './edit-sales/edit-sales.component';
import { result } from 'lodash-es';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent   {
  pageSize = 10;
  totalItems = 0;
  id=1;
  p: number = 1;

  [x: string]: any;
  newSale: SaleDto = new SaleDto();
  SaleDto: SaleDto = new SaleDto();
  SaleList:any[];
  constructor(
    private saleservice:SaleServiceProxy,
    private router: Router,
    ){}
  ngOnInit(): void {
    this.getDataPage(1);
    this.saleservice.getSales().subscribe((result) => {
      this.SaleList = result;
    });
}

//delete
protected deleteSale(id: number): void {
  if (confirm('Bạn có muốn chắc xóa id này không?')) {
    this.saleservice.delete(id).subscribe((res) => {
      console.log(res);
      // Xóa thành công, thực hiện refresh lại trang
      this.getDataPage(1);
    });
  }
}

//create
createSale(){
  // this.showCreateForm = true;
  this.saleservice.addAyns(this.newSale)
  .subscribe(
    (res) => {
      console.log("thanh cong",res)
      this.newSale = new SaleDto(); 
      this.showCreateForm = false;
      this.getDataPage(1);
    },
    (error) => {
      console.log("that bai",error)
    }
  );
}

hideCreateForm() {
  this.showCreateForm = false;
  this.newSale = new SaleDto(); // Đặt lại giá trị của newSale về mặc định
}

getDataPage(pageNumber: number): void {
  const skipCount = (pageNumber - 1) * this.pageSize;
  this.saleservice.getSales().subscribe((result) => {
    this.SaleList = result;
    this.totalItems = result.length;
    this.p = pageNumber;
  });
}

// refresh(): void {
//   // Dùng router để navigat lại cùng route, sẽ tái tải trang
//   this.router.navigateByUrl('/sales', { skipLocationChange: true }).then(() => {
//     this.router.navigate(['sales']);
//   });
// }

}
