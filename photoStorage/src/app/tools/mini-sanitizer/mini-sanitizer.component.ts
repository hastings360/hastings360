import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Photo } from '../../photo.model';

@Component({
  selector: 'app-mini-sanitizer',
  templateUrl: './mini-sanitizer.component.html',
  styleUrls: ['./mini-sanitizer.component.css']
})
export class MiniSanitizerComponent implements OnInit {

  @Input() photo: Photo;
  
  public url: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/temp-icons/mini-' + this.photo.imageName);
  }

}
