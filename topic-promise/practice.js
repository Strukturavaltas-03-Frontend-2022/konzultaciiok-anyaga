const myPromise = (list = [1, 2]) => {
    return new Promise( (resolve, reject) => {
        if (!list.some( number => typeof number !== 'number')) {
            const transformedList = list.map( number => number * 2 );
            resolve(transformedList);
        } else {
            reject('Error: Not all elements are number type!');
        }
    });
};

export default myPromise;
