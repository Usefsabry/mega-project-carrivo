import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/images/logo2.png";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo" onClick={() => handleNavigation("/")}>
            <img src={logo2} alt="Carrivo" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">Find Your Path, Shape Your Future</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <span onClick={() => handleNavigation("/paths")} className="footer-link">Career Paths</span>
          <span onClick={() => handleNavigation("/mentors")} className="footer-link">Mentors</span>
          <span onClick={() => handleNavigation("/hub")} className="footer-link">Career Hub</span>
          <span onClick={() => handleNavigation("/personality")} className="footer-link">Personality Test</span>
          <span onClick={() => handleNavigation("/about")} className="footer-link">About Us</span>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3 className="footer-title">Support</h3>
          <span onClick={() => handleNavigation("/help")} className="footer-link">Help Center</span>
          <span onClick={() => handleNavigation("/faq")} className="footer-link">FAQs</span>
          <span onClick={() => handleNavigation("/terms")} className="footer-link">Terms & Conditions</span>
          <span onClick={() => handleNavigation("/privacy")} className="footer-link">Privacy Policy</span>
          <span onClick={() => handleNavigation("/cookies")} className="footer-link">Cookie Settings</span>
        </div>

        {/* Connect */}
        <div className="footer-column">
          <h3 className="footer-title">Connect</h3>
          <div className="footer-social">
            {/* Google */}
            <a href="#" className="social-icon" aria-label="Google">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 14.6667H27.3772C27.4359 15.1796 27.4667 15.7056 27.4667 16.2449C27.4667 19.8912 26.1605 22.9605 23.8965 25.0449C21.9156 26.8735 19.2053 27.9456 15.9728 27.9456C11.2924 27.9456 7.24355 25.2627 5.27347 21.3497C4.4626 19.7333 4 17.9048 4 15.9728C4 14.0408 4.4626 12.2123 5.27347 10.596C7.24355 6.68301 11.2924 4 15.9728 4C19.2 4 21.9101 5.18644 23.9836 7.11837L22.034 9.06801C20.4909 7.57537 18.4037 6.66667 16 6.66667C10.8453 6.66667 6.66667 10.8453 6.66667 16C6.66667 21.1547 10.8453 25.3333 16 25.3333C20.702 25.3333 24.1924 21.8564 24.7693 17.3333H16V14.6667Z" fill="#EEFBFF"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00351 21.9925L7.96981 22.556C9.58415 23.4973 11.4188 24 13.3334 24C19.2244 24 24 19.2244 24 13.3333C24 7.44229 19.2244 2.66667 13.3334 2.66667C7.44229 2.66667 2.66667 7.44229 2.66667 13.3333C2.66667 15.2484 3.16964 17.0837 4.11157 18.6984L4.67475 19.6637L3.80343 22.8659L7.00351 21.9925ZM0.00557359 26.6667L1.80819 20.042C0.658614 18.0715 0 15.7793 0 13.3333C0 5.96953 5.96953 0 13.3334 0C20.6971 0 26.6667 5.96953 26.6667 13.3333C26.6667 20.6971 20.6971 26.6667 13.3334 26.6667C10.8882 26.6667 8.59671 26.0085 6.62651 24.8596L0.00557359 26.6667ZM8.52179 7.07777C8.70029 7.06523 8.8794 7.06331 9.05815 7.07203C9.13036 7.07677 9.20223 7.08512 9.27415 7.09343C9.48649 7.11795 9.72 7.24727 9.79851 7.42525C10.1963 8.32715 10.5822 9.2342 10.9563 10.1462C11.0388 10.3475 10.9891 10.6084 10.832 10.8609C10.7523 10.9904 10.6271 11.172 10.482 11.3577C10.3312 11.5507 10.0067 11.9055 10.0067 11.9055C10.0067 11.9055 9.8752 12.0631 9.92476 12.2592C9.94407 12.3333 10.0056 12.4413 10.0615 12.5321C10.0924 12.5824 10.1211 12.6273 10.1397 12.6584C10.4809 13.2281 10.9396 13.8057 11.4999 14.3488C11.6604 14.5044 11.8162 14.6632 11.9836 14.8107C12.608 15.3612 13.3144 15.8111 14.0774 16.1443L14.0842 16.1473C14.1968 16.1959 14.2547 16.2224 14.4196 16.2924C14.5028 16.3276 14.5879 16.358 14.6752 16.3811C14.7068 16.3893 14.7392 16.394 14.7718 16.3963C14.9874 16.4092 15.112 16.2709 15.1652 16.2073C16.1299 15.0387 16.2182 14.9624 16.2248 14.9629V14.9651C16.3516 14.8315 16.551 14.7851 16.7288 14.796C16.81 14.8009 16.8908 14.8165 16.9647 14.8503C17.6738 15.1737 18.8331 15.6783 18.8331 15.6783L19.6084 16.0268C19.7383 16.0895 19.8568 16.2371 19.8626 16.3805C19.866 16.4697 19.8756 16.6137 19.8438 16.8772C19.802 17.2221 19.6971 17.6375 19.5928 17.8551C19.5195 18.0077 19.4246 18.1432 19.3142 18.2579C19.1644 18.4133 19.0532 18.5077 18.8732 18.6419C18.7636 18.7235 18.7068 18.7619 18.7068 18.7619C18.5216 18.8787 18.4172 18.9371 18.1966 19.0545C17.8534 19.2373 17.4742 19.3424 17.0858 19.3624C16.8382 19.3751 16.5912 19.3929 16.3439 19.3796C16.333 19.3789 15.5863 19.2643 15.5863 19.2643C13.6904 18.7656 11.9371 17.8315 10.4658 16.536C10.165 16.2712 9.88603 15.9847 9.60128 15.7012C8.41587 14.5211 7.51845 13.2485 6.97428 12.0448C6.70593 11.4512 6.53601 10.8155 6.53333 10.1613C6.52841 9.35207 6.79335 8.56427 7.28628 7.92248C7.38345 7.79596 7.47568 7.66473 7.63481 7.51448C7.80333 7.35535 7.91059 7.26992 8.02612 7.21081C8.18012 7.13203 8.34927 7.08989 8.52179 7.07777Z" fill="#EEFBFF"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 23.9175C19.9284 23.2613 24 18.7728 24 13.3333C24 7.44229 19.2244 2.66667 13.3334 2.66667C7.44229 2.66667 2.66667 7.44229 2.66667 13.3333C2.66667 18.7728 6.73825 23.2613 12 23.9175V16H9.33333V13.3333H12V11.1277C12 9.34473 12.1856 8.69816 12.5343 8.04631C12.8828 7.39445 13.3944 6.88288 14.0463 6.53427C14.5566 6.26139 15.1895 6.09669 16.2956 6.02605C16.7346 5.99801 17.3028 6.03377 18 6.13333V8.66667H17.3334C16.1103 8.66667 15.6056 8.72443 15.3039 8.88577C15.1168 8.98585 14.9859 9.11677 14.8858 9.30391C14.7244 9.60557 14.6667 9.90471 14.6667 11.1277V13.3333H18L17.3334 16H14.6667V23.9175ZM13.3334 26.6667C5.96953 26.6667 0 20.6971 0 13.3333C0 5.96953 5.96953 0 13.3334 0C20.6971 0 26.6667 5.96953 26.6667 13.3333C26.6667 20.6971 20.6971 26.6667 13.3334 26.6667Z" fill="#EEFBFF"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0013 12.7327C17.2241 11.4837 18.8161 10.666 20.668 10.666C24.718 10.666 28.0013 13.9492 28.0013 17.9993V27.9993H25.3347V17.9993C25.3347 15.422 23.2453 13.3327 20.668 13.3327C18.0907 13.3327 16.0013 15.422 16.0013 17.9993V27.9993H13.3347V11.3327H16.0013V12.7327ZM6.66797 8.66602C5.5634 8.66602 4.66797 7.77059 4.66797 6.66602C4.66797 5.56144 5.5634 4.66602 6.66797 4.66602C7.77253 4.66602 8.66797 5.56144 8.66797 6.66602C8.66797 7.77059 7.77253 8.66602 6.66797 8.66602ZM5.33464 11.3327H8.0013V27.9993H5.33464V11.3327Z" fill="#EEFBFF"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Separator */}
      <div className="footer-separator"></div>

      {/* Copyright */}
      <p className="footer-copyright">© 2025 Carrivo. All rights reserved</p>
    </footer>
  );
}