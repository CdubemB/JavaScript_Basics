const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lesson2", ()=>{
  console.log("lesson2 event has occured")
})