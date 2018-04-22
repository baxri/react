import PouchDB from 'pouchdb-react-native';

let localdb = new PouchDB('testDB');

export const countDocs = () => new Promise((resolve,reject) => {
  queryDocs().then(items => resolve(items.length)).catch(error=>reject(error));
});
export const addDoc = (data) => new Promise((resolve,reject) => {
  const newDoc = {
    _id: Math.floor(Date.now()/1000).toString(),
    text:data,
    additionDate: new Date(),
  };
  localdb.put(newDoc).then(result => {
    console.log("Inserted");
    resolve(result);
  }).catch(error => {
    console.error("Error:", error.name);
    reject(error);
  });
});

export const queryDocs = () => new Promise((resolve,reject) => {
    localdb.allDocs({include_docs: true, limit: null}).then(result => {
    const items = result.rows.map(row => row.doc);
    console.log("RESULT:",items);
    resolve(items);
  }).catch(error => reject(error));
})
export default localdb;