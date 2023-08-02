import { error } from 'console';
import { SupporDto, SupportServiceProxy } from './../../shared/service-proxies/service-proxies';
import { Component } from '@angular/core';
// import { SupporDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-support-admin',
  templateUrl: './support-admin.component.html',
  styleUrls: ['./support-admin.component.scss']
})
export class SupportAdminComponent {
  pageSize = 10;
  totalItems = 0;
  currentPage = 1; // Thêm biến đếm số trang
  id=1;
  p: number = 1;

  [x: string]: any
  newSupport: SupporDto = new SupporDto;
  SupporDto: SupporDto = new SupporDto();

  SupporList: any[];
  constructor(
    private supportService: SupportServiceProxy,
  ){}
  ngOnInit(): void {
    this.supportService.getSupport().subscribe((result) => {
      this.SupporList = result;
      this.getDataPage(this.currentPage);
    })
  }
  //delete
  deleteSupport(id: number): void {
    if (confirm("Bạn có muốn chắc xóa id này không?"))
    {
      this.supportService.deleteSupport(id).subscribe((res) => {
      this.getDataPage(1);
      })
    }
  }

  //create
  createSupport(){
    this.supportService.addSupport(this.newSupport).subscribe((res) => {
      console.log('thanh công', res),
      this.newSupport = new SupporDto();
      this.showCreateForm = false;

      this.getDataPage(1); // Cập nhật lại danh sách
    },(error) => {
      console.log("that bai",error)
    }
    )
  }

  hideCreateForm() {
    this.showCreateForm = false;
    this.newSupport = new SupporDto(); // Đặt lại giá trị của newSale về mặc định
  }

  getDataPage(pageNumber: number):void {
    const skipCount = (pageNumber - 1) * this.pageSize;
    this.supportService.getSupport().subscribe((res) => {
      this.SupporList = res.slice(skipCount, skipCount + this.pageSize);
      this.totalItems = res.length;
      this.currentPage = pageNumber;
      this.p = pageNumber;
    });
  }

}
