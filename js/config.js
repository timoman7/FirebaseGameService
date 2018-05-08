import {} from './NativeExtenders.js';
(function(){
    let _queryObject = window.location.search.split(/\?|\&/g).reverse();
    let queryObject = {};
    _queryObject.pop();
    _queryObject = _queryObject.reverse();
    _queryObject.forEach((k)=>{
        let kvp = k.split('=');
        queryObject[kvp[0]] = kvp[1];
    });
    window.location.query = queryObject;
})();
export const Config = {
    debug: window.location.query.hasOwnProperty('debug'),
    view: window.location.query.view?window.location.query.view:'menu'
};