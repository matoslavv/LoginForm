import React from 'react';
import Hero from '../assets/illustration-hero.svg';
import IconMusic from '../assets/icon-music.svg';

const Form = (): JSX.Element => {
	return (
		<>
			<div className="card">
				<img className="card__img" src={Hero} alt="" />
				<div className="card__wrapper">
					<header>
						<h2 className="card__headline">Order Summary</h2>
					</header>
					<main>
						<p className="card__text">
							You can now listen to millions of songs, audiobooks, and podcasts
							on any device anywhere you like!
						</p>
						<div className="card__plan">
							<img src={IconMusic} alt="Icon" />
							<div className="card__plan__option">
								<h5 className="card__plan__title">Annual Plan</h5>
								<small className="card__plan__price">$59.99/year</small>
							</div>
							<a href="#" className="card__plan__link">
								Change
							</a>
						</div>
					</main>
					<footer className="card__footer">
						<button className="proceed-btn">Proceed to Payment</button>
						<button className="cancel-btn">Cancel Order</button>
					</footer>
				</div>
			</div>
		</>
	);
};

export default Form;
