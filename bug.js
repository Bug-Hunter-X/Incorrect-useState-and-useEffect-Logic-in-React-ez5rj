```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic for updating count
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```