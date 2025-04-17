const dateFormat = (isoString) => {
    const date = new Date(isoString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  };
const timeSinceUpdate = (isoString) =>{
  const date = new Date(isoString);
  // const currentDate = new Date()
  // switch (date) {
  //
  //    case date.getMinutes() <59 :
  //     return date.getMinutes();
  //   default:
  //      date.getMinutes();
  // }
  // if(date.getMinutes() - currentDate.getMinutes() ){
  //     return date.getMinutes()+'mins ago'
  // }
  // else if(data.getMinutes()>59){
  //     return date.getHours()+'hrs ago'
  // }
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true,
  };
  return date.toLocaleString('en-US', options);
}
  export {dateFormat, timeSinceUpdate}