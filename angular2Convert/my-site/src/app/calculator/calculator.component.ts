import { Component, AfterViewInit } from '@angular/core';

declare var math:any

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
      var display = '0';
      //Adds and sorts values to the display variable
      function addToDisplay(x){						
        if(display === '0'){
          display = x;
        }else if((display + x).match(/[*\/\+-][*\/\+-]/)){
          return;
        }else{
          display = display  + x;
        };
        document.getElementById('calc-window').innerHTML = display;
      };
      //Computes variables in display variable using the 'math' package
      function equalCompute(){
        if((display.slice(-1)).match(/[*\/\+-]/)){
          display = display.slice(0,-1);
        };
        var x = math.eval(display);
        document.getElementById('calc-window').innerHTML =  x;//*Insert logic into function
        display = x.toString();
      };
      //Clears the window and sets the display variable to 0
      function clearCompute(){
          document.getElementById('calc-window').innerHTML = '0';
          display = '0';
      };
      //Button click handlers
      document.getElementById('one').onclick = function(){addToDisplay('1');};
      document.getElementById('two').onclick = function(){addToDisplay('2');};
      document.getElementById('three').onclick = function(){addToDisplay('3');};
      document.getElementById('four').onclick = function(){addToDisplay('4');};
      document.getElementById('five').onclick = function(){addToDisplay('5');};
      document.getElementById('six').onclick = function(){addToDisplay('6');};
      document.getElementById('seven').onclick = function(){addToDisplay('7');};
      document.getElementById('eight').onclick = function(){addToDisplay('8');};
      document.getElementById('nine').onclick = function(){addToDisplay('9');};
      document.getElementById('zero').onclick = function(){addToDisplay('0');};
      document.getElementById('decimal').onclick = function(){addToDisplay('.');};
      document.getElementById('clear').onclick = function(){clearCompute();};

      document.getElementById('multiplication').onclick = function(){addToDisplay('*');};
      document.getElementById('divide').onclick = function(){addToDisplay('/');};
      document.getElementById('plus').onclick = function(){addToDisplay('+');};
      document.getElementById('minus').onclick = function(){addToDisplay('-');};
      document.getElementById('equals').onclick = function(){equalCompute();};

      document.getElementById('calc-window').innerHTML = display;//Initially sets window to display variable '0'
  }

}
