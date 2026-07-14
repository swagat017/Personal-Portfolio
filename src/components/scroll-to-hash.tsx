"use client";

import { useEffect } from "react";

export function ScrollToHash() {
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        const scrollToTarget = () => {
            const el = document.querySelector(hash);
            el?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
        };

        // Fonts can finish loading (and reflow the page) after the browser's
        // native anchor-jump already happened — wait for them, then re-snap.
        if ("fonts" in document) {
            document.fonts.ready.then(() => {
                requestAnimationFrame(scrollToTarget);
            });
        } else {
            requestAnimationFrame(scrollToTarget);
        }
    }, []);

    return null;
}