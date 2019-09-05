
const getItemFromArray= (arrayItem = []) =>{

    const rand = Math.floor(Math.random() * arrayItem.length) + 0;
    return arrayItem[rand];

};

export {getItemFromArray as default};