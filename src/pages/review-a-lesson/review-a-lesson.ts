import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-review-a-lesson',
  templateUrl: 'review-a-lesson.html',
})
export class ReviewALessonPage {
lesson = []
reviewing = false
thing
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    if(this.navParams.get('lesson')) {
    
      this.lesson = this.navParams.get('lesson').sentences
      
      this.lesson.forEach(item=> {
        
        // if(item.title == 'TRANSLATE-EXERCICES'){

         
          item.sentenceArray = this.splitUpSentence(item.title)
        
        
      
      })
      console.log(this.lesson)
      // this.splitUpSentence('S08-Excusez-moi, messieurs... Et dépêchez-vous')

    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewALessonPage');
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

  wordSelected(word) {
   
    word.selected = true
    word.class = 'red'
  }

  play(i) {
    let audioPlayer = document.getElementById(i) as  HTMLMediaElement
   console.log(audioPlayer)
    // let audioPlayer = element as HTMLMediaElement
    //fix this
    audioPlayer.play()
   
  }

  review(sentence, mode) {
    this.reviewing = !this.reviewing
   let myClass = 'normal'
    if(this.reviewing) {
      if(mode=='blank') {
        myClass = 'blank'
      }
      if (mode=='fade') {
        myClass = 'fade'
      }
      
    }
    sentence.sentenceArray.forEach(item=> {
      if(item.type == "word" && !item.selected) {
        item.class = myClass
      }
    })
  }

  splitUpSentenceOLD(sentence) {
    let output = []
    
    let splitUpWords = new RegExp(/\b(?![-A-zÀ-ÿ])/)
    let step1 = sentence.split(splitUpWords)
   
   
    let removeStart = new RegExp(/(?<![-A-zÀ-ÿ])\b/)
    // let removeStart = new RegExp(/\b/)
    step1.forEach(item => {
      let myPiece = item.split(removeStart)
      myPiece.forEach(piece => {
       
        if(piece.substr(0,1)==" " && piece.length>1) {
          piece = [" ", piece.substr(1)]
        }

        output.push(piece)
      })
    })
   
    return output
    
  }
  
  reviewAll(mode) {
    //don't forget that you have decided NOT TO show the TRANSLATE-EXERCICES sentence so it will complicate the numbering a bit ...
    let sentence = this.lesson[3]
    this.review(sentence, mode)
  }



}


