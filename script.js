//console.log(db.collection('haberler'));

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