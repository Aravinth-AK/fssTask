import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

export interface DialogData {
  name: string;
  type: string;
}

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent implements OnInit {
inputType=['text','number','email','password'];
changeLoad:any[]=[];
changeVar:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private dataService:DataService) { }

  ngOnInit() {
    this.changeLoad=this.dataService.tagsSkeleton;


    this.changeVar=this.data['data'];



  }


}
