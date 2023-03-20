import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollIndicator: React.FC = () => {
    const { y } = useWindowScroll();
    const [scrolled, setScrolled] = useState<number>(0);

    useEffect(() => {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrolled((y / height) * 100);
    }, [y]);

    return (
        <div className="scroll-container">
            <div className="indicator" style={{ width: `${scrolled}%` }}></div>
            <style jsx>{`
                .scroll-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: rgba(0, 0, 0, 0.2);
                    z-index: 9999;
                }

                .indicator {
                    height: 3px;
                    background-color: #0070f3;
                    transition: width 0.2s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default ScrollIndicator;
