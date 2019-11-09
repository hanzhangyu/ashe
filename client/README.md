## 组件协议

```js
export default {
    name: 'TableOperation',
    propsSchema: {
        column: {
            deleteAction: {
                type: String,
                required: true,
            },
        },
    },
};
```
