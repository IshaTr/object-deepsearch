# object-deepsearch

## Question

* Given a JavaScript object, write a function named `getObjPath(jsObj, path)` to search if the path is present in the object. 
  * If the path exist return the result of the path 
  * If the path doesn't exist return null.
     
Below given an example javascript object, your function `getObjPath(emp, 'address.locality.street')` should return "2nd main domlur"

```javascript
Let emp = {
  name: "Rajesh",
  address : {
         locality : {
               street : "2nd main domlur"
          }
    }
}
```
## Solution

```javascript
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
```
