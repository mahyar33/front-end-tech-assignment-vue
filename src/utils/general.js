export const getObject = (theObject, id) => {
    let result = null;
    if (theObject instanceof Array) {
        for (let i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i], id);
            if (result) {
                return result
            }
        }
    } else {
        for (const prop in theObject) {
            if (prop == 'id') {
                if (theObject[prop] == id) {
                    return theObject;
                }
            }
            if (prop == 'children') {
                result = getObject(theObject[prop], id);
                if (result) {
                    return result
                }
            }
        }
    }
    return result;
}

export const flattenId = (obj) =>
    obj.reduce((res, el) => {
        if (el.children && el.children.length > 0) {
            return [...res, ...flattenId(el.children)];
        } else {
            res.push(el.id)
            return res;
        }

    }, []);

export const getMeasurements=(assets, id,measurements)=>{
    const keys=flattenId([getObject(assets, id)])
    const items = measurements.filter(item => keys.includes(item.assetId))
    const result= Object.keys(items[0].measurements).reduce((res, key,index) => {
        res[index] = [new Date(key).getTime(),0]
        items.forEach(item => {
            res[index][1] += item.measurements[key]
        })
        return res
    }, [])
    return result
}