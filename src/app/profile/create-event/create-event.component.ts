import { Component, OnInit } from '@angular/core';
import { EventCamping } from 'src/app/modal/event';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  name: string;
  description: string;
  place: string;
  date: Date;
  numnberOfDays: number;
  numberMaxOfParticipants: number;
  price: number;
  image: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  createEvent(): void {
    const nb = Math.floor(Math.random() * 31) + 1;
    const event = new EventCamping(
      this.name,
      this.description,
      this.place,
      this.date,
      this.numnberOfDays,
      this.numberMaxOfParticipants,
      this.price,
      `${nb}.jpg`
    );
    console.log(event);
    this.profileService.createEvent(event);
  }
}
