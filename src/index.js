import app from "./app.js";

const main =()=>{
    app.listen(app.get("port"));
    console.log(`The company super  hello is runing on port ${app.get("port")}`);
}

main();
