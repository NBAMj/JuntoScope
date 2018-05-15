import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from 'angularfire2/firestore';

import { environment } from '@env/environment';
import { Faq } from '@models/faq';
import { AppFacade } from './../../state/app.facade';
import { SettingsFacade } from '@app/settings/state/settings.facade';

import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class SettingsService {
  constructor(
    private http: HttpClient,
    private appFacade: AppFacade,
    private afs: AngularFirestore
  ) {}

  getFaqs() {
    return this.appFacade.selectFaqsDocPath$.pipe(
      switchMap(faqsPath => this.afs.collection(faqsPath).stateChanges())
    );
  }
}
