import React from 'react';
import '../App.css'
import { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2'
import { Link } from "react-router-dom";
import { useAuthState } from '../Context';


function Estatistica() {

    useEffect(() => {
        getProjetos();
    }, [])
    const state = useAuthState();
    const [campus, setCampus] = useState([]);
    const [edital, setEdital] = useState([]);
    const [modalidade, setmodalidade] = useState([]);

    const getProjetos = () => {
        fetch('https://projetos-ext-upe.herokuapp.com/api/dados')
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                console.log(data);
                setCampus(data.campus);
                setEdital(data.edital);
                setmodalidade(data.modalidade);
            })

    

    }

    var countProjeto = modalidade.filter(x => x === 'PROJETO').length
    var countPrograma = modalidade.filter(x => x === 'PROGRAMA').length

    var countPFA = edital.filter(x => x === 'PFA').length
    var countFLUXO_CONTINUO = edital.filter(x => x === 'FLUXO_CONTINUO').length
    var countGaranhuns = campus.filter(x => x === 'Garanhuns').length
    var countArcoVerde = campus.filter(x => x === 'Arcoverde').length


    return (
        <div   id='descricao' >
            <div className='glassEffect' id='estatisticas'> 
            <h1>
                Estatistica
            </h1>

            <div className='graficos'>
                <div className='grafico' id='glassEffect'>
                    <Pie
                        data={{
                            labels: ['PROJETO', 'PROGRAMA'],
                            datasets: [
                                {
                                    label: 'Status',
                                    data: [countProjeto, countPrograma],
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',


                                    ],
                                    borderColor: [
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 99, 132, 1)',


                                    ],
                                    borderWidth: 1,
                                },

                            ],
                        }}
                        height={200}
                        width={300}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                            legend: {
                                labels: {
                                    fontSize: 15,
                                },
                            },
                        }}
                    />
                </div>
                <div className='grafico' id='glassEffect'>
                    <Pie
                        data={{
                            labels: ['FLUXO_CONTINUO', 'PFA'],
                            datasets: [
                                {
                                    label: 'Status',
                                    data: [countPFA, countFLUXO_CONTINUO],
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',


                                    ],
                                    borderColor: [
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 99, 132, 1)',

                                    ],
                                    borderWidth: 1,
                                },

                            ],
                        }}
                        height={200}
                        width={300}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                            legend: {
                                labels: {
                                    fontSize: 15,
                                },
                            },
                        }}
                    />
                </div>
                <div className='grafico' id='glassEffect'>
                    <Pie
                        data={{
                            labels: ['Garanhuns', 'Arcoverde'],
                            datasets: [
                                {
                                    label: 'Status',
                                    data: [countGaranhuns, countArcoVerde],
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 99, 132, 0.2)',


                                    ],
                                    borderColor: [
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 99, 132, 1)',

                                    ],
                                    borderWidth: 1,
                                },

                            ],
                        }}
                        height={200}
                        width={300}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                            legend: {
                                labels: {
                                    fontSize: 15,
                                },
                            },
                        }}
                    />
                </div>
            </div>
                <div className='legendas'>
                        <legend> Modalidade </legend>
                        <legend> Edital </legend>
                        <legend> Campus </legend>
                    </div>

                    </div>
        </div>
    )
}

export default Estatistica;