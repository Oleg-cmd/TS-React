import React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Page information</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt fuga sit ducimus ipsa dolores numquam amet placeat quos consectetur.</p>
            <button className="btn" onClick={() => history.push('/')}>Back to task list</button>
        </>
    )
}