import '@testing-library/jest-dom'


describe('testing reducer', () => {
    it('test switch in reducer', () => {
        const none = 'None';
        const newsReducer = (payload) => {
            switch (payload) {
                case "addnews":
                    return {
                        payload
                    }

                default:
                    return none
            }
        }

        const expected = 'None';
        const received = newsReducer(12345);
        expect(received).toEqual(expected);
    })

})
