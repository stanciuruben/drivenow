import { useEffect, type FC, useRef } from 'react';
import Chart from 'chart.js/auto';

const Cards: FC<{
    isDarkMode: boolean | null;
}> = ({
    isDarkMode
}) => {
        const canvas = useRef<HTMLCanvasElement>(null);

        useEffect(() => {
            Chart.defaults.color = isDarkMode ? "#ffffff" : '#000000';
            const data = [
                { month: 'January', count: 45 },
                { month: 'February', count: 36 },
                { month: 'March', count: 42 },
                { month: 'April', count: 64 },
                { month: 'May', count: 64 },
                { month: 'June', count: 72 },
                { month: 'July', count: 105 },
                { month: 'August', count: 85 },
                { month: 'September', count: 54 },
                { month: 'October', count: 44 },
                { month: 'November', count: 39 },
                { month: 'December', count: 50 },
            ];
            const chart = new Chart(
                // @ts-expect-error
                canvas.current,
                {
                    type: 'bar',
                    data: {
                        labels: data.map(row => row.month),
                        datasets: [
                            {
                                label: 'Average Price',
                                data: data.map(row => row.count),
                                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                hoverBackgroundColor: '#1f2937',
                                borderColor: isDarkMode ? 'rgba(85, 81, 225, 0.5)' : 'rgba(85, 81, 225, 0.2)',
                                hoverBorderColor: 'rgba(85, 81, 225, 1)',
                                borderWidth: 3,
                                borderRadius: 10,
                                barThickness: 25,
                            }
                        ],
                    },
                    options: {
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                            title: {
                                align: 'start',
                                position: 'top',
                                text: 'Average daily price per month',
                                display: true,
                                font: {
                                    size: 16,
                                    weight: 'normal'
                                },
                                padding: 30
                            },
                            tooltip: {
                                titleAlign: 'center',
                                xAlign: 'center',
                                borderWidth: 3,
                                borderColor: 'rgba(85, 81, 225, 1)',
                                backgroundColor: '#1f2937',
                                callbacks: {
                                    label: function (context) {
                                        let label = context.dataset.label || '';

                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.y !== null) {
                                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    color: 'transparent'
                                },
                                ticks: {
                                    callback: function (value: number) {
                                        return data[value].month.charAt(0).toUpperCase();
                                    }
                                }
                            },
                            y: {
                                grid: {
                                    color: 'transparent'
                                },
                                ticks: {
                                    callback: function (value) {
                                        return '$' + value;
                                    }
                                }
                            }
                        },

                    }
                }
            );

            return () => {
                chart.destroy();
            }

        }, [isDarkMode])

        return (
            <article className='relative my-40'>
                <div className='relative mx-5 max-w-screen-lg lg:mx-auto h-[20rem] lg:h-[30rem]'>
                    <h2 className='text-2xl sm:text-4xl dark:text-white font-extrabold mb-10'>
                        When is the best time to rent a car?
                    </h2>
                    <canvas
                        ref={canvas}
                        id='prices'
                        aria-label="Average daily price per month"
                        role="img"
                    ></canvas>
                </div>
            </article>
        );

    }

export default Cards;