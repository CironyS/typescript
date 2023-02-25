var user = { name: '张三', age: 18, bool: true, obj: [
        { title: '李四' }, { title: '19' }, { title: 'false' },
    ] };
user.obj.push({ title: '赵六' });
console.log('user', user);
console.log('user.obj[0].title', user.obj[0].title);
