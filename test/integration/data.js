'use strict';

module.exports = (ds) => {
    const k1 = ds.key(['Parent', 'default', 'User', 111]);
    const k2 = ds.key(['Parent', 'default', 'User', 222]);
    const k3 = ds.key(['Blog', 'default', 'Post', 111]);
    const k4 = ds.key(['Blog', 'default', 'Post', 222]);

    const user1 = { name: 'john', age: 20 };
    const user2 = { name: 'mick', age: 20 };
    const post1 = { title: 'Hello', category: 'tech' };
    const post2 = { title: 'World', category: 'tech' };

    const entity1 = { key: k1, data: user1 };
    const entity2 = { key: k2, data: user2 };
    const entity3 = { key: k3, data: post1 };
    const entity4 = { key: k4, data: post2 };

    const query = ds
        .createQuery('User')
        .filter('age', 20)
        .hasAncestor(ds.key(['Parent', 'default']));

    const query2 = ds
        .createQuery('Post')
        .filter('category', 'tech')
        .hasAncestor(ds.key(['Blog', 'default']));

    const allKeys = [k1, k2, k3, k4];

    const cleanUp = (cb) => {
        ds.delete(allKeys).then(cb);
    };

    const addKey = (key) => {
        if (key) {
            allKeys.push(key);
        }
    };

    return {
        k1,
        k2,
        k3,
        k4,
        user1,
        user2,
        post1,
        post2,
        entity1,
        entity2,
        entity3,
        entity4,
        query,
        query2,
        cleanUp,
        addKey,
    };
};
