import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';



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
// thing
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    if(this.navParams.get('lesson')) {
      this.lesson = this.navParams.get('lesson').sentences  
      this.lesson.forEach(item=> { 
          item.sentenceArray = this.splitUpSentence(item.title)
      })
      this.practiceArray = this.createPracticeArray()
      // this.splitUpSentence('S08-Excusez-moi, messieurs... Et dépêchez-vous')
    }

    if(this.navParams.get('index')) {
      this.lessonIndex = this.navParams.get('index')
      console.log(this.lessonIndex)
    }
    
  }

  splitUpSentence(sentence) {
    let output = []
    let splitUpWords = new RegExp(/[\s\t]/)
    let step1 = sentence.split(splitUpWords)
    
    let punctuation = new RegExp(/[!@#$%^&*()=_+|;:",.<>?]/)
    let removePunctuation = new RegExp(/(?=[!@#$%^&*()=_+|;:",.<>?])/)
    step1.forEach(item => {

      let myPiece = item.split(removePunctuation)
      let type = 'word'
      if(myPiece.length == 1) {
       //in case its the last word in a sentence we need to check if that is a punctuation mark
        if(punctuation.test(myPiece[0])) {
          type = 'punctuation'
        }

        let wordObj = {
          text: myPiece[0],
          type: type,
          class: ""
        }
        output.push(wordObj)
      }
      if(myPiece.length > 1) {
        let wordObj = {
          text: myPiece[0],
          type: 'word',
          class: ""
        }
        output.push(wordObj)
        for(var i=1; i<myPiece.length; i++) {
          let punctuationObj = {
            text: myPiece[1],
            type: 'punctuation',
            class: ""
          }
          output.push(punctuationObj)
        }

        
      }


    })

    return output

    // /[!@#$%^&*()-=_+|;':",.<>?']/
  }

  wordSelected(event, word) {
    if (word.type == 'word') {
      console.log(word.class)
      switch (word.class) {
        case 'blank':
          word.class = 'normal';
          break;
        case 'red':
          word.class = 'normal';
          break;
        case 'normal':
          word.class = 'red';
          break;
        case '':
          word.class = 'red';
          console.log(this.lesson)
          break;
        default:
          word.class = 'normal';
      }
      word.selected = true

    }
  }

  play(i) {
    let audioPlayer = document.getElementById(i) as  HTMLMediaElement
   console.log(audioPlayer)
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
      }
      console.log('revealing')
    } else {
      // ie we are reviewing the sentence
      console.log('reviewing')
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


