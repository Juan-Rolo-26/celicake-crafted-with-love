import { motion } from "framer-motion";
import { Cake, Cookie, Heart, Star, WheatOff } from "lucide-react";
import { useEffect, useState } from "react";

const icons = [Cake, Cookie, Heart, Star, WheatOff];

interface MovingBackgroundProps {
    color?: string;
    count?: number;
}

const MovingBackground = ({ color = "text-secondary/5", count = 12 }: MovingBackgroundProps) => {
    const [items, setItems] = useState<{ id: number; x: number; y: number; scale: number; duration: number; Icon: any }[]>([]);

    useEffect(() => {
        const newItems = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            scale: 0.5 + Math.random() * 1,
            duration: 10 + Math.random() * 20,
            Icon: icons[Math.floor(Math.random() * icons.length)],
        }));
        setItems(newItems);
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    className={`absolute ${color}`}
                    initial={{ x: `${item.x}vw`, y: `${item.y}vh`, opacity: 0 }}
                    animate={{
                        x: [`${item.x}vw`, `${(item.x + 10) % 100}vw`, `${(item.x - 10 + 100) % 100}vw`],
                        y: [`${item.y}vh`, `${(item.y + 15) % 100}vh`, `${(item.y - 15 + 100) % 100}vh`],
                        opacity: [0, 0.4, 0],
                        rotate: [0, 45, -45, 0],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        scale: item.scale,
                    }}
                >
                    <item.Icon size={48} strokeWidth={1.5} />
                </motion.div>
            ))}
        </div>
    );
};

export default MovingBackground;
