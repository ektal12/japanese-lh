
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
   

    //this is obtained from mp3test node js server
  let initialData = [{"album":"ASSIMIL French - L001","sentences":[{"title":"PREMIÈRE LEÇON","path":"/assets/audio/L001-French ASSIMIL/French-L001-N1.mp3"},{"title":"À Paris","path":"/assets/audio/L001-French ASSIMIL/French-L001-S00-TITLE.mp3"},{"title":"Pardon, madame. Où est le métro Saint-Michel ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S01.mp3"},{"title":"Le métro Saint-Michel ? Attendez une minute...","path":"/assets/audio/L001-French ASSIMIL/French-L001-S02.mp3"},{"title":"Nous sommes au boulevard Saint-Michel. La fontaine est là-bas.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S03.mp3"},{"title":"Oui, d'accord. Mais où est le métro, s'il vous plaît ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S04.mp3"},{"title":"Mais bien sûr ! Voilà la Seine, et voici le pont.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S05.mp3"},{"title":"C'est joli ; mais s'il vous plaît...","path":"/assets/audio/L001-French ASSIMIL/French-L001-S06.mp3"},{"title":"Ce n'est pas à gauche, alors c'est à droite.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S07.mp3"},{"title":"Voilà. Le métro est à droite !","path":"/assets/audio/L001-French ASSIMIL/French-L001-S08.mp3"},{"title":"Mais vous êtes sûre ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S09.mp3"},{"title":"Non. Je suis touriste aussi !","path":"/assets/audio/L001-French ASSIMIL/French-L001-S10.mp3"},{"title":"Je suis à Paris ; nous sommes à Paris.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T01.mp3"},{"title":"Vous êtes sûr ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-T02.mp3"},{"title":"Attendez une minute, s'il vous plaît.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T03.mp3"},{"title":"Voilà la fontaine et voici le métro.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T04.mp3"},{"title":"Mais bien sûr !","path":"/assets/audio/L001-French ASSIMIL/French-L001-T05.mp3"}]},{"album":"ASSIMIL French - L002","sentences":[{"title":"DEUXIÈME LEÇON","path":"/assets/audio/L002-French ASSIMIL/N2.mp3"},{"title":"Au magasin","path":"/assets/audio/L002-French ASSIMIL/S00-TITLE.mp3"},{"title":"S'il vous plaît, madame, est-ce qu'il est cher, ce chapeau ?","path":"/assets/audio/L002-French ASSIMIL/S01.mp3"},{"title":"Non, il n'est pas cher. Le prix est très raisonnable.","path":"/assets/audio/L002-French ASSIMIL/S02.mp3"},{"title":"Bon. Et... Où sont les gants ?","path":"/assets/audio/L002-French ASSIMIL/S03.mp3"},{"title":"Les gants sont là-bas. Vous voyez ?","path":"/assets/audio/L002-French ASSIMIL/S04.mp3"},{"title":"Ah, merci... Mais, est-ce qu'ils sont en laine ?","path":"/assets/audio/L002-French ASSIMIL/S05.mp3"},{"title":"Non, ils ne sont pas en laine, ils sont en acrylique.","path":"/assets/audio/L002-French ASSIMIL/S06.mp3"},{"title":"Bon. Euh... est-ce qu'il est cinq heures ?","path":"/assets/audio/L002-French ASSIMIL/S07.mp3"},{"title":"Comment ? Ah, je comprends, vous attendez votre mari !","path":"/assets/audio/L002-French ASSIMIL/S08.mp3"},{"title":"Oui, c'est ça... et... il pleut dehors, alors...","path":"/assets/audio/L002-French ASSIMIL/S09.mp3"},{"title":"Non, madame... Il n'est pas cinq heures !","path":"/assets/audio/L002-French ASSIMIL/S10.mp3"},{"title":"Est-ce que vous êtes sûr ?","path":"/assets/audio/L002-French ASSIMIL/T01.mp3"},{"title":"Est-ce qu'il est cher, ce chapeau ?","path":"/assets/audio/L002-French ASSIMIL/T02.mp3"},{"title":"Est-ce que vous voyez la fontaine ?","path":"/assets/audio/L002-French ASSIMIL/T03.mp3"},{"title":"Il n'est pas cinq heures.","path":"/assets/audio/L002-French ASSIMIL/T04.mp3"},{"title":"Est-ce que le prix est raisonnable ?","path":"/assets/audio/L002-French ASSIMIL/T05.mp3"}]},{"album":"ASSIMIL French - L003","sentences":[{"title":"TROISIÈME LEÇON","path":"/assets/audio/L003-French ASSIMIL/N3.mp3"},{"title":"Au café","path":"/assets/audio/L003-French ASSIMIL/S00-TITLE.mp3"},{"title":"Messieurs, vous désirez ?","path":"/assets/audio/L003-French ASSIMIL/S01.mp3"},{"title":"Deux cafés, s'il vous plaît, et deux croissants chauds.","path":"/assets/audio/L003-French ASSIMIL/S02.mp3"},{"title":"Ah... vous êtes Anglais ? Oui, je suis de London, pardon, Londres.","path":"/assets/audio/L003-French ASSIMIL/S03.mp3"},{"title":"Mais vous parlez bien le français. Merci, vous êtes gentil.","path":"/assets/audio/L003-French ASSIMIL/S04.mp3"},{"title":"Nous, les Français, nous sommes tous gentils !","path":"/assets/audio/L003-French ASSIMIL/S05.mp3"},{"title":"Pardon messieurs, voici les cafés et les tartines beurrées.","path":"/assets/audio/L003-French ASSIMIL/S06.mp3"},{"title":"Et alors ? Où sont les croissants ?","path":"/assets/audio/L003-French ASSIMIL/S07.mp3"},{"title":"Excusez-moi, messieurs... Et dépêchez-vous !","path":"/assets/audio/L003-French ASSIMIL/S08.mp3"},{"title":"Alors, vous êtes sûr qu'ils sont toujours gentils, les Français ?","path":"/assets/audio/L003-French ASSIMIL/S09.mp3"},{"title":"Vous parlez bien le français.","path":"/assets/audio/L003-French ASSIMIL/T01.mp3"},{"title":"Deux cafés, s'il vous plaît.","path":"/assets/audio/L003-French ASSIMIL/T02.mp3"},{"title":"Voici les cafés et les croissants.","path":"/assets/audio/L003-French ASSIMIL/T03.mp3"},{"title":"Ah, vous êtes Anglais ? Oui, c'est ça.","path":"/assets/audio/L003-French ASSIMIL/T04.mp3"},{"title":"Est-ce que vous êtes toujours gentil ?","path":"/assets/audio/L003-French ASSIMIL/T05.mp3"}]}]

