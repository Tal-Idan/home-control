import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Usage = () => {
	const [chartData, setChartData] = useState({});

	const chart = () => {
		setChartData({
			labels: new Array(25).fill('|'),
			datasets: [
				{
					label: '',
					fill: true,
					backgroundColor: 'rgba(43, 182, 163, 0.7)',
					borderColor: 'blue',
					borderWidth: 2,
					data: new Array(25).fill(0),
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<div className="text-light text-center shadow">
			<h1>System Usage</h1>
			<div className="usage">
				<div className="cpu-chart">
					<Line
						style={{ width: 'inherit' }}
						data={chartData}
						options={{
							responsive: true,
							legend: { display: false },
							elements: { line: { tension: 0 } },
							scales: {
								xAxes: [{ ticks: { fontColor: '#77ddff' } }],
								yAxes: [{ ticks: { fontColor: '#77ddff' } }],
							},
						}}
					/>
					<div className="usage-controls">
						<div className="basic-form simple-flex">
							<button>Run CPU Usage</button>
							<button>Stop CPU usage</button>
						</div>
						<div className="basic-form simple-flex my-2">
							<h2>Memory usage in MB</h2>
							<h3>Total: </h3>
							<h3>Used: </h3>
							<h3>Free: </h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Usage;
