let today=new Date();
const options={
    weekday: "long",
    month: "long",
    day: "numeric"
};
let day=today.toLocaleDateString("en-US",options);

module.exports=day;