

// import React from 'react';
// import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import axiosInstance from './axiosInstance'; // Adjust the import path as needed

// // Define your data fetching functions
// const fetchReportReasons = async () => {
//     const response = await axiosInstance.get('/report-reasons');
//     return response.data;
// };

// const fetchUserData = async () => {
//     // Check if there's an authentication token or any method you use to track authentication
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//         // If no token exists, skip the request (optional: return a placeholder value)
//         return null;
//     }

//     const response = await axiosInstance.get('/profile/user');
//     return response.data;
// };

// // Create a component that fetches and provides data
// const DataProviders = ({ children }) => {
//     // Fetch public data (available to everyone)
//     useQuery({
//         queryKey: ['reportReasons'],
//         queryFn: fetchReportReasons,
//         staleTime: Infinity,
//     });

//     // Fetch authenticated user data only if authenticated
//     useQuery({
//         queryKey: ['AuthUserData'],
//         queryFn: fetchUserData,
//         staleTime: Infinity,
//         enabled: !!localStorage.getItem('authToken'), // This ensures the query only runs if authenticated
//     });

//     return <>{children}</>;
// };

// // Create a QueryClient and wrap your application with QueryClientProvider and DataProviders
// const queryClient = new QueryClient();

// const AppProvider = ({ children }) => {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <DataProviders>
//                 {children}
//             </DataProviders>
//         </QueryClientProvider>
//     );
// };

// export default AppProvider;
import React from 'react';
import { QueryClient, QueryClientProvider,useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance'; // Adjust the import path as needed

// Define your data fetching functions
const fetchReportReasons = async () => {
    const response = await axiosInstance.get('/report-reasons');
    return response.data;
};

// Create a component that fetches and provides data
const DataProviders = ({ children }) => {
    // Fetch public data (available to everyone)
    useQuery({
        queryKey: ['reportReasons'],
        queryFn: fetchReportReasons,
        staleTime: Infinity,
    });

    return <>{children}</>;
};

// Create a QueryClient and wrap your application with QueryClientProvider and DataProviders
const queryClient = new QueryClient();

const AppProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <DataProviders>
                {children}
            </DataProviders>
        </QueryClientProvider>
    );
};

export default AppProvider;
