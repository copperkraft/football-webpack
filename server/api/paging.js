module.exports = (data, paging) => {
    if (!paging || !data.slice) {
        return data;
    }

    const pageSize = +(paging.size || 10);
    const pageNumber = +(paging.number || 0);

    return {
        list: data.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize),
        pageCount: Math.floor(data.length / pageSize),
        pageNumber,
        pageSize
    };
};