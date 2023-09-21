import {
  CalenderServiceProxy,
  DanhSachDangKy,
} from "./../../shared/service-proxies/service-proxies";
import {
  Component,
  Injector,
  ChangeDetectionStrategy,
  OnInit,
  SimpleChanges,
  OnChanges,
  ChangeDetectorRef,
} from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import { appModuleAnimation } from "@shared/animations/routerTransition";
import { Subscription } from "rxjs";
import { DSDKServiceProxy } from "@shared/service-proxies/service-proxies";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { debug, log } from "console";
const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue("--text-color");
const textColorSecondary = documentStyle.getPropertyValue(
  "--text-color-secondary"
);
const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
@Component({
  templateUrl: "./home.component.html",
  animations: [appModuleAnimation()],
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends AppComponentBase implements OnInit {
  ListDSDK: number[];
  ListDSNTT: number[];
  ListTNTN: number;
  ListTDTTN: string;
  basicOptions: {
    plugins: { legend: { labels: { color: string } } };
    scales: {
      y: {
        beginAtZero: boolean;
        ticks: { color: string };
        grid: { color: string; drawBorder: boolean };
      };
      x: {
        ticks: { color: string };
        grid: { color: string; drawBorder: boolean };
      };
    };
  };
  ListCalender: number[];
  ListTongCalender: any;
  constructor(
    injector: Injector,
    private dsdk: DSDKServiceProxy,
    private cdr: ChangeDetectorRef,
    private calender: CalenderServiceProxy
  ) {
    super(injector);
  }
  data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [],
        fill: false,
        tension: 0.4,
        borderColor: documentStyle.getPropertyValue("--blue-500"),
      },
      // {
      //   label: "Second Dataset",
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   fill: false,
      //   borderDash: [5, 5],
      //   tension: 0.4,
      //   borderColor: documentStyle.getPropertyValue("--teal-500"),
      // },
      // {
      //   label: "Third Dataset",
      //   data: [12, 51, 62, 33, 21, 62, 45],
      //   fill: true,
      //   borderColor: documentStyle.getPropertyValue("--orange-500"),
      //   tension: 0.4,
      //   backgroundColor: "rgba(255,167,38,0.2)",
      // },
    ],
  };
  basicData1 = {
    labels: [
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q1",
      "Q2",
      "Q3",
      "Q4",
    ],
    datasets: [
      {
        label: "Sales",
        data: [],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(171, 29, 29, 0.2)",
          "rgba(211, 168, 45, 0.2)",
          "rgba(129, 219, 14, 0.2)",
          "rgba(59, 255, 152, 0.2)",
          "rgba(41, 224, 202, 0.2)",
          "rgba(41, 131, 224, 0.2)",
          "rgba(133, 41, 224, 0.2)",
          "rgba(219, 22, 200, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(171, 29, 29 )",
          "rgb(211, 168, 45)",
          "rgb(129, 219, 14)",
          "rgb(59, 255, 152)",
          "rgb(41, 224, 202)",
          "rgb(41, 131, 224)",
          "rgb(133, 41, 224)",
          "rgb(219, 22, 200)",
        ],
        borderWidth: 1,
      },
    ],
  };
  basicData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August ",
      "September ",
      "October ",
      "November ",
      "December ",
    ],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: documentStyle.getPropertyValue("--blue-500"),
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: [50, 25, 12, 48, 56, 76, 42],
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: documentStyle.getPropertyValue("--green-500"),
        data: [21, 84, 24, 75, 37, 65, 34],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: documentStyle.getPropertyValue("--orange-500"),
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  };
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    // tổng doanh thu
    this.dsdk.tongTienTheoThang(2023).subscribe((res) => {
      if (res) {
        this.ListDSDK = Object.values(res);
        // this.basicData.datasets[0].data = this.ListDSDK;
        let b = {
          labels: [
            "tháng 1",
            "tháng 2",
            "tháng 3",
            "tháng 4",
            "tháng 5",
            "tháng 6",
            "tháng 7",
            "tháng 8 ",
            "tháng 9 ",
            "tháng 10 ",
            "tháng 11 ",
            "tháng 12 ",
          ],
          datasets: [
            // {
            //   type: "bar",
            //   label: "Dataset 1",
            //   borderColor: documentStyle.getPropertyValue("--blue-500"),
            //   borderWidth: 2,
            //   fill: false,
            //   tension: 0.4,
            //   data: this.ListDSDK,
            // },
            {
              type: "bar",
              label: "2023",
              backgroundColor: documentStyle.getPropertyValue("--green-500"),
              data: this.ListDSDK,
              borderColor: "white",
              borderWidth: 2,
            },
            // {
            //   type: "bar",
            //   label: "Dataset 3",
            //   backgroundColor: documentStyle.getPropertyValue("--orange-500"),
            //   data: [41, 52, 24, 74, 23, 21, 32],
            // },
          ],
        };
        this.basicData = b;
        this.cdr.detectChanges();
      } else {
        console.log("Không có dữ liệu hợp lệ trong res");
      }
      console.log("basicData", this.basicData);
    });

    //tổng số người
    this.dsdk.tongNguoiTheoThang(2023).subscribe((res1) => {
      if (res1) {
        this.ListDSNTT = Object.values(res1);
        let a = {
          labels: [
            "tháng 1",
            "tháng 2",
            "tháng 3",
            "tháng 4",
            "tháng 5",
            "tháng 6",
            "tháng 7",
            "tháng 8 ",
            "tháng 9 ",
            "tháng 10 ",
            "tháng 11 ",
            "tháng 12 ",
          ],
          datasets: [
            {
              label: "2023",
              data: this.ListDSNTT,
              fill: false,
              tension: 0.4,
              borderColor: documentStyle.getPropertyValue("--blue-500"),
            },
            // {
            //   label: "2022",
            //   data: [28, 48, 40, 19, 35, 27, 65, 40, 19, 35, 27, 50],
            //   fill: false,
            //   borderDash: [5, 5],
            //   tension: 0.4,
            //   borderColor: documentStyle.getPropertyValue("--teal-500"),
            // },
            // {
            //   label: "2021",
            //   data: [12, 51, 62, 33, 21, 62, 45, 12, 51, 62, 33, 55],
            //   fill: false,
            //   borderColor: documentStyle.getPropertyValue("--orange-500"),
            //   tension: 0.4,
            //   backgroundColor: "rgba(255,167,38,0.2)",
            // },
          ],
        };
        this.data = a;
        // this.data.datasets[0].data = this.ListDSNTT;
        this.cdr.detectChanges();
      } else {
        console.log("Không có dữ liệu hợp lệ trong res1");
      }
      console.log("data", this.data);
    });

    //tổng người sử dụng calender mỗi tháng
    this.calender.nguoiSDThang(2023).subscribe((res4) => {
      if (res4) {
        this.ListCalender = Object.values(res4);
        let c = {
          labels: [
            "tháng 1",
            "tháng 2",
            "tháng 3",
            "tháng 4",
            "tháng 5",
            "tháng 6",
            "tháng 7",
            "tháng 8 ",
            "tháng 9 ",
            "tháng 10 ",
            "tháng 11 ",
            "tháng 12 ",
          ],
          datasets: [
            {
              label: "2023",
              data: this.ListCalender,
              backgroundColor: [
                "rgba(255, 159, 64, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(171, 29, 29, 0.2)",
                "rgba(211, 168, 45, 0.2)",
                "rgba(129, 219, 14, 0.2)",
                "rgba(59, 255, 152, 0.2)",
                "rgba(41, 224, 202, 0.2)",
                "rgba(41, 131, 224, 0.2)",
                "rgba(133, 41, 224, 0.2)",
                "rgba(219, 22, 200, 0.2)",
              ],
              borderColor: [
                "rgb(255, 159, 64)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(171, 29, 29 )",
                "rgb(211, 168, 45)",
                "rgb(129, 219, 14)",
                "rgb(59, 255, 152)",
                "rgb(41, 224, 202)",
                "rgb(41, 131, 224)",
                "rgb(133, 41, 224)",
                "rgb(219, 22, 200)",
              ],
              borderWidth: 1,
            },
          ],
        };
        this.basicData1 = c;
        this.cdr.detectChanges();
      } else {
        console.log("không có dữ liệu trong res4");
      }
      console.log("calender", res4);
    });

    //tổng người trong năm
    this.dsdk.tongNguoiTongNam(2023).subscribe((res2) => {
      this.ListTNTN = res2;
      this.cdr.detectChanges();
      console.log("người", res2);
    });

    // tổng doanh thu trong năm
    this.dsdk.tongDoanhThuNam(2023).subscribe((res3) => {
      this.ListTDTTN = res3;
      this.cdr.detectChanges();
      console.log("tiền", res3);
    });

    // tổng học viên tích cực trong năm
    this.calender.tongHVTrongNam(2023).subscribe((res5) => {
      this.ListTongCalender = res5;
    });

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
