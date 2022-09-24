


const getLongDate = (date) => {
  const options = {
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
    let longDate = new Date(date).toLocaleDateString("en-UK", options);
  
  return longDate;
}


const dates = {
  getLongDate,
}

export default dates;