import { createI18n } from 'vue-i18n';
// import { VueI18n } from 'vue-i18n';
// import en from './lang/en.json';
// import hi from './lang/hi.json';

const messages = {
    en: {
      message: { 
        intro: 'This application is made to help the farmers. Our aim is only to give correct information about farming to the farmers and to tell how organic farming is different and beneficial than chemical farming.'
      }
    },
    
    hi: {
      message: {
        
        intro: 'यह एप्लिकेशन किसानों की मदद के लिए बनाया गया है। हमारा उद्देश्य केवल किसानों को खेती के बारे में सही जानकारी देना और यह बताना है कि जैविक खेती किस तरह रासायनिक खेती से अलग और फायदेमंद है। |'
      }
    }
  };

  const i18n = new createI18n({
    locale: 'en',
    fallbackLocale: 'hi',
    messages
  });
 export default i18n;

//  export const i18n = new VueI18n({
//   locale: 'de',
//   fallbackLocale: 'de',
//   messages
// });

//refrence from => https://webdeasy.de/en/vue-i18n-app-en/
//2.=>https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/
