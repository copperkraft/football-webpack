module.exports = (data, paging) => {
    if (!paging || !data.list) {
        return data;
    }

    data.pageSize = +(paging.size || 10);
    data.pageNumber = +(paging.number || 0);
    data.pageCount = Math.ceil(data.list.length / data.pageSize);
    data.list = data.list.slice((data.pageNumber - 1) * data.pageSize, data.pageNumber * data.pageSize);

    return data;
};