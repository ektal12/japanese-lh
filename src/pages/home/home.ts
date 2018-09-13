import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataStoreProvider } from '../../providers/data-store/data-store';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lessons = [{ directoryName: "", fileName: "", path: "" }]
  assimilFrench = []

  constructor(public navCtrl: NavController, 
    private storage: Storage, 
    private platform: Platform,
    private dataStore: DataStoreProvider
    ) {

      this.dataStore.getCourse().then((res)=> {
        this.assimilFrench = res
      
       })

  }
  
ionViewDidLoad() {
  
}

reviewLesson(lesson, i) {
  
  this.navCtrl.push('ReviewALessonPage', {lesson: lesson, index: i} )
}



}
