import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private _el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this._el = ref.nativeElement;

  }
  ngOnInit (): void {
    this._el.addEventListener('click', e => this.$(`#${this.modalId}`).modal({}));
    this.$(`#${this.modalId}`).modal({});
  }

}