export const posts = [
  {
    slug: 'react-hooks-dependency-comparison',
    name: 'FHow React Decides When to Rerun Hooks: The is Function Explained',
    description: `React doesn’t just use === to compare hook dependencies — it uses a custom polyfill for Object.is. This subtle but important function ensures correct behavior for tricky cases like +0 vs -0 and NaN.

In this post, I dive into how React internally compares dependencies using this is() function, and why your hooks (like useEffect or useMemo) won’t rerun unless the reference of an object, array, or function actually changes — even if the content does.

If you’ve ever wondered why your effect didn’t trigger after updating an object, this will make it crystal clear.`,
  },

];