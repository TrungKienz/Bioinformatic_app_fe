import { useState, useCallback } from 'react';

export default () => {
    const [isView, setEdit] = useState(false);
    const toggleView = useCallback((state: boolean) => setEdit(state), []);
    return { isView, toggleView };
};