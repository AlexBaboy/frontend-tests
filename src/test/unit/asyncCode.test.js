const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

describe('асинхронный код', () => {
    test('is array', async () => {
        return await fetchUsers.then(data => {
            expect(Array.isArray(data)).toBe(true);

        });
    });
    test('more than 1', async () => {
        return await fetchUsers.then(data => {
            expect(data.length).toBeGreaterThan(1)
        });
    });
    test('less then 1', async () => {
        return await fetchUsers.then(data => {
            expect(data.length).toBeLessThan(1)
        });
    });
})