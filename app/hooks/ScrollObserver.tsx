'use client'
import { RefObject, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
    refElement: RefObject<any>,
    name: string
}

export const ScrollObserver = ({ refElement, name }: Props) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = document.getElementById(name);
                    if (entry.isIntersecting) {
                        element!.style.color = 'var(--color-blue-500)'
                        element!.style.textDecoration = 'underline'
                    } else {
                        element!.style.color = 'white'
                        element!.style.textDecoration = 'none'
                    }
                });
            },
            {
                threshold: 0.5, // 50% visible
            }
        );

        if (refElement.current) {
            observer.observe(refElement.current);
        }

        return () => {
            if (refElement.current) {
                observer.unobserve(refElement.current);
            }
        };

    }, []);
}

