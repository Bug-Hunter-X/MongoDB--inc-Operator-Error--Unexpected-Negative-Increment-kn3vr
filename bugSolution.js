```javascript
// Solution: Check for existing field before incrementing
db.collection.findOne({ name: "John" }, (err, doc) => {
if (err) throw err;
if (doc && doc.age) {
  db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } });
} else {
  // Handle the case where the age field doesn't exist. Options include:
  // 1. Set a default value:
  db.collection.updateOne({ name: "John" }, { $set: { age: 0 }});
  db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } });
  // 2. Log an error or skip the operation.
  console.log('Age field does not exist for John.');
}
});
```