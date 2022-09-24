

const dropdownColors = {
  green: '#ADDA89',
  yellow: '#EBE399',
  blue: '#99CDEB',
  red: '#EB9999',
}


const setStatusDropdownColors = (statusState) => {
  
  let bgColor;
  switch (statusState) {    
    case 'complete':
      bgColor = dropdownColors.green; 
      break;
    case 'pending':
      bgColor = dropdownColors.yellow;
      break;
    case 'in progress':
      bgColor = dropdownColors.blue;
      break;
    case 'cancelled':
      bgColor = dropdownColors.red;
      break;
  }
  return {
    backgroundColor: bgColor
  }
}

const styles = {
  setStatusDropdownColors,
}

export default styles;