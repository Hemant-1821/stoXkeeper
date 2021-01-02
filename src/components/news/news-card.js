import React from 'react';
import './news.styles.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export const NewsDesign = (props)=>{
    return (
        <>
            {props.news.map(info =>
            (
                <div>
                    <Collapse accordion>
                        <Panel header={info.title} key={info.guid}>
                            <p>{info.description}</p>
                        </Panel>
                    </Collapse>
                </div>
            )
                )}
        </>
    )
}


