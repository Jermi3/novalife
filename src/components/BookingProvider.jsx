'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import QuizModal from './QuizModal';

const BookingContext = createContext(null);

export function useBooking() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within BookingProvider');
    }
    return context;
}

export default function BookingProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const openBooking = useCallback(() => setIsOpen(true), []);
    const closeBooking = useCallback(() => setIsOpen(false), []);

    return (
        <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
            {children}
            <QuizModal isOpen={isOpen} onClose={closeBooking} />
        </BookingContext.Provider>
    );
}
