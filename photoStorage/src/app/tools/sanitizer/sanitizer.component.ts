import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Photo } from '../../photo.model';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.css']
})
export class SanitizerComponent implements OnInit {

  @Input() photo: Photo;
  
  public url: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' + this.photo.image);
  }

}
