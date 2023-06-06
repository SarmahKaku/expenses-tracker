import { Injectable } from '@angular/core';
import apiUrls from '../shared/urls';

@Injectable({
      providedIn: 'root'
})
export class AppServiceService {
      apiurl = apiUrls;
      constructor() {
            console.log('apiurl',this.apiurl);

       }
}
