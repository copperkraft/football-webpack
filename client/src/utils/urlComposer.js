export default function composeUrl(url, params) {
    return url + '?' + Object.keys(params).map(paramName => {
        if (typeof params[paramName] === 'object') {
            return Object.keys(params[paramName]).map(propName => {
                return `${paramName}[${propName}]=${encodeURIComponent(params[paramName][propName])}`;
            }).join('&');
        }
        return `${paramName}=${encodeURIComponent(params[paramName])}`;
    }).join('&');
}