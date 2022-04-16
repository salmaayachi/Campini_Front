import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventComponent } from './upcoming-events/event/event.component';
import { EventsService } from 'src/app/upcoming-events/events.service';
import { TokenInterceptor } from './interceptors/login.interceptor';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileinfoComponent } from './profile/profileinfo/profileinfo.component';
import { UpcomingeventsComponent } from './profile/upcomingevents/upcomingevents.component';
import { PasteventsComponent } from './profile/pastevents/pastevents.component';
import { LayoutComponent } from './profile/upcomingevents/layout/layout.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { CreateEventComponent } from './profile/create-event/create-event.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PastEventsComponent } from './past-events/past-events.component';
import {
  PastEventComponent,
  DialogElementsExampleDialog,
} from './past-events/pastevent/pastevent.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { WhoAreWeComponent } from './about-us/who-are-we/who-are-we.component';
import { OurMissionComponent } from './about-us/our-mission/our-mission.component';

import { EventsComponent } from './upcoming-events/events/events.component';
import { PageComponent } from './upcoming-events/events/page/page.component';
import { FilterComponent } from './upcoming-events/events/filter/filter.component';
import { JoinUsComponent } from './Join-us/join-us/join-us.component';
import { MobileAppComponent } from './mobile-app/mobile-app/mobile-app.component';
import { QuoteComponent } from './quote/quote.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    ToolbarComponent,
    UpcomingEventsComponent,
    EventComponent,
    ProfileComponent,
    ProfileinfoComponent,
    UpcomingeventsComponent,
    PasteventsComponent,
    LayoutComponent,
    EditProfileComponent,
    CreateEventComponent,
    ErrorPageComponent,
    PastEventsComponent,
    PastEventComponent,
    DialogElementsExampleDialog,
    AboutUsComponent,
    WhoAreWeComponent,
    OurMissionComponent,

    EventsComponent,
    PageComponent,
    FilterComponent,
    JoinUsComponent,
    MobileAppComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    EventsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    LoginGuard,
    LogoutGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
