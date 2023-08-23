import { Component, Injector, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: './home.component.html',
  animations: [appModuleAnimation()],
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends AppComponentBase implements OnInit  {
  public chart: any;
  constructor(injector: Injector) {
    super(injector);
  }
  basicOptions: any;
  multiAxisData: any;
  basicData: any;
  data: any;
  chartOptions: any;
  options: any;
  subscription: Subscription;
  config: AppComponentBase;
  height: number = 100;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      //members
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'],
          datasets: [
              {
                  label: '2021',
                  data: [612, 751, 662, 733, 721, 862, 745, 870],
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--orange-500'),
                  tension: 0.4,
                  backgroundColor: 'rgba(255,167,38,0.2)'
              },
              {
                  label: '2022',
                  data: [665, 759, 680, 881, 756, 955, 840, 900],
                  fill: false,
                  tension: 0.4,
                  borderColor: documentStyle.getPropertyValue('--blue-500')
              },
              {
                  label: '2023',
                  data: [700, 750, 700, 821, 801, 927, 1000, 899],
                  fill: false,
                  borderDash: [5, 5],
                  tension: 0.4,
                  borderColor: documentStyle.getPropertyValue('--teal-500')
              },
          ]
      };
      
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };

      //doanh thu
      this.basicData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'],
        datasets: [
            {
                label: '2021',
                backgroundColor: '#FFA726',
                data: [183, 227, 199, 220, 216, 258, 223, 260]
            },
            {
                label: '2022',
                backgroundColor: '#42A5F5',
                data: [199.5, 228, 204, 264, 196, 298, 252, 270]
            },
            
            {
                label: '2023',
                backgroundColor: '#66BB6A',
                data: [210, 227, 210, 246, 240, 278, 300, 270]
            },
            
        ]
    };
    this.multiAxisData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#7E57C2',
                '#66BB6A',
                '#FFCA28',
                '#26A69A'
            ],
            yAxisID: 'y',
            data: [65, 59, 80, 81, 56, 55, 10]
        }, {
            label: 'Dataset 2',
            backgroundColor: '#78909C',
            yAxisID: 'y1',
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };

  }
}
