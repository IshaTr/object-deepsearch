const emp = {
  name: "Rajesh",
    address : {
            locality: {
                street : "2nd main domlur"
        }
    }
};

getObjPath = (obj, path) => {
    const pathArray = path.split('.');
    if (pathArray.length > 0) {
        let childrenValue = null;
        pathArray.forEach((arr, index) => {
            if (obj[arr]) {
                obj = obj[arr];
                if (pathArray.length === index + 1 && typeof(obj) === 'string') {
                    childrenValue = obj;
                    return true;
                }
            } else {
                return false;
            }
        });
        return childrenValue;
    }
    return null;
}

console.log(getObjPath(emp, 'address.locality.street'));
