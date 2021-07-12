import { data } from 'node_modules_old/browserslist';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PieDataService } from '../pie-data.service';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  chart : any;
  chartCallback : any;
  updateFromInput = false;

  public options: any = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Titles',
        colorByPoint: true,
        data: []
    }]
  }

  constructor(private dataService: PieDataService) {
    this.chartCallback = chart => {
      this.chart = chart;
    };
  }

  ngOnInit() {
    this.dataService.getChartDataEvent.subscribe(data => {
      this.updateData(data);
    });
  }

  updateData(data) {
    this.options.series = [
      {
        data: data
      }
    ];

    this.updateFromInput = true;
    Highcharts.chart('container', this.options);
  }

  onUpdateData() {
    this.dataService.getChartData();
  }
}
