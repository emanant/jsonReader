import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireStorage } from '@angular/fire/storage';
import jsonData from 'src/assets/content.json';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss'],
})
export class JsonViewerComponent implements OnInit {
  fileRefs: firebase.storage.Reference[] = [];
  files: string[] = [];
  jsonFiles: string[] = [];
  selectedFileRef: firebase.storage.Reference;
  selectedFile: any;
  storageRef = firebase.storage().ref();

  jsonData: any;
  jsonString: string;

  constructor(private storage: AngularFireStorage) {}

  async ngOnInit(): Promise<void> {
    await this.listAll();
    this.listJson();
  }

  async listAll(): Promise<void> {
    console.log('REF:', this.storageRef, this.storage);

    // [START storage_list_all]
    // Create a reference under which you want to list
    var listRef = this.storageRef.child('test/');
    const ref = this.storage.ref('test/');
    console.log('REF:', ref);
    // Find all the prefixes and items.
    // return listRef
    //   .listAll()
    //   .then((res) => {
    //     res.items.forEach((itemRef) => {
    //       // All the items under listRef.
    //       console.log('file', itemRef);
    //       this.files.push(itemRef.name);
    //     });
    //   })
    //   .catch((error) => {
    //     // Uh-oh, an error occurred!
    //   });
    return ref.listAll().forEach((result) =>
      result.items.forEach((item) => {
        this.files.push(item.fullPath);
        this.fileRefs.push(item);
      })
    );
  }

  listJson() {
    console.log('Hi');
    // this.files
    this.fileRefs
      .filter((fileRef) => {
        // console.log(
        //   file,
        //   file.substring(file.lastIndexOf('.') + 1, file.length)
        // );
        return (
          // file.substring(file.lastIndexOf('.') + 1, file.length) === 'json'
          fileRef.fullPath.substring(
            fileRef.fullPath.lastIndexOf('.') + 1,
            fileRef.fullPath.length
          ) === 'json'
        );
      })
      .map((fileRef) => {
        // console.log(file);
        // this.jsonFiles.push(file.substring(file.indexOf('/') + 1, file.length));
        this.jsonFiles.push(
          fileRef.fullPath.substring(
            fileRef.fullPath.indexOf('/') + 1,
            fileRef.fullPath.length
          )
        );
      });
  }

  displayFile(selectedFile: string) {
    let fullPath = `test/${selectedFile}`;
    this.selectedFileRef = this.fileRefs.filter(
      (fileRef) => fileRef.fullPath === fullPath
    )[0];

    this.selectedFile = this.selectedFileRef.getDownloadURL().then((url) => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        var blob = xhr.response;
        blob.text().then((text) => {
          console.log(text);
          this.jsonData = JSON.parse(text);
        });
      };
      xhr.open('GET', url);
      xhr.send();
    });

    console.log('selected', this.selectedFileRef.getDownloadURL);
  }

  displayLocalJson(): void {
    this.jsonData = jsonData;
    this.jsonString = JSON.stringify(jsonData);
  }
}
