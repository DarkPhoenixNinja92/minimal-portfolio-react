import React from 'react';

function Intro() {
    return (
        <div
            className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Shaun Pour</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Frontend Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Nice to meet you! I'm Shaun Pour. Based in the USA, I'm a front-end developer
                passionate about building accessible web apps that users love. My focus is front
                end web development so the lion's share of my development experience is centered
                around HTML, CSS and JavaScript with some adjacent experience in SCSS, Bootstrap
                and React.
            </p>
        </div>
    )
}

export default Intro;