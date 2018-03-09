import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PhotoStr } from '../../photo-str.model';

@Component({
  selector: 'app-preview-pics',
  templateUrl: './preview-pics.component.html',
  styleUrls: ['./preview-pics.component.css']
})
export class PreviewPicsComponent implements OnChanges {

  @Input() photo: PhotoStr;
  
  @Input() seePhoto: boolean = false;

  @Output() closePreview: EventEmitter<boolean> = new EventEmitter<boolean>();

  public url: SafeResourceUrl;
  public urlFull: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/previews/med-' + this.photo.imageName);
    this.urlFull = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/' + this.photo.imageName);
  }

  closePrev(){
    this.closePreview.emit(false);
  }

  download(){
    
  }
}
