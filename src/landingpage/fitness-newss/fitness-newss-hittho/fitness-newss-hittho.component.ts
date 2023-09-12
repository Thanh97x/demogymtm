import {
  FitnessListServiceProxy,
  FitnessServiceProxy,
  NhuCauServiceProxy,
} from "./../../../shared/service-proxies/service-proxies";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fitness-newss-hittho",
  templateUrl: "./fitness-newss-hittho.component.html",
  styleUrls: ["./fitness-newss-hittho.component.scss"],
})
export class FitnessNewssHitthoComponent implements OnInit {
  idFitness: any;
  ListFitness: any;
  ListFitness1: any;
  parsedData: any;
  ListNhuCau: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fitnes: FitnessServiceProxy,
    private fitnessList: FitnessListServiceProxy,
    private nhuCau: NhuCauServiceProxy
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.idFitness = +param["idFitness"];
    });
    this.fitnes.getFitness().subscribe((res) => {
      this.ListFitness = res;
      console.log("b", res);
    });
    this.fitnessList.getFitnessListById(this.idFitness).subscribe((res1) => {
      this.ListFitness1 = res1;
      console.log("a", res1);
    });
    this.nhuCau.getNhuCau().subscribe((res2) => {
      this.ListNhuCau = res2;
    });
  }
  splitChiTietIntoArray(chiTiet: string): string[] {
    //  debugger
    return chiTiet.split("/");
  }
  navigateToFitness(id: number) {
    this.router.navigate(["/landingpage/fitness/", id]);
    this.fitnessList.getFitnessListById(id).subscribe((res1) => {
      this.ListFitness1 = res1;
      console.log("d", res1);
    });
  }
}
