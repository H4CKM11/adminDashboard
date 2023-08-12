import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-eth-pricing-chart-tablet',
  templateUrl: './eth-pricing-chart-tablet.component.html',
  styleUrls: ['./eth-pricing-chart-tablet.component.css']
})
export class EthPricingChartTabletComponent implements OnInit {

  public chart!: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart()
  {
  
    this.chart = new Chart("MyChart", 
    {
        type: 'line', //this denotes tha type of chart

        data: {// values on X-Axis
          labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                  '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
          datasets: [
            {
              data: ['2100','3200', '3200', '2400', '2400',
                  '1800', '1800', '2400'],
              cubicInterpolationMode: 'monotone',
              borderColor: 'rgba(114,57,234,255)',
              fill: true,
              backgroundColor: (context) => {
                const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.height);
                gradient.addColorStop(0, 'rgba(0, 0, 255, 0.3)');
                gradient.addColorStop(1, 'rgba(0, 0, 255, 0)');
                return gradient;
              },
              tension: 0.8
            }
          ]
        },
        options: 
        {
          aspectRatio: 2.5,
          scales: {
            x: {
              display: false // Hide the X-axis labels
            },
            y:{
              display: false
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
    });

  }
}
