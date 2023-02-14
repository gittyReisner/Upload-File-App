import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService, IFile } from '../core/state';
import { FileQuery } from '../core/state/files.query';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  error$ = this.filesQuery.selectError();
  files$: Observable<IFile[]> = this.filesQuery.selectAll()
  numFiles$: Observable<number> = this.filesQuery.selectNum$;
  countFiles$ = this.filesQuery.getCount();
  isOpen = false;
  environment = environment;

  constructor(private filesQuery: FileQuery, private filesService: FileService) {}
  ngOnInit(){
    this.filesService.getAllFiles().subscribe(result => {console.log(result)})
  }

  onClick(file){
    this.filesService.downloadFile(file);
  }
}
