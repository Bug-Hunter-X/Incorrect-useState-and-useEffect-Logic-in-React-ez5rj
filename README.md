# Incorrect useState and useEffect Logic in React

This repository demonstrates a common error when using the `useState` and `useEffect` hooks in React. The example shows how an incorrect implementation of updating state within the `useEffect` hook leads to unexpected behavior.

## Problem
The provided code intends to increment the state variable `count` when the component mounts.  However, the logic within the `useEffect` hook is flawed, leading to an infinite loop because it attempts to update the state variable synchronously, which is incorrect.