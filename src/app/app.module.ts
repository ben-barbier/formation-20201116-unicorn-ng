import { LayoutModule } from '@angular/cdk/layout';
import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { EditUnicornDialogComponent } from './pages/unicorn-list/unicorn-card/edit-unicorn-dialog/edit-unicorn-dialog.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { AddCapacityComponent } from './shared/dialogs/add-capacity/add-capacity.component';
import { MagicalNamePipe } from './shared/pipes/magical-name.pipe';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        NavComponent,
        EditUnicornDialogComponent,
        MagicalNamePipe,
        AddCapacityComponent,
        UnicornDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'fr' },
        {
            provide: APP_INITIALIZER,
            useFactory: loadTranslations,
            deps: [TranslateService, Injector],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function loadTranslations(translate: TranslateService, injector: Injector): any {
    return () =>
        new Promise<any>((resolve: any) => {
            const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
            locationInitialized.then(() => {
                const langToSet = 'fr';
                translate.setDefaultLang('fr');
                translate.use(langToSet).subscribe(
                    () => console.log(`Successfully initialized '${langToSet}' language.`),
                    () => console.error(`Problem with '${langToSet}' language initialization.`),
                    () => resolve(),
                );
            });
        });
}
