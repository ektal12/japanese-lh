import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';



@IonicPage()
@Component({
  selector: 'page-review-a-lesson',
  templateUrl: 'review-a-lesson.html',
})
export class ReviewALessonPage {
lesson
lessonSentences = []
lessonIndex
reviewing = false
// practiceArray = []
// currentItem = 0
audio = 'audio'
@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dataStore: DataStoreProvider
    ) {
    
    if(this.navParams.get('lesson')) {
      let myLesson = this.navParams.get('lesson')

      if(!myLesson.practiceArray) {
        myLesson.practiceArray = this.createPracticeArray(myLesson.sentences.length)
        myLesson.currentItem = 0
      }
      this.lesson = myLesson

      console.log(myLesson)
      this.lessonSentences =  this.lesson.sentences  

      
     
      // this.practiceArray = this.createPracticeArray()
      // console.log(this.practiceArray)
    }

    // if(this.navParams.get('index')) {
      this.lessonIndex = this.navParams.get('index')
    // }
    
  }

  ionViewWillLeave() {
    if(this.lesson) {
      this.dataStore.saveALessonTest(this.lessonSentences, this.lessonIndex)
    }
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
          
          // this.dataStore.saveALesson(this.lesson, this.lessonIndex, i)
          this.dataStore.saveALessonTest(this.lessonSentences, this.lessonIndex)
          break;
        case '':
          word.class = 'red';
        
          // this.dataStore.saveALesson(this.lesson, this.lessonIndex, i)
          this.dataStore.saveALessonTest(this.lessonSentences, this.lessonIndex)
         
          break;
        default:
          word.class = 'normal';
      }
      word.selected = true

    }
  }

  play(sentenceId) {
  
    let audioPlayer = document.getElementById(sentenceId) as HTMLMediaElement
  
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

  
  createPracticeArray(length) {
    let practiceArray = []
    for(var i=0; i<length; i++) {
      practiceArray.push(i)
      this.shuffle(practiceArray)
    }
    return practiceArray
  }


  reviewAll(mode) {
    
    let index = this.lesson.practiceArray[this.lesson.currentItem]
    let sentence = this.lessonSentences[index]
    this.review(sentence, mode)
    
    if(!sentence.reviewing) {
      //ie we are revealing the sentence
      sentence.marked = ''
      if(this.lesson.currentItem < this.lesson.practiceArray.length-1) {
        this.lesson.currentItem ++
        this.dataStore.saveALessonTest(this.lessonSentences, this.lessonIndex)
      } else {
        this.lesson.currentItem = 0
        this.lessonSentences.forEach(sentence => {
          sentence.practised = false
        })
        //shuffle them up again
        this.lesson.practiceArray = this.createPracticeArray(this.lesson.sentences.length)
        this.dataStore.saveALessonTest(this.lessonSentences, this.lessonIndex)
        // this.scrollTo('0')
      }
      // console.log('revealing')
    } else {
      // ie we are reviewing the sentence
      // console.log('reviewing')
      sentence.marked = 'red'

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


