import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {
  FitnessServiceProxy,
  NhuCauServiceProxy,
  NhuCauTapLuyenServiceProxy,
} from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-fitness-newss-exp",
  templateUrl: "./fitness-newss-exp.component.html",
  styleUrls: ["./fitness-newss-exp.component.scss"],
})
export class FitnessNewssExpComponent implements OnInit {
  ListNhuCauTL: any;
  nameNhuCau: any;
  ListNhuCau: any;
  ListFitness: any;

  constructor(
    private nhucauTL: NhuCauTapLuyenServiceProxy,
    private route: ActivatedRoute,
    private nhuCau: NhuCauServiceProxy,
    private fitnes: FitnessServiceProxy,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.nameNhuCau = +param["nameNhuCau"];
    });
    this.nhucauTL.getNhCauTLById(this.nameNhuCau).subscribe((res) => {
      this.ListNhuCauTL = res;
      console.log("c", res);
    });
    this.nhuCau.getNhuCau().subscribe((res2) => {
      this.ListNhuCau = res2;
    });
    this.fitnes.getFitness().subscribe((res) => {
      this.ListFitness = res;
      console.log("b", res);
    });
  }

  navigateToNhuCau(id: number) {
    this.router.navigate(["/landingpage/fitness/nhucau/", id]);
    this.nhucauTL.getNhCauTLById(id).subscribe((res) => {
      this.ListNhuCauTL = res;
      console.log("c", res);
    });
  }

  naviateToFitness(id: number) {
    this.router.navigate(["/landingpage/fitness", id]);
  }
}
