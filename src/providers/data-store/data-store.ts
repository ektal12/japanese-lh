
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStoreProvider {

  assimilFrench
// test
  constructor(
    private storage: Storage, 
    private platform: Platform
  ) {
   
}




getCourse() {


  return this.platform.ready().then(()=>{
   
    return this.storage.get('course').then((res)=>{
      if(res) {
        //NB this is a hack to reset the data ... eg when you add a new course
        // this.prepareTheCourse().then(result=> {
        //   this.storage.set('course', result)
        // })
        return this.storage.get('course').then((res)=> {
         return res
        })
      } else {
        this.prepareTheCourse().then(result=> {
          this.storage.set('course', result)
        })
       
      }
    })
  })
}

prepareTheCourse(): Promise<any> {
  let output = []
  
//this is obtained from mp3test node js server
let initialData = [{"album":"ASSIMIL Japanese - L001","sentences":[{"title":"第一課","path":"/assets/audio/L001-Japanese ASSIMIL/N1.mp3"},{"title":"早く。","path":"/assets/audio/L001-Japanese ASSIMIL/S01.mp3"},{"title":"行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/S02.mp3"},{"title":"わかりました。","path":"/assets/audio/L001-Japanese ASSIMIL/S03.mp3"},{"title":"どこ へ。","path":"/assets/audio/L001-Japanese ASSIMIL/S04.mp3"},{"title":"あそこ へ。","path":"/assets/audio/L001-Japanese ASSIMIL/S05.mp3"},{"title":"暑い です ね。","path":"/assets/audio/L001-Japanese ASSIMIL/S06.mp3"},{"title":"そう です ね。","path":"/assets/audio/L001-Japanese ASSIMIL/S07.mp3"},{"title":"TRANSLATE-練習 ","path":"/assets/audio/L001-Japanese ASSIMIL/T00-TRANSLATE.mp3"},{"title":"早く。","path":"/assets/audio/L001-Japanese ASSIMIL/T01.mp3"},{"title":"行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/T02.mp3"},{"title":"早く 行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/T03.mp3"},{"title":"わかりました。","path":"/assets/audio/L001-Japanese ASSIMIL/T04.mp3"}]},{"album":"ASSIMIL Japanese - L002","sentences":[{"title":"第二課","path":"/assets/audio/L002-Japanese ASSIMIL/N2.mp3"},{"title":"ピカソ 展","path":"/assets/audio/L002-Japanese ASSIMIL/S00-TITLE.mp3"},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/S01.mp3"},{"title":"何 を。","path":"/assets/audio/L002-Japanese ASSIMIL/S02.mp3"},{"title":"ピカソ 展。","path":"/assets/audio/L002-Japanese ASSIMIL/S03.mp3"},{"title":"まだ です。","path":"/assets/audio/L002-Japanese ASSIMIL/S04.mp3"},{"title":"いい です よ。","path":"/assets/audio/L002-Japanese ASSIMIL/S05.mp3"},{"title":"そう です か。","path":"/assets/audio/L002-Japanese ASSIMIL/S06.mp3"},{"title":"あした 行きます。","path":"/assets/audio/L002-Japanese ASSIMIL/S07.mp3"},{"title":"TRANSLATE-練習 ","path":"/assets/audio/L002-Japanese ASSIMIL/T00-TRANSLATE.mp3"},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/T01.mp3"},{"title":"まだ 見ません。","path":"/assets/audio/L002-Japanese ASSIMIL/T02.mp3"},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/T03.mp3"},{"title":"見ました。","path":"/assets/audio/L002-Japanese ASSIMIL/T04.mp3"},{"title":"そう です か。","path":"/assets/audio/L002-Japanese ASSIMIL/T05.mp3"}]},{"album":"ASSIMIL Japanese - L003","sentences":[{"title":"第三課","path":"/assets/audio/L003-Japanese ASSIMIL/N3.mp3"},{"title":"朝食","path":"/assets/audio/L003-Japanese ASSIMIL/S00-TITLE.mp3"},{"title":"おはよう ございます。","path":"/assets/audio/L003-Japanese ASSIMIL/S01.mp3"},{"title":"おはよう ございます。","path":"/assets/audio/L003-Japanese ASSIMIL/S02.mp3"},{"title":"パン を 食べます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S03.mp3"},{"title":"食べます。","path":"/assets/audio/L003-Japanese ASSIMIL/S04.mp3"},{"title":"コーヒー を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S05.mp3"},{"title":"飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/S06.mp3"},{"title":"ビール を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S07.mp3"},{"title":"飲みません。","path":"/assets/audio/L003-Japanese ASSIMIL/S08.mp3"},{"title":"りんご を 食ベます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S09.mp3"},{"title":"食ベません。","path":"/assets/audio/L003-Japanese ASSIMIL/S10.mp3"},{"title":"それでは 卵 を 食べます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S11.mp3"},{"title":"食ベます。","path":"/assets/audio/L003-Japanese ASSIMIL/S12.mp3"},{"title":"TRANSLATE-練習 ","path":"/assets/audio/L003-Japanese ASSIMIL/T00-TRANSLATE.mp3"},{"title":"コーヒー を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/T01.mp3"},{"title":"飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/T02.mp3"},{"title":"コーヒー を 飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/T03.mp3"},{"title":"ビール を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/T04.mp3"},{"title":"飲みません。","path":"/assets/audio/L003-Japanese ASSIMIL/T05.mp3"}]},{"album":"ASSIMIL Japanese - L004","sentences":[{"title":"第四課","path":"/assets/audio/L004-Japanese ASSIMIL/N4.mp3"},{"title":"税関","path":"/assets/audio/L004-Japanese ASSIMIL/S00-TITLE.mp3"},{"title":"カメラ を 持って います か。","path":"/assets/audio/L004-Japanese ASSIMIL/S01.mp3"},{"title":"はい、持って います。","path":"/assets/audio/L004-Japanese ASSIMIL/S02.mp3"},{"title":"どこ に あります か。","path":"/assets/audio/L004-Japanese ASSIMIL/S03.mp3"},{"title":"トランク の 中 に あります。","path":"/assets/audio/L004-Japanese ASSIMIL/S04.mp3"},{"title":"トランク の 中 に 何 が あります か。","path":"/assets/audio/L004-Japanese ASSIMIL/S05.mp3"},{"title":"服 と 本 が あります。","path":"/assets/audio/L004-Japanese ASSIMIL/S06.mp3"},{"title":"それ だけ です か。","path":"/assets/audio/L004-Japanese ASSIMIL/S07.mp3"},{"title":"はい、そう です。","path":"/assets/audio/L004-Japanese ASSIMIL/S08.mp3"},{"title":"お 酒?","path":"/assets/audio/L004-Japanese ASSIMIL/S09.mp3"},{"title":"ありません。","path":"/assets/audio/L004-Japanese ASSIMIL/S10.mp3"},{"title":"はい、けっこう です。","path":"/assets/audio/L004-Japanese ASSIMIL/S11.mp3"},{"title":"TRANSLATE-練習 ","path":"/assets/audio/L004-Japanese ASSIMIL/T00-TRANSLATE.mp3"},{"title":"服 を 持って います か。","path":"/assets/audio/L004-Japanese ASSIMIL/T01.mp3"},{"title":"はい、持って います。","path":"/assets/audio/L004-Japanese ASSIMIL/T02.mp3"},{"title":"どこ に あります か。","path":"/assets/audio/L004-Japanese ASSIMIL/T03.mp3"},{"title":"あそこ に あります。","path":"/assets/audio/L004-Japanese ASSIMIL/T04.mp3"}]}]

  initialData.forEach((lesson)=> {
    //create a Lesson object
      let myLesson = {
        album : lesson.album,
        sentences: [],
      }
      // analyse the sentence
      let i = 0
        lesson.sentences.forEach(sentence => {
        
          let sentenceArray = this.splitUpSentence(sentence.title)
         let mySentence = {
           id: "sentence" + i,
           title: sentence.title,
           path: sentence.path,
           sentenceArray: sentenceArray
         }
          
         myLesson.sentences.push(mySentence)
         console.log(i)
         i ++
        })
        //put the lesson Object into the output
        output.push(myLesson)
      
    
   
  })
  return new Promise((resolve, reject) => resolve(output));
}

testPromise(): Promise<any> {
  var PROPERTIES = 8
  return new Promise((resolve, reject) => resolve(PROPERTIES));
}

splitUpSentence(sentence) {
  let output = []
  let splitUpWords = new RegExp(/[\s\t]/)
  let step1 = sentence.split(splitUpWords)
  
  let punctuation = new RegExp(/[!@#$%^&*()=_+|;:",.<>?。、]/)
  let removePunctuation = new RegExp(/(?=[!@#$%^&*()=_+|;:",.<>?。、])/)
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

}

saveALessonTest(lesson, lessonIndex) {
  // console.log(lessonIndex)
    
  this.getCourse()
    .then(myCourse => {

      myCourse[lessonIndex].sentences = lesson
     
      this.storage.set('course', myCourse)
    })
}



  saveALesson(lesson, lessonIndex, sentenceIndex) {
    // console.log(lessonIndex)
    lesson.forEach(sentence => {
      sentence.practised = false
      sentence.reviewing = false
    })
    lesson[sentenceIndex].sentenceArray.forEach(item=>{
      // console.log(item)
      if(item.class != 'red') {
        item.class = "";
      }
    })
    this.getCourse()
      .then(myCourse => {

        myCourse[lessonIndex].sentences = lesson
       
        this.storage.set('course', myCourse)
      })
  }

}
