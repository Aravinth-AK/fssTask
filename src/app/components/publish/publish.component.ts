import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
 valueArray=[];
  constructor(private datafetch:DataService,
              private sanitizer:DomSanitizer) { }

  ngOnInit() {
  this.valueArray=this.datafetch.tagPayload;
  }


  onDownload(){

 let serverUrl=this.datafetch.serverUrl;
    this.datafetch.postTemplatePayload(this.valueArray).subscribe((data)=>{
    this.fileDownload(data);
    window.open(serverUrl+'download', 'Download');
  });
  }


  fileDownload(list){


  }
}
