module.exports = (url) => {
    const params = {
        uri: `https://api.twitter.com/1.1/${url}`,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAM1G1AAAAAAAUJgG9SY6JLp4yJ2ERXY2w0N%2FEi0%3D4dFtOS7nvNlsUL2fUh07elqcW7LD0bgHsBOy0R3Q0Aj2G7WNC0'
        },
        json: true
    };

    return new Promise((resolve, reject) => {
        resolve(params);
    });
};
