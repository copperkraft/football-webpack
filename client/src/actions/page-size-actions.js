export const SELECT_PAGE_SIZE = 'SELECT_PAGE_SIZE';
export function selectPageSize(size) {
    return {
        type: SELECT_PAGE_SIZE,
        payload: size
    };
}