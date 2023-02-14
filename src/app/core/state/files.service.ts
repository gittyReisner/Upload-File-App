import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { FileStore, IFile } from './files.store';
import { environment } from 'src/app/environments/environment';

@Injectable({ providedIn: 'root' })
export class FileService {
  http: HttpClient;
  store: FileStore;

  constructor(store: FileStore, http: HttpClient) {
    this.http = http;
    this.store = store;
  }

  getAllFiles(): Observable<IFile[]> {
    return this.http.get<IFile[]>(`${environment.apiURL}/files`).pipe(
      tap(files => {
        this.store.loadFiles({...files}, files.length);
      })
    )
  }

  createFile(fileToUpload: File, selectedTitle: string): Observable<IFile[]> {
    const formData: FormData = new FormData();
    if(selectedTitle) {
      selectedTitle = selectedTitle.concat('.',(fileToUpload.name).split('.')[1]);
      formData.append('attachment', fileToUpload, selectedTitle);
    }
    else {
      formData.append('attachment', fileToUpload, fileToUpload.name);
    }
    return this.http
      .post<File[]>(`${environment.apiURL}/upload`, formData)
      .pipe(
        tap(files => {
            this.store.loadFiles({...files}, files.length);
        }))
  }

  downloadFile(name: string): void {
    this.http.get(`${environment.apiURL}/file/${name}`)
  }
}