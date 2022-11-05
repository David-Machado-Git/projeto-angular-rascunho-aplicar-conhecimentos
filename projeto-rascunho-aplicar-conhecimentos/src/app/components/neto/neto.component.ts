import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styleUrls: ['./neto.component.scss']
})
export class NetoComponent implements OnInit {
  @Input() msgNeto: any = false



  constructor( ) {
    if (this.msgNeto===true) {
      alert(`O valor da var msgNeto em filho alterou para ${this.msgNeto}`)

    }
  }

  ngOnInit(): void {
    console.log(`O valor da var msgNeto em filho iniciou com valor: ${this.msgNeto}`);

    // this.ativa()

  }

  // ativa() {
  //   if (this.msgNeto===true) {
  //     alert(`O valor da var msgNeto em filho alterou para ${this.msgNeto}`)

  //   }
  // }

}
