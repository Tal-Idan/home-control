import React from 'react';

const Control = () => {
	return (
		<div className="main-control text-light">
			<div class="control cameras">
				<div id="MS">
					<img id="MS_prim" src=""></img>
				</div>
			</div>
			<div class="control lights">
				<h2>Light Control</h2>
				<div id="LB">
					<button>Sink</button>
					<button>Rm 1</button>
					<button>Rm 2</button>
					<button>Rm 3</button>
				</div>
			</div>
			<div class="control atmosphere">
				<h2>Climate & Control</h2>
				<div class="atmos-elem">
					<div id="HT">
						<h3 id="HT_temp">Temperature: </h3>
						<h3 id="HT_humi">Humidity: </h3>
					</div>

					<div id="AC">
						<select class="air-mode" id="AC_mode">
							<option value="none">None</option>
							<option value="vent">Vent</option>
							<option value="cold">Cold</option>
							<option value="heat">Heat</option>
						</select>
						<select class="air-temp" id="AC_temp">
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<button
							class="ctlbtn"
							id="AC_exec"
							onclick="btnPost('AC_' + document.getElementById('AC_mode').value, true, document.getElementById('AC_temp').value)"
						>
							Set
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Control;
