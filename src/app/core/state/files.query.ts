import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FileStore, FileState } from './files.store';

@Injectable({ providedIn: 'root' })
export class FileQuery extends QueryEntity<FileState> {
  selectNum$ = this.select(state=> {
    return state.num;
  })
  constructor(store: FileStore) {
    super(store);
  }
}