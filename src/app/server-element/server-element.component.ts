import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('svrElement') element: {type: string, name:string, content: string}
  @Input() name: string
  @ViewChild('heading') header: ElementRef
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
    console.log('Constructor Called!')
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges')
    console.log('Changes>>>', changes)
  }
  ngOnInit() {
    console.log('ngOnInit Called!')
    console.log('Text Content>>>',this.header.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck Called')
  }
  ngAfterContentInit(){
    console.log('AfterContentInit')
    console.log('CONTENTINIT >>>>', this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked')
  }

  ngAfterViewInit(){
    console.log('AfterViewInit')
    console.log('Text Content>>>',this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked')
  }

  ngOnDestroy(){
    console.log('OnDestroy')
  }

}
