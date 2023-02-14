import { Component } from '@angular/core';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  contextMenuComponent = ContextMenuComponent;
  uploadFileComponent = UploadFileComponent;
}
