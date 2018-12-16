import { Component, OnInit } from '@angular/core';
import { Resume } from '../models/Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  public resume: Resume[] = [
    new Resume(1, "assets/img/resume-1.png", "Projection Pertama", "This card has supporting text below as a natural lead-in to additional pertama"),
    new Resume(2, "assets/img/resume-2.png", "ndasdjsad", "dasdausnfeuaf jad;dhaeu adna;uef ajefna;ef jadhua hbadlbdae ladae"),
    new Resume(3, "assets/img/resume-3.png", "Persiem pre", "Kolor deit firh djfur adofir jdfor hdfyeso dfri ladfuea fseiufhs"),
    new Resume(4, "assets/img/resume-4.png", "Kiru Hyrfh sdufr", "adfur aleufhs luihfwpu pediewjf; uedqdeufhpeafi"),

  ];

  constructor() { }

  ngOnInit() {
  }

}
