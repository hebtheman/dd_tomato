import { SignUp } from "../form/form";

import "../../styles/footer/footer.css"

export function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-col-1">
                    <img className="logo" src="media/images/logo-tom.png" alt="logo" />
                    <h3>Tomato</h3>
                </div>
                <div className="footer-col-2">
                 <h3>Useful Links</h3>
                        <ul>
                            <li>More Info</li>
                            <li>History</li>
                            <li>Become A Tomato</li>
                            <li>Join Us</li>
                        </ul>
                </div>
                <div className="footer-col-3">
                    <SignUp />
                </div>
            </div>
        </section>
    )
}
