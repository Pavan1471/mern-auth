import Hero from '../components/Hero';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import FAQ from './FAQ';
const HomeScreen = () => {
  return(
    /* From Uiverse.io by Yaya12085 */ 
<>
<div className="link-container">
        <Link to='/book' className="button">Book Now</Link>
        <Link to='/complaint' className="button">Complaint Now</Link>
      </div>

<div class="cards-con">
<div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
				 299₹ <small>/ m</small>
				</span>
			</span>
			<p class="title">Basic</p>
			<p class="info">This plan is for those who have a team already and running a large business.</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>5</strong>Mbps speed</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>100 <strong>GB data</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Basic Support</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>
  <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					599₹ <small>/ m</small>
				</span>
			</span>
			<p class="title">Silver</p>
			<p class="info">This plan is for those who have a team already and running a large business.</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>20</strong>Mbps speed</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>300 <strong>GB data</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Priority Support</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>
  <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					1199₹ <small>/ m</small>
				</span>
			</span>
			<p class="title">Premium</p>
			<p class="info">This plan is for those who have a team already and running a large business.</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>50</strong>Mbps speed</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span> <strong>Unlimited data</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>24/7 Support</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>
  


</div>
<FAQ />

      {/* Footer Section */}
      <Footer />
</>
  )
};
export default HomeScreen;
