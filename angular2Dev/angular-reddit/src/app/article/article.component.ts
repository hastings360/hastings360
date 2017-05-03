import { Article } from './article.model';
import { Input, Component, OnInit ,HostBinding} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }
  
  ngOnInit() {
  }

}
