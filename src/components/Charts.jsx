import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Charts= (props)=>{
    const { fruit1, fruit2, mode } = props;
    const label = ["carbohydrates", "protein", "fat", "calories", "sugar"]
    const getData = (fruit) => {
        let data = [];
        for (const key in fruit[1]) {
            data.push(fruit[1][key])
        }
        return data;
    }
    const barOptions = {
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Set legend label color to white
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // Set x-axis label color to white
                },
            },
            y: {
                ticks: {
                    color: 'white', // Set y-axis label color to white
                },
            },
        },
    };
    const lineOptions = {
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Set legend label color to white
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // Set x-axis label color to white
                },
            },
            y: {
                ticks: {
                    color: 'white', // Set y-axis label color to white
                },
            },
        },
    };
    return (
        <>
            {mode === 'bar' ?
                <Bar
                    width={'100%'}
                    height={'auto'}
                    style={{ maxHeight: '500px' }}
                    datasetIdKey='id'
                    data={{
                        labels: label,
                        datasets: [
                            {
                                id: 1,
                                label: `${fruit1[0]}`,
                                data: getData(fruit1),
                                backgroundColor: "rgb(0,0,0)",
                                borderColor: "#363636"
                            },
                            {
                                id: 2,
                                label: `${fruit2[0]}`,
                                data: getData(fruit2),
                                backgroundColor: "rgb(255,255,255)",
                                borderColor: "#363636"
                            },
                        ]

                    }}
                    options={barOptions}
                />

                :

                <Line
                    width={'100%'}
                    height={'auto'}
                    style={{ maxHeight: '500px' }}
                    datasetIdKey='id'
                    data={{
                        labels: label,
                        datasets: [
                            {
                                id: 1,
                                label: `${fruit1[0]}`,
                                data: getData(fruit1),
                                fill: "start",
                                backgroundColor: "rgb(0,0,0)",
                                borderColor: "#363636",
                            },
                            {
                                id: 2,
                                label: `${fruit2[0]}`,
                                data: getData(fruit2),
                                fill: 'start',
                                backgroundColor: "rgb(255,255,255)",
                                borderColor: "#363636"
                            },
                        ]
                    }}
                    options={lineOptions}
                />
            }
        </>
    )
}
export default Charts