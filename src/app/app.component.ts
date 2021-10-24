import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

declare interface BandInfo {
  number: number,
  name: string,
  DLbandClass: string[],
  ULbandCLass: string[],
  sdl?: boolean;
}

export interface PolicyForm {
  bandNumber: number[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faGithub = faGithub;

  submitDisabled: boolean = false;

  bandList: BandInfo[] = [
    { number: 1, name: "Band 1", DLbandClass: ["A", "B", "C"], ULbandCLass: ["A"]},
    { number: 3, name: "Band 3", DLbandClass: ["A", "B", "C"], ULbandCLass: ["A", "C"]},
    { number: 7, name: "Band 7", DLbandClass: ["A", "B", "C", "D"], ULbandCLass: ["A"]},
    { number: 8, name: "Band 8", DLbandClass: ["A", "B"], ULbandCLass: ["A"]},
    { number: 20, name: "Band 20", DLbandClass: ["A"], ULbandCLass: ["A"]},
    { number: 28, name: "Band 28", DLbandClass: ["A", "C"], ULbandCLass: ["A"]},
    { number: 32, name: "Band 32", DLbandClass: ["A"], ULbandCLass: [], sdl: true }
  ]

  formData: PolicyForm = {
    bandNumber: []
  }

  formResult: string |undefined;

  submitForm() {
    this.submitDisabled = true;

    const bands = this.formData.bandNumber;

    let bandsWithClass = [];
    for(let band of bands) {
      let bandWithClass = [];

      let bandInfo = this.bandList.find(b => b.number == band)

      let DLclasses = bandInfo?.DLbandClass
      let ULclasses = bandInfo?.ULbandCLass

      // Set default bandClass to A
      if(DLclasses == undefined) {
        DLclasses = ["A"]
      }
      if(ULclasses == undefined) {
        ULclasses = []
      }

      for(let DLbandClass of DLclasses) {
        for(let ULbandClass of ULclasses) {
          bandWithClass.push(band.toString() + DLbandClass + ULbandClass)
        }
      }

      bandsWithClass.push(bandWithClass)
    }
    console.log(bandsWithClass)

    this.submitDisabled = false;
  }

}
