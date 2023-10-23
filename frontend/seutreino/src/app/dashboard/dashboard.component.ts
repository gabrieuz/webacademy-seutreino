import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { Chart } from 'chart.js';
import {
  MonthlyAnnouncementData,
  ProfessionalsByGender,
  AverageAgeOfProfessionals,
  ActiveAndInactiveAnnouncements,
  AveragePriceOfAnnouncements,
  ClientsByGender,
  AverageAgeOfClients,
} from '../model/dashboard-data';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  monthlyAnnouncementData: MonthlyAnnouncementData[] = [];
  professionalsByGender: ProfessionalsByGender[] = [];
  averageAgeOfProfessionals: number = 0;
  activeAndInactiveAnnouncements: ActiveAndInactiveAnnouncements[] = [];
  averagePriceOfAnnouncements: number = 0;
  clientsByGender: ClientsByGender[] = [];
  averageAgeOfClients: number = 0;
  myChart: Chart | undefined;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getChartData().subscribe((data: any) => {
      this.monthlyAnnouncementData = data.monthlyAnnouncementData;
      this.professionalsByGender = data.professionalsByGender;
      this.averageAgeOfProfessionals = parseFloat(
        data.averageAgeOfProfessionals.average_age
      );
      this.activeAndInactiveAnnouncements = data.activeAndInactiveAnnouncements;
      this.averagePriceOfAnnouncements = parseFloat(
        data.averagePriceOfAnnouncements.average_price
      );
      this.clientsByGender = data.clientsByGender;
      this.averageAgeOfClients = parseFloat(
        data.averageAgeOfClients.average_age
      );
    });
  }

  ngAfterViewInit(): void {
    this.renderBarChart();
    this.renderPieChart();
    this.renderBarChartClients();
    this.renderPieChartAnnouncements();
  }
  
  private renderBarChart(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Mês');
      data.addColumn('number', 'Contagem');

      data.addRows(
        this.monthlyAnnouncementData.map((item) => [
          item.month,
          parseInt(item.count),
        ])
      );

      const options = {
        title: 'Conta mensal de anúncios',
        width: 400,
        height: 300,
      };

      const chart = new google.visualization.BarChart(
        document.getElementById('barChartDiv')
      );
      chart.draw(data, options);
    });
  }

  private renderPieChart(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Gênero');
      data.addColumn('number', 'Contagem');

      data.addRows(
        this.professionalsByGender.map((item) => [
          item.gender,
          parseInt(item.count),
        ])
      );

      const options = {
        title: 'Profissionais por Gênero',
        width: 400,
        height: 300,
      };

      const chart = new google.visualization.PieChart(
        document.getElementById('pieChartDiv')
      );
      chart.draw(data, options);
    });
  }

  private renderBarChartClients(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Gênero');
      data.addColumn('number', 'Contagem');

      data.addRows(
        this.clientsByGender.map((item) => [item.gender, parseInt(item.count)])
      );

      const options = {
        title: 'Clientes por Gênero',
        width: 400,
        height: 300,
      };

      const chart = new google.visualization.BarChart(
        document.getElementById('barChartClientsDiv')
      );
      chart.draw(data, options);
    });
  }

  private renderPieChartAnnouncements(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Status');
      data.addColumn('number', 'Contagem');

      data.addRows(
        this.activeAndInactiveAnnouncements.map((item) => [
          item.isActive === 1 ? 'Ativo' : 'Inativo',
          parseInt(item.count),
        ])
      );

      const options = {
        title: 'Anúncios ativos e inativos',
        width: 400,
        height: 300,
      };

      const chart = new google.visualization.PieChart(
        document.getElementById('pieChartAnnouncementsDiv')
      );
      chart.draw(data, options);
    });
  }
}
