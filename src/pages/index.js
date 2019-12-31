import React from 'react'
import SocialIcons from "../containers/SocialIcons";

export default () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="center-block col-md-8">
                <div>
                    <img src="/img/portret2.jpg" name="Garipov Azamat" width="200" height="200" className="rounded mx-auto d-block"/>
                    <h1 className="text-center h2">
                        Гарипов Азамат <br/>
                        <small>Backend Developer</small>
                    </h1>
                    <hr />
                    <p className="text-justify">
                        Привет. Меня зовут Азамат. Я из Челябинска. Работаю backend разработчиком в компании N1. Чаще всего пишу на PHP и Python.
                    </p>

                    <SocialIcons/>
                </div>
            </div>
        </div>
    </div>
)
