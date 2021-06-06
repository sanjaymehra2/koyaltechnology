import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Input.css';
import { FaLock } from 'react-icons/fa';

const Input = () => {
	return (
		<div className="container">
			<div className="row"></div>

			<div className="row">
				<h1>Get Back To Living</h1>
			</div>

			<div className="row">
				<p>
					Cyzplamovir should be available to everyone who needs it. Can't afford it? Enroll here to see if we
					can help.
				</p>
			</div>
			<div className="row">
				<div className="col-sm-8 row">
					<div className="mt-2 col-sm-6">
						{' '}
						<input type="text" placeholder="First name" className="form-control" />
					</div>
					<div className="mt-2 col-sm-6">
						<input type="text" placeholder="Last name" className="form-control" />
					</div>
					<div className="mt-2 col-sm-12">
						{' '}
						<input type="text" placeholder="Address 1" className="form-control" />
					</div>
					<div className="mt-2 col-sm-12">
						{' '}
						<input type="text" placeholder="Address 2" className="form-control" />
					</div>
					<div className="mt-2 col-sm-4">
						<input type="text" placeholder="City" className="form-control" />
					</div>
					<div className="mt-2 col-sm-4">
						<select className="form-control">
							<option value="0">Jharkhand</option>
							<option value="1">Mumbai</option>
							<option value="2">Bangalore</option>
							<option value="3">Hyderabad</option>
						</select>
					</div>
					<div className="mt-2 col-sm-4">
						<input type="number" placeholder="Zipcode" className="form-control" />
					</div>
					<div className="mt-2 col-sm-12">
						<input type="email" placeholder="Email" className="form-control" />
					</div>
				</div>

				<div className="col-sm-4 row">
					<div className="mt-2 col-sm-6"></div>

					<div className="mt-2 col-sm-8"></div>
					<div className="mt-2 col-sm-6">
						<FaLock />
						&nbsp;&nbsp;&nbsp;
						<button disabled className="btn btn-secondary" style={{ padding: '10px', width: '100px' }}>
							Enroll
						</button>
					</div>
					<div className="mt-2 col-sm-6"></div>
					<div className="mt-2 col-sm-8">
						<p>
							Questions?
							<a style={{ color: 'blue' }}>
								{' '}
								<u>Talk</u> with us
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Input;
