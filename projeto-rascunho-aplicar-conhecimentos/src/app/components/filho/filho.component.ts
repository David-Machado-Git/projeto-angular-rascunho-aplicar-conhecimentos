import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {
  msgNeto: boolean = false;

  constructor() { }


  rec() {
    // alert('Não Acredito!... Funcionou!...')
      this.msgNeto = true
      console.log(`No filho funcionando! ${this.msgNeto}`);

      // window.location.reload();
  }

  ngOnInit(): void {
  }

  // neto.estudar() {

  // }

}
