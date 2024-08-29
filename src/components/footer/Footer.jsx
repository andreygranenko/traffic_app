const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current">
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>
          EGavs Industries.
          <br />
          Building wonderful websites since 2022.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href={'https://www.linkedin.com/in/andrey-granenko-70414a25a/'} target="_blank" rel="noopener noreferrer">
            <svg className={'dark:hidden'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"
                 style={{fill:'#1A1A1A'}}>
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            <svg className={'hidden dark:block'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32"
                 style={{"fill": "#c9c5c5"}}>
              <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
            </svg>
          </a>
          <a href={'https://t.me/nuha1bebr'} target="_blank" rel="noopener noreferrer">
            <svg className={'dark:hidden'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
              <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
            </svg>
            <svg className={'hidden dark:block'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{"mixBlendMode": "normal"}}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.69071,0 -23,10.3093 -23,23c0,12.6907 10.30929,23 23,23c12.69071,0 23,-10.3093 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60983,0 21,9.39017 21,21c0,11.60983 -9.39017,21 -21,21c-11.60983,0 -21,-9.39017 -21,-21c0,-11.60982 9.39017,-21 21,-21zM34.08789,14.03516c-0.684,0 -1.45256,0.15842 -2.35156,0.48242c-1.396,0.503 -17.81559,7.47458 -19.68359,8.26758c-1.068,0.454 -3.05664,1.2985 -3.05664,3.3125c0,1.335 0.78227,2.28984 2.32227,2.83984c0.828,0.295 2.79455,0.89108 3.93555,1.20508c0.484,0.133 0.99834,0.20117 1.52734,0.20117c1.035,0 2.07658,-0.25789 2.89258,-0.71289c-0.007,0.168 -0.00242,0.33781 0.01758,0.50781c0.123,1.05 0.77047,2.03758 1.73047,2.64258c0.628,0.396 5.75744,3.83291 6.52344,4.37891c1.076,0.769 2.2655,1.17578 3.4375,1.17578c2.24,0 2.99152,-2.31283 3.35352,-3.42383c0.525,-1.613 2.49089,-14.72997 2.71289,-17.04297c0.151,-1.585 -0.50958,-2.89019 -1.76758,-3.49219c-0.471,-0.227 -1.00875,-0.3418 -1.59375,-0.3418zM34.08789,16.03516c0.275,0 0.52052,0.04548 0.72852,0.14648c0.473,0.227 0.71363,0.73305 0.64063,1.49805c-0.242,2.523 -2.20309,15.32928 -2.62109,16.61328c-0.358,1.098 -0.73512,2.04297 -1.45313,2.04297c-0.718,0 -1.50239,-0.25169 -2.27539,-0.80469c-0.773,-0.552 -5.90614,-3.99436 -6.61914,-4.44336c-0.625,-0.394 -1.28647,-1.37617 -0.35547,-2.32617c0.767,-0.782 6.58503,-6.42878 7.08203,-6.92578c0.37,-0.371 0.19698,-0.81836 -0.16602,-0.81836c-0.125,0 -0.27469,0.05269 -0.42969,0.17969c-0.608,0.497 -9.08436,6.169 -9.81836,6.625c-0.486,0.302 -1.23853,0.51953 -2.01953,0.51953c-0.333,0 -0.67014,-0.03991 -0.99414,-0.12891c-1.128,-0.311 -3.03692,-0.89016 -3.79492,-1.16016c-0.729,-0.26 -0.99414,-0.50908 -0.99414,-0.95508c0,-0.634 0.89489,-1.07166 1.83789,-1.47266c0.996,-0.423 18.23012,-7.74156 19.57812,-8.22656c0.624,-0.226 1.19483,-0.36328 1.67383,-0.36328z"></path></g></g>
            </svg>
          </a>
          <a href={'https://andreygranenko.github.io/portfolio-website/'} target="_blank" rel="noopener noreferrer">
            <svg className={'dark:hidden'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
              <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
            </svg>
            <svg className={'hidden dark:block'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
              <g fill="#e9e9e9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{"mixBlendMode": "normal"}}><g transform="scale(5.12,5.12)"><path d="M24.96289,1.05469c-0.20987,0.00724 -0.41214,0.08036 -0.57812,0.20898l-23,17.94727c-0.43579,0.33978 -0.51361,0.96851 -0.17383,1.4043c0.33978,0.43579 0.96851,0.51361 1.4043,0.17383l1.38477,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38477,1.08008c0.2819,0.21983 0.65967,0.27257 0.991,0.13833c0.33133,-0.13423 0.56586,-0.43504 0.61526,-0.7891c0.0494,-0.35406 -0.09386,-0.70757 -0.37579,-0.92736l-7.61523,-5.94141v-7.26953h-6v2.58594l-9.38477,-7.32227c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.32227l19,14.82617v26.85156h-12v-19h-14v19h-12v-26.85156zM37,8h2v3.70898l-2,-1.5625zM20,28h10v17h-10z"></path></g></g>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  )

}

export default Footer;