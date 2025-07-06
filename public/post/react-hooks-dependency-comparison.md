🧠 **React’s Internal `is` Function: Why It’s Not Just `===`**

React internally uses a small function called `"is"` — a **polyfill** for JavaScript’s `Object.is()` — to compare values in hook dependencies.

```js
function is(x, y) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || // handles +0 and -0
    (x !== x && y !== y)                         // handles NaN
  );
}
```

🔍 This is how React compares the previous and next dependency arrays to decide if a hook should rerun:

```js
for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
  // Using React's is() polyfill
  if (is(nextDeps[i], prevDeps[i])) {
    continue;
  }
  return false; // dependencies differ → rerun effect
}
return true; // dependencies equal → skip rerun
```

✅ For **primitive values** (like numbers, strings, booleans), this comparison works perfectly.

⚠️ But for **objects, arrays, or functions**, React only compares their **reference**, not their content:

```js
useEffect(() => {
  // Runs only if `filters` has a different reference
}, [filters]);
```

That’s why **React won’t rerun hooks** if the reference is the same — **even if the object’s content has changed**.

---

🧪 **Why not just use `===`?**

Because `===` fails for two edge cases:

```js
+0 === -0     // true ❌ (they’re not the same in all contexts)
NaN === NaN   // false ❌ (but they should be considered equal)
```

React’s `is()` handles these correctly, just like `Object.is()`.

---

💡 **Takeaway:**  
Always **create new references** for objects/arrays when you want a hook like `useEffect` or `useMemo` to re-run:

```js
setFilters(prev => ({ ...prev, status: 'active' })); // ✅ triggers effect
```