//  this.prepareTheCourse().then(res=> {console.log(res)})

this.prepareTheCourse().then(res=>console.log( res))
}




getCourse() {
   let initialData = [{"album":"ASSIMIL French - L001","sentences":[{"title":"PREMIÈRE LEÇON","path":"/assets/audio/L001-French ASSIMIL/French-L001-N1.mp3"},{"title":"À Paris","path":"/assets/audio/L001-French ASSIMIL/French-L001-S00-TITLE.mp3"},{"title":"Pardon, madame. Où est le métro Saint-Michel ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S01.mp3"},{"title":"Le métro Saint-Michel ? Attendez une minute...","path":"/assets/audio/L001-French ASSIMIL/French-L001-S02.mp3"},{"title":"Nous sommes au boulevard Saint-Michel. La fontaine est là-bas.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S03.mp3"},{"title":"Oui, d'accord. Mais où est le métro, s'il vous plaît ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S04.mp3"},{"title":"Mais bien sûr ! Voilà la Seine, et voici le pont.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S05.mp3"},{"title":"C'est joli ; mais s'il vous plaît...","path":"/assets/audio/L001-French ASSIMIL/French-L001-S06.mp3"},{"title":"Ce n'est pas à gauche, alors c'est à droite.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S07.mp3"},{"title":"Voilà. Le métro est à droite !","path":"/assets/audio/L001-French ASSIMIL/French-L001-S08.mp3"},{"title":"Mais vous êtes sûre ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S09.mp3"},{"title":"Non. Je suis touriste aussi !","path":"/assets/audio/L001-French ASSIMIL/French-L001-S10.mp3"},{"title":"Je suis à Paris ; nous sommes à Paris.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T01.mp3"},{"title":"Vous êtes sûr ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-T02.mp3"},{"title":"Attendez une minute, s'il vous plaît.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T03.mp3"},{"title":"Voilà la fontaine et voici le métro.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T04.mp3"},{"title":"Mais bien sûr !","path":"/assets/audio/L001-French ASSIMIL/French-L001-T05.mp3"}]},{"album":"ASSIMIL French - L002","sentences":[{"title":"DEUXIÈME LEÇON","path":"/assets/audio/L002-French ASSIMIL/N2.mp3"},{"title":"Au magasin","path":"/assets/audio/L002-French ASSIMIL/S00-TITLE.mp3"},{"title":"S'il vous plaît, madame, est-ce qu'il est cher, ce chapeau ?","path":"/assets/audio/L002-French ASSIMIL/S01.mp3"},{"title":"Non, il n'est pas cher. Le prix est très raisonnable.","path":"/assets/audio/L002-French ASSIMIL/S02.mp3"},{"title":"Bon. Et... Où sont les gants ?","path":"/assets/audio/L002-French ASSIMIL/S03.mp3"},{"title":"Les gants sont là-bas. Vous voyez ?","path":"/assets/audio/L002-French ASSIMIL/S04.mp3"},{"title":"Ah, merci... Mais, est-ce qu'ils sont en laine ?","path":"/assets/audio/L002-French ASSIMIL/S05.mp3"},{"title":"Non, ils ne sont pas en laine, ils sont en acrylique.","path":"/assets/audio/L002-French ASSIMIL/S06.mp3"},{"title":"Bon. Euh... est-ce qu'il est cinq heures ?","path":"/assets/audio/L002-French ASSIMIL/S07.mp3"},{"title":"Comment ? Ah, je comprends, vous attendez votre mari !","path":"/assets/audio/L002-French ASSIMIL/S08.mp3"},{"title":"Oui, c'est ça... et... il pleut dehors, alors...","path":"/assets/audio/L002-French ASSIMIL/S09.mp3"},{"title":"Non, madame... Il n'est pas cinq heures !","path":"/assets/audio/L002-French ASSIMIL/S10.mp3"},{"title":"Est-ce que vous êtes sûr ?","path":"/assets/audio/L002-French ASSIMIL/T01.mp3"},{"title":"Est-ce qu'il est cher, ce chapeau ?","path":"/assets/audio/L002-French ASSIMIL/T02.mp3"},{"title":"Est-ce que vous voyez la fontaine ?","path":"/assets/audio/L002-French ASSIMIL/T03.mp3"},{"title":"Il n'est pas cinq heures.","path":"/assets/audio/L002-French ASSIMIL/T04.mp3"},{"title":"Est-ce que le prix est raisonnable ?","path":"/assets/audio/L002-French ASSIMIL/T05.mp3"}]},{"album":"ASSIMIL French - L003","sentences":[{"title":"TROISIÈME LEÇON","path":"/assets/audio/L003-French ASSIMIL/N3.mp3"},{"title":"Au café","path":"/assets/audio/L003-French ASSIMIL/S00-TITLE.mp3"},{"title":"Messieurs, vous désirez ?","path":"/assets/audio/L003-French ASSIMIL/S01.mp3"},{"title":"Deux cafés, s'il vous plaît, et deux croissants chauds.","path":"/assets/audio/L003-French ASSIMIL/S02.mp3"},{"title":"Ah... vous êtes Anglais ? Oui, je suis de London, pardon, Londres.","path":"/assets/audio/L003-French ASSIMIL/S03.mp3"},{"title":"Mais vous parlez bien le français. Merci, vous êtes gentil.","path":"/assets/audio/L003-French ASSIMIL/S04.mp3"},{"title":"Nous, les Français, nous sommes tous gentils !","path":"/assets/audio/L003-French ASSIMIL/S05.mp3"},{"title":"Pardon messieurs, voici les cafés et les tartines beurrées.","path":"/assets/audio/L003-French ASSIMIL/S06.mp3"},{"title":"Et alors ? Où sont les croissants ?","path":"/assets/audio/L003-French ASSIMIL/S07.mp3"},{"title":"Excusez-moi, messieurs... Et dépêchez-vous !","path":"/assets/audio/L003-French ASSIMIL/S08.mp3"},{"title":"Alors, vous êtes sûr qu'ils sont toujours gentils, les Français ?","path":"/assets/audio/L003-French ASSIMIL/S09.mp3"},{"title":"Vous parlez bien le français.","path":"/assets/audio/L003-French ASSIMIL/T01.mp3"},{"title":"Deux cafés, s'il vous plaît.","path":"/assets/audio/L003-French ASSIMIL/T02.mp3"},{"title":"Voici les cafés et les croissants.","path":"/assets/audio/L003-French ASSIMIL/T03.mp3"},{"title":"Ah, vous êtes Anglais ? Oui, c'est ça.","path":"/assets/audio/L003-French ASSIMIL/T04.mp3"},{"title":"Est-ce que vous êtes toujours gentil ?","path":"/assets/audio/L003-French ASSIMIL/T05.mp3"}]}]

  return this.platform.ready().then(()=>{
   
    return this.storage.get('course').then((res)=>{
      if(res) {
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
  let initialData = [{"album":"ASSIMIL French - L001","sentences":[{"title":"PREMIÈRE LEÇON","path":"/assets/audio/L001-French ASSIMIL/French-L001-N1.mp3"},{"title":"À Paris","path":"/assets/audio/L001-French ASSIMIL/French-L001-S00-TITLE.mp3"},{"title":"Pardon, madame. Où est le métro Saint-Michel ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S01.mp3"},{"title":"Le métro Saint-Michel ? Attendez une minute...","path":"/assets/audio/L001-French ASSIMIL/French-L001-S02.mp3"},{"title":"Nous sommes au boulevard Saint-Michel. La fontaine est là-bas.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S03.mp3"},{"title":"Oui, d'accord. Mais où est le métro, s'il vous plaît ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S04.mp3"},{"title":"Mais bien sûr ! Voilà la Seine, et voici le pont.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S05.mp3"},{"title":"C'est joli ; mais s'il vous plaît...","path":"/assets/audio/L001-French ASSIMIL/French-L001-S06.mp3"},{"title":"Ce n'est pas à gauche, alors c'est à droite.","path":"/assets/audio/L001-French ASSIMIL/French-L001-S07.mp3"},{"title":"Voilà. Le métro est à droite !","path":"/assets/audio/L001-French ASSIMIL/French-L001-S08.mp3"},{"title":"Mais vous êtes sûre ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-S09.mp3"},{"title":"Non. Je suis touriste aussi !","path":"/assets/audio/L001-French ASSIMIL/French-L001-S10.mp3"},{"title":"Je suis à Paris ; nous sommes à Paris.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T01.mp3"},{"title":"Vous êtes sûr ?","path":"/assets/audio/L001-French ASSIMIL/French-L001-T02.mp3"},{"title":"Attendez une minute, s'il vous plaît.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T03.mp3"},{"title":"Voilà la fontaine et voici le métro.","path":"/assets/audio/L001-French ASSIMIL/French-L001-T04.mp3"},{"title":"Mais bien sûr !","path":"/assets/audio/L001-French ASSIMIL/French-L001-T05.mp3"}]},{"album":"ASSIMIL French - L002","sentences":[{"title":"DEUXIÈME LEÇON","path":"/assets/audio/L002-French ASSIMIL/N2.mp3"},{"title":"Au magasin","path":"/assets/audio/L002-French ASSIMIL/S00-TITLE.mp3"},{"title":"S'il vous plaît, madame, est-ce qu'il est cher, ce chapeau ?","path":"/assets/audio/L002-French ASSIMIL/S01.mp3"},{"title":"Non, il n'est pas cher. Le prix est très raisonnable.","path":"/assets/audio/L002-French ASSIMIL/S02.mp3"},{"title":"Bon. Et... Où sont les gants ?","path":"/assets/audio/L002-French ASSIMIL/S03.mp3"},{"title":"Les gants sont là-bas. Vous voyez ?","path":"/assets/audio/L002-French ASSIMIL/S04.mp3"},{"title":"Ah, merci... Mais, est-ce qu'ils sont en laine ?","path":"/assets/audio/L002-French ASSIMIL/S05.mp3"},{"title":"Non, ils ne sont pas en laine, ils sont en acrylique.","path":"/assets/audio/L002-French ASSIMIL/S06.mp3"},{"title":"Bon. Euh... est-ce qu'il est cinq heures ?","path":"/assets/audio/L002-French ASSIMIL/S07.mp3"},{"title":"Comment ? Ah, je comprends, vous attendez votre mari !","path":"/assets/audio/L002-French ASSIMIL/S08.mp3"},{"title":"Oui, c'est ça... et... il pleut dehors, alors...","path":"/assets/audio/L002-French ASSIMIL/S09.mp3"},{"title":"Non, madame... Il n'est pas cinq heures !","path":"/assets/audio/L002-French ASSIMIL/S10.mp3"},{"title":"Est-ce que vous êtes sûr ?","path":"/assets/audio/L002-French ASSIMIL/T01.mp3"},{"title":"Est-ce qu'il est cher, ce chapeau ?","path":"/assets/audio/L002-French ASSIMIL/T02.mp3"},{"title":"Est-ce que vous voyez la fontaine ?","path":"/assets/audio/L002-French ASSIMIL/T03.mp3"},{"title":"Il n'est pas cinq heures.","path":"/assets/audio/L002-French ASSIMIL/T04.mp3"},{"title":"Est-ce que le prix est raisonnable ?","path":"/assets/audio/L002-French ASSIMIL/T05.mp3"}]},{"album":"ASSIMIL French - L003","sentences":[{"title":"TROISIÈME LEÇON","path":"/assets/audio/L003-French ASSIMIL/N3.mp3"},{"title":"Au café","path":"/assets/audio/L003-French ASSIMIL/S00-TITLE.mp3"},{"title":"Messieurs, vous désirez ?","path":"/assets/audio/L003-French ASSIMIL/S01.mp3"},{"title":"Deux cafés, s'il vous plaît, et deux croissants chauds.","path":"/assets/audio/L003-French ASSIMIL/S02.mp3"},{"title":"Ah... vous êtes Anglais ? Oui, je suis de London, pardon, Londres.","path":"/assets/audio/L003-French ASSIMIL/S03.mp3"},{"title":"Mais vous parlez bien le français. Merci, vous êtes gentil.","path":"/assets/audio/L003-French ASSIMIL/S04.mp3"},{"title":"Nous, les Français, nous sommes tous gentils !","path":"/assets/audio/L003-French ASSIMIL/S05.mp3"},{"title":"Pardon messieurs, voici les cafés et les tartines beurrées.","path":"/assets/audio/L003-French ASSIMIL/S06.mp3"},{"title":"Et alors ? Où sont les croissants ?","path":"/assets/audio/L003-French ASSIMIL/S07.mp3"},{"title":"Excusez-moi, messieurs... Et dépêchez-vous !","path":"/assets/audio/L003-French ASSIMIL/S08.mp3"},{"title":"Alors, vous êtes sûr qu'ils sont toujours gentils, les Français ?","path":"/assets/audio/L003-French ASSIMIL/S09.mp3"},{"title":"Vous parlez bien le français.","path":"/assets/audio/L003-French ASSIMIL/T01.mp3"},{"title":"Deux cafés, s'il vous plaît.","path":"/assets/audio/L003-French ASSIMIL/T02.mp3"},{"title":"Voici les cafés et les croissants.","path":"/assets/audio/L003-French ASSIMIL/T03.mp3"},{"title":"Ah, vous êtes Anglais ? Oui, c'est ça.","path":"/assets/audio/L003-French ASSIMIL/T04.mp3"},{"title":"Est-ce que vous êtes toujours gentil ?","path":"/assets/audio/L003-French ASSIMIL/T05.mp3"}]}]
  initialData.forEach((lesson)=> {
    //create a Lesson object
      let myLesson = {
        album : lesson.album,
        sentences: [],
      }
      // analyse the sentence
        lesson.sentences.forEach(sentence => {
        
          let sentenceArray = this.splitUpSentence(sentence.title)
         let mySentence = {
           title: sentence.title,
           path: sentence.path,
           sentenceArray: sentenceArray
         }
          
         myLesson.sentences.push(mySentence)
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

}




  saveALesson(lesson, lessonIndex, sentenceIndex) {
    console.log(lessonIndex)
    lesson.forEach(sentence => {
      sentence.practised = false
      sentence.reviewing = false
    })
    lesson[sentenceIndex].sentenceArray.forEach(item=>{
      console.log(item)
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
