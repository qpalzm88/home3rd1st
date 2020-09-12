import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {

  constructor() { }

  
  @HostListener('keydown.enter', ['$event.target.value']) onEnterPress(value): void {
    const names = JSON.parse(localStorage.getItem('names')) || [];
    names.push(value);
    localStorage.setItem('names', JSON.stringify(names));
  }
}
