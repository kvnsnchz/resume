import React, { Component } from 'react';

import WorkExperience from './work_experience.js';
import { workExperience } from '../constants/values';

import Education from './education.js';
import { education } from '../constants/values';

import Abilitie from './abilitie.js';
import { abilitie } from '../constants/values';

import Achievement from './achievement.js';
import { achievement } from '../constants/values';

import { Collapse } from 'antd';
import '../../node_modules/antd/dist/antd.css';

const Panel  = Collapse.Panel;
class Body extends Component{

    
    render () {
        const works = workExperience.map((work,index) => 
            <WorkExperience work = {work} key = {index}/>
        );

        const educations = education.map((educ,index) =>
            <Education educ = {educ} key = {index} />
        );

        const abilities = abilitie.map((name,index) => 
            <Abilitie name = {name} key = {index} />
        );

        const achievements = achievement.map((achiev,index) => 
            <Achievement achiev = {achiev} key = {index} />
        );
        return (
            <div className="body-wrapper">
                <div className="colum">
                    <Collapse defaultActiveKey={['1','2']}>
                        <Panel header="EXPERIENCIA LABORAL" key="1" >
                            {works}
                        </Panel>
                        <Panel header="EDUCACIÓN" key="2" >
                            {educations}
                        </Panel>
                    </Collapse>
                </div>
                <div className="colum">
                    <Collapse defaultActiveKey={['1','2','3']}>
                        <Panel header="HABILIDADES" key="1" >
                            <div className="abilities-wrapper">
                                {abilities}
                            </div>
                        </Panel>
                        <Panel header="LOGROS" key="2" >
                            {achievements}
                        </Panel>
                        <Panel header="CALIFICACIONES GENERALES" key="3" >
                            <p>"Hola"</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default Body;