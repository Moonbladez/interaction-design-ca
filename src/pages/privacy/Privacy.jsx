import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";

import style from "./Privacy.module.scss";

export class Privacy extends Component {
	render() {
		return (
			<Layout>
				<BannerBottom />
				<section className={style.privacy}>
					<h2>Privacy Policy</h2>
					<div className={style.text}>
						<address>658 Mill Road London SE03 5IW</address>
						<p>
							Protection Officer: Joe Bloggs{" "}
							<a href='mailto:joe@lethera.com'> joe@lethera.com</a>
						</p>
						<p>
							Lethera Ltd. takes your privacy seriously and is committed to
							being fair and transparent about how it collects and uses that
							data and in meeting its data protection obligations. This Privacy
							Notice sets out how we collect, process and store your personal
							data as well as your rights in relation to your personal data. If
							you have any queries or would like any further information
							relating to this Privacy Notice or about exercising any of your
							rights, please contact us via email: leathera@lethera.com
						</p>
						<h3>What personal data do we collect? </h3>
						<p>
							The personal information that we collect about you may include
							your name and place of work details including: address, telephone
							number and email.
						</p>
						<p>
							We collect this personal data through information you provide when
							you:
						</p>
						<ul>
							<li>Contact us by phone, email or in writing</li>
							<li>
								Request information regarding our products and/or services via
								email, telephone or submitting a form through our website
							</li>
							<li>
								Enter into a contract to receive our products and/ or services
							</li>
							<li>Setting up an account with us</li>
							<li>
								Sign up through our website to download information from our
								Resources area
							</li>
							<li>Sign up to receive communications from us</li>
							<li>Complete a customer satisfaction survey</li>
						</ul>
						<p>
							We may automatically collect information if you visit our website,
							including details of your visits, but not limited to, traffic
							data, location data, weblogs and other communication data and the
							resources you accessed.
						</p>
						<p>
							We may collect technical information about your computer,
							including IP address, operating system and browser type.
						</p>
						<h3>How do we use your personal data?</h3>
						<p>
							We process personal information for certain legitimate business
							purposes, which may include:
						</p>
						<ul>
							<li>Providing products and/or services to you</li>
							<li>Fulfilling our contractual agreements to you</li>
							<li>
								Communicating with you in relation to the potential provision of
								products and/ or services
							</li>
							<li>
								Creating an account and invoicing for products and/ or services
								provided to you
							</li>
							<li>
								Providing you with industry information, surveys, newsletters,
								offers, promotions, related products and/or services which may
								be of interest to you
							</li>
							<li>
								Communicating with you in relation to any complaints, issues or
								disputes
							</li>
							<li>
								Analysing marketing data, promotional campaigns, website visits
								in order to make improvements to our products and/or services
							</li>
							<li>
								Requesting customer feedback relating to the provision of our
								products and/ or services
							</li>
						</ul>
						<p>
							You have the right to object to the processing of your personal
							data on the basis of Legitimate Interest as detailed in the ‘Your
							Rights’ section of this document.
						</p>
						<p>
							You also have the right to change your preferences or unsubscribe
							from any marketing communications from us. Every communication we
							send will give you the opportunity to opt-out or select the
							products and/ or services that you are interested in.
						</p>
						<h3>Who do we share your personal data with?</h3>
						<p>
							Your personal data will only be accessed by those who have a
							genuine business need to know it. This may on occasion mean that
							your personal information will be shared with a trusted third
							party in the course of fulfilling our contractual obligations to
							you, for example:
						</p>
						<ul>
							<li>
								Associate consultants and/ or trainers when providing our
								products and/ or services to you
							</li>
							<li>
								Our trading partners to enable provision of quotations or to
								deliver agreed products and/ or services to you
							</li>
							<li>
								Our IT and CRM support service providers in connection with
								maintaining our systems and continuation of services to you.
							</li>
						</ul>
						<p>
							Where we engage third parties to process personal data on our
							behalf, they do so on the basis of written instructions, are under
							a duty of confidentiality and are obliged to impellent appropriate
							technical and organisational measures to ensure the security of
							data.
						</p>
						<h3>Your Rights</h3>
						<p>
							You have various rights with respect to our use of your personal
							data, these include:
						</p>
						<ul>
							<li>Access and obtain a copy of your data on request</li>
							<li>
								Require the organisation to change incorrect or incomplete data
							</li>
							<li>
								Require the organisation to delete or stop processing your data,
								for example where the data is no longer necessary for the
								purposes of processing
							</li>
							<li>
								Object to the processing of your data where the organisation is
								relying on its legitimate interests as the legal ground for
								processing
							</li>
							<li>
								Ask the organisation to stop processing data for a period if
								data is inaccurate or there is a dispute about whether or not
								your interests override the organisation's legitimate grounds
								for processing data
							</li>
						</ul>
						<p>
							If you would like to exercise any of these rights, please contact
							Letha directly via email:
							<a href='mailto:letha@letha.co.uk'>letha@letha.co.uk</a> If you
							believe that the organisation has not complied with your data
							protection rights, you can complain to the Information
							Commissioner.
						</p>
					</div>
				</section>
			</Layout>
		);
	}
}
