import PouchDB from 'pouchdb-react-native';
import PouchDBFind from 'pouchdb-find';
import RelationalPouchDB from 'relational-pouch';

PouchDB.plugin(RelationalPouchDB);
PouchDB.plugin(PouchDBFind);

let localdb = new PouchDB('testDB');

localdb.setSchema([
    {
        singular: 'user',
        plural: 'users',
    },
]);




export const countDocs = () => new Promise((resolve, reject) => {
    queryDocs().then(items => resolve(items.length)).catch(error => reject(error));
});

export const addDoc = (data) => new Promise((resolve, reject) => {

    localdb.rel.save('user', {
        name: data,
    }).then(result => {
        console.log("Inserted new");
        resolve(result);
    }).catch(error => {
        console.error("Error new:", error.name);
        reject(error);
    });



    // const newDoc = {
    //     _id: Math.floor(Date.now() / 1000).toString(),
    //     name: data,
    // };

    // localdb.put(newDoc).then(result => {
    //     console.log("Inserted");
    //     resolve(result);
    // }).catch(error => {
    //     console.error("Error:", error.name);
    //     reject(error);
    // });


});


export const queryDocs = () => new Promise((resolve, reject) => {

    localdb.rel.find('user').then(result => {
        //const items = result.rows.map(row => row.doc);
        console.log("RESULT NEW:", result.users);
        resolve(result.users);

    }).catch(error => reject(error));

    // localdb.allDocs({ include_docs: true, limit: null }).then(result => {
    //     const items = result.rows.map(row => row.doc);
    //     console.log("RESULT:", items);
    //     resolve(items);
    // }).catch(error => reject(error));
})
export default localdb;