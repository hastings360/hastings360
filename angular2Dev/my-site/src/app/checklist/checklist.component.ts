import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChecklistComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
 
    var main = function(){
	
        /*To clear '.input' upon reload*/
        $('.input').val('');
        
        /*To disable '.btn' upon load/reload*/
        $('.btn').addClass('disabled');
        
        $('.btn').click(function(){
          var input = $('.input').val();
          if(input.length > 0 && input.length < 41){
            $('<li>').text(input).appendTo('.checklist-items');
            $('.input').val('');
            $('.limit').text('40');
            $('.btn').addClass('disabled');
          }else{
            return;
          }
        });
        
        $('.input').keyup(function(){
          var limitUse = $(this).val().length;
          var limitCount = 40 - limitUse;
          $('.limit').text(limitCount);
              
          if(limitCount == 40 || limitCount < 0){
            $('.btn').addClass('disabled');
          }else{
            $('.btn').removeClass('disabled');
          };
        });
        
        $('ul').on('dblclick','li',function(){
            $(this).remove();
        });
        
      };

      $(document).ready(main);
  }

}
