import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface IFile {
  name: String;
}

export interface FileState extends EntityState<IFile>{
  num: number;
}

export function createInitialState(): FileState {
  return {
    num: 0,
    name: ""
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'files' })
export class FileStore extends EntityStore<FileState> {
  constructor() {
    super(createInitialState());
  }

  loadFiles(files: IFile[], num: number) {
    this.set(files);
    this.update(state=>({
      ...state,
      num
    }))
  }
}