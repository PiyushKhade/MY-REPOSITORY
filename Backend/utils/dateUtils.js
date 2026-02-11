const isSameDay=(d1,d2)=>
    d1.toDateString()===d2.toDateString();

const isYesterday = (lastDate)=>{
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    return lastDate && 
    lastDate.toDateString()===yesterday.toDateString();
}

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

module.exports={isSameDay, isYesterday, startOfDay};