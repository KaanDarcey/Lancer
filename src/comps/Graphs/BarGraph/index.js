import React from 'react';
import './BarGraph.scss';

function BarGraph({values, projects, x, y}){
    return(
        <div className='BarGraph-container'>
            <div className='BargGraph-vertical'>
                <p>{y[0]}-</p>
                <p>{y[1]}-</p>
                <p>{y[2]}-</p>
                <p>{y[3]}-</p>
                <p>{y[4]}-</p>
            </div>
            <div className='BarGraph-column'>
                <div className='BarGraph-chart'>
                    <div className='BarGraph-bar BarGraph-bar1' style={{height:values[0]}}></div>
                    <div className='BarGraph-bar BarGraph-bar2' style={{height:values[1]}}></div>
                    <div className='BarGraph-bar BarGraph-bar3' style={{height:values[2]}}></div>
                    <div className='BarGraph-bar BarGraph-bar4' style={{height:values[3]}}></div>
                    <div className='BarGraph-bar BarGraph-bar5' style={{height:values[4]}}></div>
                    <div className='BarGraph-bar BarGraph-bar6' style={{height:values[5]}}></div>
                    <div className='BarGraph-bar BarGraph-bar7' style={{height:values[6]}}></div>
                </div>
                <div className='BargGraph-horizontal'>
                    <p>{x[0]}</p>
                    <p>{x[1]}</p>
                    <p>{x[2]}</p>
                    <p>{x[3]}</p>
                    <p>{x[4]}</p>
                    <p>{x[5]}</p>
                    <p>{x[6]}</p>
                </div>
                <div className='BarGraph-projects'>
                    <div className='BarGraph-circle BarGraph-circle1'></div>
                    <h4>{projects[0]}</h4>

                    <div className='BarGraph-circle BarGraph-circle2'></div>
                    <h4>{projects[1]}</h4>

                    <div className='BarGraph-circle BarGraph-circle3'></div>
                    <h4>{projects[2]}</h4>

                    <div className='BarGraph-circle BarGraph-circle4'></div>
                    <h4>{projects[3]}</h4>
                </div>
            </div>
            
        </div>
    )
}

BarGraph.defaultProps = {
    values: ['50px', '40px', '200px','220px','20px','100px','140px'],
    projects:['Project A', 'Project B', 'Project C', 'Project D'],
    x:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    y:['320', '240', '160', '80', '0']
}

export default BarGraph;