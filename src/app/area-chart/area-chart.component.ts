import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts = Highcharts
  chartOptions = {}
  constructor()
  {
    this.chartOptions = {
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
        }
      },
      xAxis: {
        categories: ['MEARN', 'Python', 'Data Science', 'Testing', 'Flutter', '.NET',
          'Big Data', 'Java Spring', 'AI', 'ML']
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Placements: {point.y}'
      },
      title: {
        text: 'Yearly placement analysis of luminar technolab, January 2022',
        align: 'center'
      },
      subtitle: {
        text: 'Luminar Technolab',
        align: 'center'
      },
      legend: {
        enabled: false
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      series: [{
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
      }]
    }

    // to export chart
    HC_exporting(Highcharts);
  }

}
