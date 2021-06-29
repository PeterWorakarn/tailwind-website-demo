import React from 'react';
import {
    Link,
    useRouteMatch
} from "react-router-dom";

export default function NavLink({ to, label, activeOnlyExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyExact
    });

    return (
            <Link className={`${match ? "md:border-b-2 border-blue-500 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-3 pl-1 md:pl-0" : " text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 my-3 pl-1 md:pl-0"}`} 
                to={to}>{label}</Link>
    );
}
