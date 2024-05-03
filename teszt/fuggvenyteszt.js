QUnit.module('egyenlet', function() {
    QUnit.test('Létezik-e', assert => {
        assert.ok(egyenlet);
    });
    QUnit.test('Függvény-e', assert => {
        assert.ok(typeof(egyenlet) === 'function');
    });
    
    QUnit.test('0, 0, 0', assert => {
        assert.equal(egyenlet(0,0,0), "Végtelen");
    });
    QUnit.test('0, 0, 2', assert => {
        assert.equal(egyenlet(0,0,2), "Nincs");
    });
    QUnit.test('5, 6, 34', assert => {
        assert.equal(egyenlet(5, 6, 34), "Nincs");
    });
});