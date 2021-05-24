 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "burasıgizlendi",
     authDomain: "modern-js-2e1db.firebaseapp.com",
     projectId: "modern-js-2e1db",
     storageBucket: "modern-js-2e1db.appspot.com",
     messagingSenderId: "burasıgizlendi",
     appId: "burasıgizlendi"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

 //console.log(db.collection('haberler'));


 //verilere erişme
 db.collection('haberler').get().then(snapshot => {
     //console.log(snapshot);
     //console.log(snapshot.docs[0].data());
     snapshot.docs.forEach((doc) => {
         //console.log(doc.data());    
         console.log(doc.data().ad);
         console.log(doc.data().tarih.toDate());
     });

 }).catch((err) => {
     console.log(err);
 })


 //veri ekle
 const button = document.querySelector('#btnEkle');
 button.addEventListener('click', () => {

     const now = new Date();
     var haber = {
         ad: 'haber 3',
         icerik: 'içerik 3',
         tarih: firebase.firestore.Timestamp.fromDate(now)
     };

     db.collection('haberler').add(haber).then(() => {
         console.log('haber eklendi');
     }).catch(() => {
         console.log('ekleme işlemi başarısız');
     })

 })


 //veri sil
 const buttonSil = document.querySelector('#btnSil');
 buttonSil.addEventListener('click', () => {
     const silinecekBelge = db.collection('haberler').doc('CAC5f8NdwOQf3LEfwuPJ');
     silinecekBelge.delete().then(() => {
         console.log(`${silinecekBelge.id} silindi`);
     })
 });