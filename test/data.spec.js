describe('firebase', () => {
  it('database debería ser un objeto global.', () => {
    assert.isObject(database);
  });

  it('createVisiter debería ser una funcion.', () => {
    assert.isFunction(database.createVisiter);
  });
});
