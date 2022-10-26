import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { BrainiacInterface } from 'src/app/smart-guys/models/brainiac-interface';

@Injectable({
  providedIn: 'root'
})
export class BrainiacService {

  private readonly GET_ALL_BRAINIACS_URL = 'https://reqres.in/api/users?page=1';
  private readonly DELETE_BRAINIAC_URL = 'https://reqres.in/api/users/<BRAINIAC_ID>';
  private readonly ADD_BRAINIAC_URL = 'https://reqres.in/api/users';
  private readonly EDIT_BRAINIAC_URL = 'https://reqres.in/api/users/2';

  constructor(private httpClient: HttpClient) { }

  getAllBrainiacs(): Observable<BrainiacInterface[]> {
    return this.httpClient.get<BrainiacInterface[]>(this.GET_ALL_BRAINIACS_URL).pipe(
      map((response: any) => {
        let allBrainiacs: BrainiacInterface[] = [];

        for (let brainiacFromBackend of response.data) {
          let brainiac: BrainiacInterface = {
            id: brainiacFromBackend.id,
            firstName: brainiacFromBackend.first_name,
            lastName: brainiacFromBackend.last_name,
            email: brainiacFromBackend.email,
            avatarUrl: brainiacFromBackend.avatar
          };

          allBrainiacs.push(brainiac);
        }

        return allBrainiacs;
      })
    );
  }

  deleteBrainiac(id: number | undefined): Observable<any> {
    let deleteUrl = this.DELETE_BRAINIAC_URL.replace('<BRAINIAC_ID>' , id + '');

    return this.httpClient.delete(deleteUrl);
  }

  addBrainiac(brainiac: BrainiacInterface): Observable<any> {
    let addUrl = this.ADD_BRAINIAC_URL;

    return this.httpClient.post(addUrl, brainiac);
  }

  editBrainiac(brainiac: BrainiacInterface): Observable<any> {
    let editrl = this.EDIT_BRAINIAC_URL;

    return this.httpClient.patch(editrl, brainiac);
  }
}
