import { useState, useRef, useEffect } from 'react';
import './Card.css';
export default function Card({ title = "New Task", description = "Your Description here...", x = 300, y = 300, id, OnDelete, color, dueDate, completed = false }) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: x, y: y });
    const [titleState, setTitleState] = useState(title);
    const [descriptionState, setDescriptionState] = useState(description);

    const dragRef = useRef(null);
    const offsetRef = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        offsetRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        setPosition(() => {
            return {
                x: e.clientX - offsetRef.current.x,
                y: e.clientY - offsetRef.current.y
            }
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    });

    return (
        <div
            ref={dragRef}
            className="draggable"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                backgroundColor: color || 'lightblue'
            }}
            onMouseDown={handleMouseDown}
        >
            <div className="topbar">
            <div className="title" contentEditable="true" suppressContentEditableWarning={true} onBlur={(e)=>(setTitleState(e.target.innerText))}>{titleState}</div>
            <div className="delete">
                <button onClick={() => {
                    OnDelete(id);
                }}>-</button>
            </div>
            </div>
            <div className="description" contentEditable="true" suppressContentEditableWarning={true} onBlur={(e)=>(setDescriptionState(e.target.innerText))}>{descriptionState}</div>
        </div>
    );
}