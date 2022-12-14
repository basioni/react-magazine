import React, { useState } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Chart } from 'primereact/chart';

import UsersRegisteredWidget from './widgets/UsersRegisteredWidget';

import './dashboard.css';

const Dashboard = () => {

    const items = [
        { label: 'Dashboard' }
    ];
    
    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }
 
    const stackedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'bar',
            label: 'Meetings',
            backgroundColor: '#42A5F5',
            data: [
                50,
                25,
                12,
                48,
                190,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Calls',
            backgroundColor: '#66BB6A',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ]
        }, {
            type: 'bar',
            label: 'Tasks',
            backgroundColor: '#FFA726',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };

    let stackedOptions = {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <div className="container">
            <div className="container">
            <BreadCrumb model={items} home={home}/>
            </div>
            <div className="container">
                <div className="grid">
                    <div className="col-4">
                        <Fieldset legend="Events Insights">
                            <div className="card">
                             <h5>Stacked</h5>
                            <Chart type="bar" data={stackedData} options={stackedOptions} />
                            </div>                  
                        </Fieldset>
                    </div>
                    <div className="col-4">
                        <Fieldset legend="Recent Signups">
                        <UsersRegisteredWidget />
                        </Fieldset>
                    </div>
                    <div className="col-4">
                        <Fieldset legend="Recent Activity">
                            <div className="text-700 text-center">
                                <div className="text-900 font-bold text-5xl mb-3">Dashboard</div>
                                <div className="text-700 text-2xl mb-5">
                                    Display a list of TODO items (each item must have a unique ID, title and description).
                                </div>
                            </div>
                        </Fieldset>
                    </div>
                `</div>

            </div>
        </div>
    );
};

export default Dashboard;