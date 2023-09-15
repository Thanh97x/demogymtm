import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {
  FontRegisterServiceProxy,
  IntroPtServiceProxy,
  PtGymServiceProxy,
} from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-add-coach",
  templateUrl: "./add-coach.component.html",
  styleUrls: ["./add-coach.component.css"],
})
export class AddCoachComponent implements OnInit {
  ListPtGym: any;
  ListPt: any;
  ListFontRegister: any;
  namePt: any;
  ratingVal: number = 4; // Giá trị mặc định của đánh giá
  pageSize = 10;
  totalItems = 0;
  currentPage = 1; // Thêm biến đếm số trang
  id = 1;
  p: number = 1;

  constructor(
    private route: ActivatedRoute,
    private ptGym: PtGymServiceProxy,
    private introPt: IntroPtServiceProxy,
    private fontRegister: FontRegisterServiceProxy,
    private router: Router
  ) {}

  ratingChanged(event: any) {
    console.log("Rating changed:", event);
    // Xử lý sự kiện khi giá trị đánh giá thay đổi
  }

  ngOnInit(): void {
    this.ptGym.getPtGym().subscribe((res) => {
      this.ListPt = res;
    });
    this.fontRegister.getFontRegister().subscribe((res1) => {
      this.ListFontRegister = res1;
    });
  }

  navigateToPtGym(id: number) {
    this.router.navigate(["/landingpage/coach/", id]);
  }
  getDataPage(pageNumber: number): void {
    const skipCount = (pageNumber - 1) * this.pageSize;
    this.ptGym.getPtGym().subscribe((res) => {
      this.ListPt = res.slice(skipCount, skipCount + this.pageSize);
      this.totalItems = res.length;
      this.currentPage = pageNumber;
      this.p = pageNumber;
    });
  }
}
