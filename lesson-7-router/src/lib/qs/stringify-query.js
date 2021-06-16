const stringifyQuery = (query = {}) => {
    const qs = new URLSearchParams(query);
    return '?' + qs.toString();
}

export default stringifyQuery;