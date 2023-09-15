import { ActivatedRoute, Router } from "@angular/router";
import {
  FitnessServiceProxy,
  NhuCauServiceProxy,
} from "./../../shared/service-proxies/service-proxies";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fitness",
  templateUrl: "./fitness.component.html",
  styleUrls: ["./fitness.component.scss"],
})
export class FitnessComponent implements OnInit {
  ListFitness: any;
  ListNhuCau: any;
  idFitness: any;
  pageSize = 5;
  totalItems = 0;
  currentPage = 1; // Thêm biến đếm số trang
  id = 1;
  p: number = 1;

  constructor(
    private fitnes: FitnessServiceProxy,
    private nhucau: NhuCauServiceProxy,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fitnes.getFitness().subscribe((res) => {
      this.ListFitness = res;
    });
    this.nhucau.getNhuCau().subscribe((res1) => {
      this.ListNhuCau = res1;
      console.log("a", this.ListNhuCau);
    });

    //phân trang
  }

  naviateToFitness(id: number) {
    this.router.navigate(["/landingpage/fitness", id]);
  }

  getDataPage(pageNumber: number): void {
    const skipCount = (pageNumber - 1) * this.pageSize;
    this.fitnes.getFitness().subscribe((res) => {
      this.ListFitness = res.slice(skipCount, skipCount + this.pageSize);
      this.totalItems = res.length;
      this.currentPage = pageNumber;
      this.p = pageNumber;
    });
  }
}
