import React from 'react';
import './PieGraph.scss';
import PieChart from 'react-minimal-pie-chart';

function PieGraph({titles,values,clrs, caption}){
    return(
        <div className='PieGraph-container'>
            <div className='AdvancedAnalyticsPage-pie'>
                        <PieChart 
                            data={[
                                { title: titles[0], value: values[0], color: clrs[0] },
                                { title: titles[1], value: values[1], color: clrs[1] },
                                { title: titles[2], value: values[2], color: clrs[2] },
                            ]}
                        />
                        <div className='BarGraph-pie-hole'><h4>{caption}</h4></div>
                    </div>
        </div>
    )
}

PieGraph.defaultProps = {
    titles:['Project A','Project B','Project C'],
    values:[60,15,25],
    clrs:['#153243', 'red', '#368edf'],
    caption:'60%'
}

export default PieGraph;