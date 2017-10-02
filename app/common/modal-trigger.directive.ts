import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  private _el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this._el = ref.nativeElement;

  }
  ngOnInit (): void {
    this._el.addEventListener('click', e => this.$('#simple-modal').modal({}));
    this.$('#simple-modal').modal({});
  }

}