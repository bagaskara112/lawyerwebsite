"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
    /**
     * Phone number in international format, without the '+' symbol.
     * @example "6285649124046"
     */
    phoneNumber?: string;
    /**
     * Pre-filled message text when the user opens WhatsApp.
     */
    message?: string;
    /**
     * Visibility threshold in pixels before the button appears.
     */
    visibilityThreshold?: number;
}

/**
 * Global Floating Action Button for WhatsApp.
 * Implements smooth spring animations and pulse micro-interactions.
 * Strictly typed and implemented as a functional component.
 */
export default function FloatingWhatsApp({
    phoneNumber = "6285649124046",
    message = "Halo, saya membutuhkan konsultasi hukum segera.",
    visibilityThreshold = 300,
}: FloatingWhatsAppProps): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsVisible(window.scrollY > visibilityThreshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibilityThreshold]);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    initial={{ opacity: 0, scale: 0.5, y: 50, rotate: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50, rotate: -15 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300"
                    aria-label="Chat WhatsApp"
                >
                    {/* Micro-interaction: Continuous subtle ping for attention */}
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 hidden md:block"></div>

                    <MessageCircle className="w-7 h-7 relative z-10" />
                </motion.a>
            )}
        </AnimatePresence>
    );
}
