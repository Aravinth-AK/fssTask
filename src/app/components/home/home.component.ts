import { Component, OnInit, Renderer, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import { ModalBoxComponent } from '../modal-box/modal-box.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CdkAccordion } from '@angular/cdk/accordion';
import { Data, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  droppedData: string = '';
  tagPayload: any[] = [];
  remoteData:string = 'test';

  @ViewChild('one', { static: false }) d1: ElementRef;

  tagsArray: any = [
    {
      'name': 'text',
      'id': 'input'
    },
    {
      'name': 'select',
      'id': 'select'
    },
    {
      'name': 'checkbox',
      'id': 'checkbox'

    },
    {
      'name': 'radio',
      'id': 'radio'
    },
    {
      'name': 'button',
      'id': 'button'
    }
  ];

  tagsSkeleton: any[] = [
    {
      'name': 'input',
      'value': 'textfield',
      'type': 'text'
    },
    {
      'name': 'select'
    },
    {
      'type': 'checkbox',
      'name': 'checkbox',
      'label':'checkbox'
  },
    {
      'name': 'radio',
      'type': 'radio',
      'label': 'label'

    },
    ,
    {
      'name': 'button',
      'type': 'button',
      'label': 'button'
    }
  ]

  constructor(public dialogRef: MatDialog,
    private elementRef: ElementRef,
    private cd: ChangeDetectorRef,
    private render: Renderer2,
    private data: DataService,
    private router:Router) {

  }

  ngOnInit() {

  }


  onDrop({ dropData }) {
    var rm = document.getElementById(dropData.id);
    rm.remove();

    this.tagsSkeleton.forEach(element => {


      if (element.type == dropData.name || (dropData.name == "select" && element.name == "select")) {
        this.tagPayload.push(element);

        var d1 = this.elementRef.nativeElement.querySelector('.one');
        let type = (dropData.name == "select") ? 'select' : 'input';


        var d = document.createElement(type);
        d.setAttribute('readonly','true');
        var tempEl = element;

        Object.keys(element).forEach((key, index) => {
          d.setAttribute(key, tempEl[key]);
        });
        // const box=this.render.createElement('label');
        // box.htmlFor="checkbox";
        // box.appendChild(this.render.createText('label name'))
        // d1.appendChild(box);

        this.render.listen(d,'dblclick',(event)=>{
          var tagName = event.srcElement.name;
          var payload;
          this.tagPayload.forEach(element => {
            if (element.name == tagName) {
              payload = element;
              return;
            }
          });


    const dialogRef=this.dialogRef.open(ModalBoxComponent, {
      height: '300px',
      width: '400px',
      data: {
        'data': payload
      }
    });

    dialogRef.afterClosed().subscribe(result => {


      this.changeValue(result);
    });
  })
        d1.appendChild(d);
        if (element.label && element.name != "button") {
          let lab = document.createElement('label');
          let labelText = document.createTextNode(element.label);
          lab.setAttribute("for", element.id);
          lab.setAttribute("class", "form-check-label");
          lab.appendChild(labelText);
          d1.appendChild(lab);
        }
        var temp=document.createElement('br');
        d1.appendChild(temp);
      }
    });


    this.droppedData = dropData;
  }





  changeValue(changeLoad) {
    var lastnode;

    Object.keys(changeLoad).forEach((key, index) => {
      //d.setAttribute(key, tempEl[key]);


      this.render.setAttribute(this.elementRef.nativeElement.querySelector('[name='+changeLoad.name+']'), key, changeLoad[key]);

      if(key=='label'){
       let parent= document.getElementsByName(lastnode);
       parent[0].nodeValue="tets";
      }

      lastnode=changeLoad[key];
    });
    this.cd.detectChanges();
  }


  onPublish(){
    this.data.AddElement(this.tagPayload);
    this.router.navigate(['publish']);
  }
}
