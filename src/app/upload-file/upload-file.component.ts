import { Component } from '@angular/core';
import { FileService } from '../core/state';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  constructor(private filesService: FileService){}
  isUploadSuccess: string;
  selectedFileName: string;
  selectedFile: File | null;
  selectedTitle: string;

  handleFileInput(files: FileList) {
    this.selectedFile = files.item(0);
    this.selectedFileName = files.item(0).name;
  }

  enterTitle(fileName: string) {
    this.selectedTitle = fileName;
  }
  
  uploadFileToActivity() {
    this.filesService.createFile(this.selectedFile, this.selectedTitle).subscribe(data => {
        this.isUploadSuccess = "הקובץ הועלה בהצלחה"
      }, error => {
        this.isUploadSuccess = "פעולת ההעלאת הקובץ נכשלה"
        console.log(error);
      });
      setTimeout(() => {
        this.isUploadSuccess = '';
      }, 5000);
  }
}
