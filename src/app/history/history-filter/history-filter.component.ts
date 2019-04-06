import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
})
export class HistoryFilterComponent implements OnInit {

  selectedPeriod = 'd';
  selectedTypes = [];
  selectedCategories = [];

  timePeriods = [
    {type: 'd', label: 'Day'},
    {type: 'w', label: 'Week'},
    {type: 'M', label: 'Month'}
  ];

  types = [
    {type: 'income', label: 'Income'},
    {type: 'outcome', label: 'Outcome'}
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  private calculateInputParams(field: string, checked: boolean, value: string) {
    if (checked) {
      this[field].indexOf(value) === -1 ? this[field].push(value) : null;
    } else {
      this[field] = this[field].filter(i => i !== value);
    }
  }

  handleChangeType({checked, value}) {
    this.calculateInputParams('selectedTypes', checked, value);
  }

  handleChangeCategory({checked, value}) {
    this.calculateInputParams('selectedCategories', checked, value);
  }

  closeFilter() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  applyFilter() {
    this.modalCtrl.dismiss(
      {
        types: this.selectedTypes,
        categories: this.selectedCategories,
        period: this.selectedPeriod
      },
      'confirm'
    );
  }
}
