/* возвращает массив из 10 элементов !!! */
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

describe('асинхронный код', () => {

    test('is array', async () => {
        //return await fetchUsers.then(data => {
        return await
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                expect(Array.isArray(data)).toBe(true);
                expect(data).toMatchSnapshot()
            });
    });

    test('is object', async () => {
        //return await fetchUsers.then(data => {
        return await
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(data => {
                    expect(typeof data).toBe('object');
                });
    });

    test('array length more than 1', async () => {
        return await fetchUsers.then(data => {
            expect(data.length).toBeGreaterThan(1)
        });
    });

    test('array length less then 1', async () => {
        return await fetchUsers.then(data => {
            expect(data.length).toBeLessThan(1)
        });
    });


})