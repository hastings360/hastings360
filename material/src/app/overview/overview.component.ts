import { Component, OnInit, OnChanges, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnChanges, AfterContentChecked{

  dataSource;

  public coverage =
    {
      bd: '10/01/2017',
      ed: '10/01/2018',
      pd: 'Employee Dependent, medicare',
      r: 200,
      nm: 12,
      ab: 2400,
      shpap: 350,
      ahpap: 350,
      db: 'Y'
    };
    public coverage2 =
    {
      bd: '10/01/2017',
      ed: '12/01/2017',
      pd: 'Employee Spouse, medicare',
      r: 200,
      nm: 2,
      ab: 400,
      shpap: 400,
      ahpap: 500,
      db: 'Y'
    };
  public coverages = [this.coverage, this.coverage2];

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnChanges() {

    this.coverages = [this.coverage, this.coverage2];
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  returnTotal(columnName: string): number {
    let total = 0;
    this.coverages.forEach(coverage => {
      if (typeof coverage.ab === 'string') {
        coverage[columnName] = coverage[columnName].replace(/[^A-Z0-9]+/ig, '');
        coverage[columnName] = parseFloat(coverage[columnName]);
        console.log(coverage[columnName]);
      }
      console.log('nr');
      total += coverage[columnName];
    });
    return total;
  }

}
