module.exports = (data, paging) => {
    if (!paging || !data.list) {
        return data;
    }

    const pageSize = +(paging.size || 10);
    const pageNumber = +(paging.number || 0);

    return {
        list: data.list.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize),
        pageCount: Math.ceil(data.list.length / pageSize),
        pageNumber,
        pageSize
    };
};