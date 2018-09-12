import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';



@IonicPage()
@Component({
  selector: 'page-review-a-lesson',
  templateUrl: 'review-a-lesson.html',
})
export class ReviewALessonPage {
lesson = []
lessonIndex
reviewing = false
practiceArray = []
currentItem = 0
@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dataStore: DataStoreProvider
    ) {
    
    if(this.navParams.get('lesson')) {
      this.lesson = this.navParams.get('lesson').sentences  
     
      this.practiceArray = this.createPracticeArray()
    }

    // if(this.navParams.get('index')) {
      this.lessonIndex = this.navParams.get('index')
    // }
    
  }

  wordSelected(i, word) {
    if (word.type == 'word') {
     
      switch (word.class) {
        case 'blank':
          word.class = 'normal';
          break;
        case 'red':
          word.class = 'normal';
          break;
        case 'normal':
          word.class = 'red';
          
          this.dataStore.saveALesson(this.lesson, this.lessonIndex, i)
          break;
        case '':
          word.class = 'red';
        
          this.dataStore.saveALesson(this.lesson, this.lessonIndex, i)
         
          break;
        default:
          word.class = 'normal';
      }
      word.selected = true

    }
  }

  play(i) {
    let audioPlayer = document.getElementById(i) as  HTMLMediaElement
  //  console.log(audioPlayer)
    // let audioPlayer = element as HTMLMediaElement
    //fix this
    audioPlayer.play()
   
  }

  review(sentence, mode) {
  
    // this.reviewing = !this.reviewing
    sentence.reviewing = !sentence.reviewing
   let myClass = 'normal'
    if(sentence.reviewing) {
      if(mode=='blank') {
        myClass = 'blank'
      }
      if (mode=='fade') {
        myClass = 'fade'
      }
      
    }
    sentence.sentenceArray.forEach(item=> {
      if(item.type == "word" && item.class != 'red' ) {
        item.class = myClass
      }
    })
  }

  
  createPracticeArray() {
    let practiceArray = []
    for(var i=0; i<this.lesson.length; i++) {
      practiceArray.push(i)
      this.shuffle(practiceArray)
    }
    return practiceArray
  }


  reviewAll(mode) {
    
    let index = this.practiceArray[this.currentItem]
    let sentence = this.lesson[index]
    this.review(sentence, mode)
    
    if(!sentence.reviewing) {
      //ie we are revealing the sentence
      if(this.currentItem < this.practiceArray.length-1) {
        this.currentItem ++
      } else {
        this.currentItem = 0
        this.lesson.forEach(sentence => {
          sentence.practised = false
        })
        //shuffle them up again
        this.practiceArray = this.createPracticeArray()
        this.scrollTo('0')
      }
      // console.log('revealing')
    } else {
      // ie we are reviewing the sentence
      // console.log('reviewing')
      let scrollPosition = index
      if(index > 2) {
         scrollPosition = index -2
      } 
      
      this.scrollTo(scrollPosition)
      sentence.practised = true
    }

   
   
   
   
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

scrollTo(elementId: string) {

  let y = document.getElementById(elementId).offsetTop;
  this.content.scrollTo(0, y);
}


}


