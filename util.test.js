const {generateText} = require('./util');

test('should output name and age',()=>{
    const text = generateText('Max',29);
    expect(text).toBe('Max (29 years old)'); 
});


test('should output data-less text',()=>{
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');  
})