// src/providers/AppProvider.jsx
import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axiosInstance from './axiosInstance'; // Adjust the import path as needed

// Define your data fetching functions
const fetchReportReasons = async () => {
    const response = await axiosInstance.get('/report-reasons');
    return response.data;
};

const fetchUserData = async () => {
    const response = await axiosInstance.get('/profile/user');
    return response.data;
};

// Create a component that fetches and provides data
const DataProviders = ({ children }) => {
    // Fetch data for different endpoints
    useQuery({
        queryKey: ['reportReasons'],
        queryFn: fetchReportReasons,
        staleTime: Infinity,
    });

    useQuery({
        queryKey: ['AuthUserData'],
        queryFn: fetchUserData,
        staleTime: Infinity,
    });

    // Add more queries here if needed

    return <>{children}</>; // Render children inside this provider
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
