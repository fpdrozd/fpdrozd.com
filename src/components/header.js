import React, { useState } from 'react'
import useInterval from 'src/helpers/useInterval'

const Header = () => {
  const [expanded, setExpanded] = useState(true)

  useInterval(() => {
    setExpanded(!expanded)
  }, 3000)

  return (
    <header className="header">
      <svg id="logo" className={expanded ? 'show' : 'hide'} height="20" viewBox="0 0 352 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.928 34.08C19.736 34.08 19.464 33.968 19.112 33.744L1.832 21.984C1.352 21.664 1 21.36 0.776002 21.072C0.552002 20.752 0.440002 20.368 0.440002 19.92V18.432C0.440002 17.984 0.552002 17.6 0.776002 17.28C1 16.96 1.352 16.64 1.832 16.32L19.112 4.55999C19.496 4.368 19.768 4.272 19.928 4.272C20.216 4.272 20.456 4.368 20.648 4.55999C20.84 4.71999 20.936 4.94399 20.936 5.23199V10.416C20.936 10.864 20.808 11.232 20.552 11.52C20.328 11.776 20.008 12.032 19.592 12.288L9.128 19.152L19.592 26.064C20.04 26.32 20.376 26.576 20.6 26.832C20.824 27.088 20.936 27.44 20.936 27.888V33.072C20.936 33.36 20.84 33.6 20.648 33.792C20.456 33.984 20.216 34.08 19.928 34.08Z" fill="white"/>
        <path d="M30.6609 36C30.3409 36 30.0529 35.888 29.7969 35.664C29.5729 35.408 29.4609 35.12 29.4609 34.8V17.328H25.8129C25.4609 17.328 25.1729 17.216 24.9489 16.992C24.7249 16.768 24.6129 16.48 24.6129 16.128V12.24C24.6129 11.888 24.7249 11.6 24.9489 11.376C25.1729 11.152 25.4609 11.04 25.8129 11.04H29.4609V9.50399C29.4609 6.33599 30.3569 4.04799 32.1489 2.63999C33.9729 1.2 36.5809 0.479996 39.9729 0.479996H43.7169C44.0689 0.479996 44.3569 0.591995 44.5809 0.815994C44.8049 1.04 44.9169 1.328 44.9169 1.67999V5.568C44.9169 5.888 44.8049 6.17599 44.5809 6.43199C44.3569 6.65599 44.0689 6.76799 43.7169 6.76799H40.3569C39.3009 6.76799 38.5489 7.02399 38.1009 7.53599C37.6529 8.016 37.4289 8.752 37.4289 9.74399V11.04H43.2369C43.5889 11.04 43.8769 11.152 44.1009 11.376C44.3249 11.6 44.4369 11.888 44.4369 12.24V16.128C44.4369 16.448 44.3249 16.736 44.1009 16.992C43.8769 17.216 43.5889 17.328 43.2369 17.328H37.4289V34.8C37.4289 35.12 37.3169 35.408 37.0929 35.664C36.8689 35.888 36.5809 36 36.2289 36H30.6609Z" fill="transparent"/>
        <path d="M49.1101 45.12C48.7901 45.12 48.5021 45.008 48.2461 44.784C48.0221 44.56 47.9101 44.272 47.9101 43.92V12.24C47.9101 11.888 48.0221 11.6 48.2461 11.376C48.5021 11.152 48.7901 11.04 49.1101 11.04H54.5341C54.8861 11.04 55.1741 11.152 55.3981 11.376C55.6221 11.6 55.7341 11.888 55.7341 12.24V13.968C57.4621 11.696 59.9421 10.56 63.1741 10.56C66.3101 10.56 68.7581 11.536 70.5181 13.488C72.2781 15.44 73.2381 18.192 73.3981 21.744C73.4301 22.16 73.4461 22.752 73.4461 23.52C73.4461 24.288 73.4301 24.88 73.3981 25.296C73.2701 28.752 72.3101 31.488 70.5181 33.504C68.7261 35.488 66.2781 36.48 63.1741 36.48C60.0381 36.48 57.7021 35.408 56.1661 33.264V43.92C56.1661 44.272 56.0541 44.56 55.8301 44.784C55.6061 45.008 55.3181 45.12 54.9661 45.12H49.1101ZM60.5821 30.048C62.0861 30.048 63.1581 29.6 63.7981 28.704C64.4701 27.808 64.8541 26.576 64.9501 25.008C65.0141 24.368 65.0461 23.872 65.0461 23.52C65.0461 23.168 65.0141 22.672 64.9501 22.032C64.8541 20.464 64.4701 19.232 63.7981 18.336C63.1581 17.44 62.0861 16.992 60.5821 16.992C59.1101 16.992 58.0221 17.456 57.3181 18.384C56.6461 19.28 56.2621 20.448 56.1661 21.888L56.1181 23.664L56.1661 25.488C56.2301 26.8 56.6301 27.888 57.3661 28.752C58.1021 29.616 59.1741 30.048 60.5821 30.048Z" fill="transparent"/>
        <path d="M87.5034 36.48C84.3674 36.48 81.9194 35.504 80.1594 33.552C78.4314 31.568 77.4874 28.784 77.3274 25.2L77.2794 23.52L77.3274 21.792C77.4554 18.336 78.3994 15.6 80.1594 13.584C81.9514 11.568 84.3994 10.56 87.5034 10.56C90.4154 10.56 92.7674 11.504 94.5594 13.392V3.11999C94.5594 2.76799 94.6714 2.47999 94.8954 2.256C95.1194 2.03199 95.4074 1.91999 95.7594 1.91999H101.615C101.967 1.91999 102.255 2.03199 102.479 2.256C102.703 2.47999 102.815 2.76799 102.815 3.11999V34.8C102.815 35.12 102.703 35.408 102.479 35.664C102.255 35.888 101.967 36 101.615 36H96.1914C95.8714 36 95.5834 35.888 95.3274 35.664C95.1034 35.408 94.9914 35.12 94.9914 34.8V33.264C93.2314 35.408 90.7354 36.48 87.5034 36.48ZM90.1434 30.048C91.5834 30.048 92.6554 29.6 93.3594 28.704C94.0634 27.776 94.4634 26.592 94.5594 25.152C94.5914 24.736 94.6074 24.128 94.6074 23.328C94.6074 22.56 94.5914 21.968 94.5594 21.552C94.4954 20.24 94.0954 19.152 93.3594 18.288C92.6234 17.424 91.5514 16.992 90.1434 16.992C88.6394 16.992 87.5514 17.44 86.8794 18.336C86.2394 19.232 85.8714 20.464 85.7754 22.032C85.7434 22.352 85.7274 22.848 85.7274 23.52C85.7274 24.192 85.7434 24.688 85.7754 25.008C85.8714 26.576 86.2394 27.808 86.8794 28.704C87.5514 29.6 88.6394 30.048 90.1434 30.048Z" fill="transparent"/>
        <path d="M109.673 36C109.321 36 109.033 35.888 108.809 35.664C108.585 35.44 108.473 35.152 108.473 34.8V12.24C108.473 11.888 108.585 11.6 108.809 11.376C109.033 11.152 109.321 11.04 109.673 11.04H115.193C115.545 11.04 115.833 11.168 116.057 11.424C116.313 11.648 116.441 11.92 116.441 12.24V14.16C118.201 12.08 120.569 11.04 123.545 11.04H125.657C126.009 11.04 126.297 11.152 126.521 11.376C126.745 11.6 126.857 11.888 126.857 12.24V17.184C126.857 17.504 126.745 17.792 126.521 18.048C126.297 18.272 126.009 18.384 125.657 18.384H121.001C119.689 18.384 118.665 18.752 117.929 19.488C117.225 20.192 116.873 21.2 116.873 22.512V34.8C116.873 35.152 116.745 35.44 116.489 35.664C116.265 35.888 115.977 36 115.625 36H109.673Z" fill="transparent"/>
        <path d="M141.843 36.48C137.875 36.48 134.819 35.536 132.675 33.648C130.531 31.76 129.363 29.104 129.171 25.68C129.139 25.264 129.123 24.544 129.123 23.52C129.123 22.496 129.139 21.776 129.171 21.36C129.363 17.968 130.563 15.328 132.771 13.44C134.979 11.52 138.003 10.56 141.843 10.56C145.715 10.56 148.755 11.52 150.963 13.44C153.171 15.328 154.371 17.968 154.563 21.36C154.595 21.776 154.611 22.496 154.611 23.52C154.611 24.544 154.595 25.264 154.563 25.68C154.371 29.104 153.203 31.76 151.059 33.648C148.915 35.536 145.843 36.48 141.843 36.48ZM141.843 30.624C143.251 30.624 144.291 30.208 144.963 29.376C145.635 28.512 146.019 27.2 146.115 25.44C146.147 25.12 146.163 24.48 146.163 23.52C146.163 22.56 146.147 21.92 146.115 21.6C146.019 19.872 145.619 18.576 144.915 17.712C144.243 16.848 143.219 16.416 141.843 16.416C139.187 16.416 137.779 18.144 137.619 21.6L137.571 23.52L137.619 25.44C137.683 27.2 138.051 28.512 138.723 29.376C139.427 30.208 140.467 30.624 141.843 30.624Z" fill="transparent"/>
        <path d="M159.337 36C159.017 36 158.729 35.888 158.473 35.664C158.249 35.408 158.137 35.12 158.137 34.8V31.056C158.137 30.48 158.392 29.936 158.904 29.424L170.137 17.232H159.769C159.417 17.232 159.113 17.12 158.857 16.896C158.633 16.672 158.521 16.384 158.521 16.032V12.24C158.521 11.888 158.633 11.6 158.857 11.376C159.113 11.152 159.417 11.04 159.769 11.04H179.064C179.416 11.04 179.704 11.152 179.928 11.376C180.152 11.6 180.264 11.888 180.264 12.24V16.32C180.264 16.768 180.04 17.248 179.592 17.76L168.648 29.808H180.025C180.377 29.808 180.665 29.92 180.889 30.144C181.145 30.368 181.273 30.656 181.273 31.008V34.8C181.273 35.152 181.145 35.44 180.889 35.664C180.665 35.888 180.377 36 180.025 36H159.337Z" fill="transparent"/>
        <path d="M194.847 36.48C191.711 36.48 189.263 35.504 187.503 33.552C185.775 31.568 184.831 28.784 184.671 25.2L184.623 23.52L184.671 21.792C184.799 18.336 185.743 15.6 187.503 13.584C189.295 11.568 191.743 10.56 194.847 10.56C197.759 10.56 200.111 11.504 201.903 13.392V3.11999C201.903 2.76799 202.015 2.47999 202.239 2.256C202.463 2.03199 202.751 1.91999 203.103 1.91999H208.959C209.311 1.91999 209.599 2.03199 209.823 2.256C210.047 2.47999 210.159 2.76799 210.159 3.11999V34.8C210.159 35.12 210.047 35.408 209.823 35.664C209.599 35.888 209.311 36 208.959 36H203.535C203.215 36 202.927 35.888 202.671 35.664C202.447 35.408 202.335 35.12 202.335 34.8V33.264C200.575 35.408 198.079 36.48 194.847 36.48ZM197.487 30.048C198.927 30.048 199.999 29.6 200.703 28.704C201.407 27.776 201.807 26.592 201.903 25.152C201.935 24.736 201.951 24.128 201.951 23.328C201.951 22.56 201.935 21.968 201.903 21.552C201.839 20.24 201.439 19.152 200.703 18.288C199.967 17.424 198.895 16.992 197.487 16.992C195.983 16.992 194.895 17.44 194.223 18.336C193.583 19.232 193.215 20.464 193.119 22.032C193.087 22.352 193.071 22.848 193.071 23.52C193.071 24.192 193.087 24.688 193.119 25.008C193.215 26.576 193.583 27.808 194.223 28.704C194.895 29.6 195.983 30.048 197.487 30.048Z" fill="transparent"/>
        <path d="M216.776 36C216.456 36 216.168 35.888 215.912 35.664C215.688 35.408 215.576 35.12 215.576 34.8V28.704C215.576 28.352 215.688 28.064 215.912 27.84C216.168 27.616 216.456 27.504 216.776 27.504H222.872C223.224 27.504 223.512 27.616 223.736 27.84C223.96 28.064 224.072 28.352 224.072 28.704V34.8C224.072 35.12 223.96 35.408 223.736 35.664C223.512 35.888 223.224 36 222.872 36H216.776Z" fill="transparent"/>
        <path d="M240.695 36.48C237.079 36.48 234.151 35.52 231.911 33.6C229.671 31.648 228.471 28.944 228.311 25.488L228.263 23.568L228.311 21.6C228.439 18.144 229.623 15.44 231.863 13.488C234.135 11.536 237.079 10.56 240.695 10.56C243.415 10.56 245.703 11.056 247.559 12.048C249.447 13.008 250.839 14.176 251.735 15.552C252.663 16.896 253.159 18.128 253.223 19.248C253.255 19.568 253.143 19.856 252.887 20.112C252.663 20.336 252.375 20.448 252.023 20.448H245.927C245.575 20.448 245.303 20.368 245.111 20.208C244.919 20.048 244.743 19.808 244.583 19.488C244.199 18.496 243.703 17.792 243.095 17.376C242.519 16.96 241.767 16.752 240.839 16.752C238.215 16.752 236.855 18.448 236.759 21.84L236.711 23.664L236.759 25.248C236.823 26.976 237.191 28.256 237.863 29.088C238.567 29.888 239.559 30.288 240.839 30.288C241.831 30.288 242.615 30.08 243.191 29.664C243.767 29.248 244.231 28.544 244.583 27.552C244.743 27.232 244.919 26.992 245.111 26.832C245.303 26.672 245.575 26.592 245.927 26.592H252.023C252.343 26.592 252.615 26.704 252.839 26.928C253.095 27.12 253.223 27.376 253.223 27.696C253.223 28.72 252.775 29.92 251.879 31.296C251.015 32.672 249.639 33.888 247.751 34.944C245.863 35.968 243.511 36.48 240.695 36.48Z" fill="transparent"/>
        <path d="M269.343 36.48C265.375 36.48 262.319 35.536 260.175 33.648C258.031 31.76 256.863 29.104 256.671 25.68C256.639 25.264 256.623 24.544 256.623 23.52C256.623 22.496 256.639 21.776 256.671 21.36C256.863 17.968 258.063 15.328 260.271 13.44C262.479 11.52 265.503 10.56 269.343 10.56C273.215 10.56 276.255 11.52 278.463 13.44C280.671 15.328 281.871 17.968 282.063 21.36C282.095 21.776 282.111 22.496 282.111 23.52C282.111 24.544 282.095 25.264 282.063 25.68C281.871 29.104 280.703 31.76 278.559 33.648C276.415 35.536 273.343 36.48 269.343 36.48ZM269.343 30.624C270.751 30.624 271.791 30.208 272.463 29.376C273.135 28.512 273.519 27.2 273.615 25.44C273.647 25.12 273.663 24.48 273.663 23.52C273.663 22.56 273.647 21.92 273.615 21.6C273.519 19.872 273.119 18.576 272.415 17.712C271.743 16.848 270.719 16.416 269.343 16.416C266.687 16.416 265.279 18.144 265.119 21.6L265.071 23.52L265.119 25.44C265.183 27.2 265.551 28.512 266.223 29.376C266.927 30.208 267.967 30.624 269.343 30.624Z" fill="transparent"/>
        <path d="M288.079 36C287.727 36 287.439 35.888 287.215 35.664C286.991 35.44 286.879 35.152 286.879 34.8V12.24C286.879 11.888 286.991 11.6 287.215 11.376C287.439 11.152 287.727 11.04 288.079 11.04H293.311C293.663 11.04 293.951 11.152 294.175 11.376C294.399 11.6 294.511 11.888 294.511 12.24V13.872C295.247 12.912 296.223 12.128 297.439 11.52C298.687 10.88 300.079 10.56 301.615 10.56C305.135 10.56 307.567 11.936 308.911 14.688C309.679 13.472 310.751 12.48 312.127 11.712C313.503 10.944 314.975 10.56 316.543 10.56C319.167 10.56 321.295 11.456 322.927 13.248C324.591 15.008 325.423 17.648 325.423 21.168V34.8C325.423 35.12 325.311 35.408 325.087 35.664C324.863 35.888 324.575 36 324.223 36H318.655C318.303 36 317.999 35.888 317.743 35.664C317.519 35.44 317.407 35.152 317.407 34.8V21.504C317.407 19.904 317.071 18.752 316.399 18.048C315.759 17.344 314.879 16.992 313.759 16.992C312.735 16.992 311.887 17.36 311.215 18.096C310.543 18.8 310.207 19.936 310.207 21.504V34.8C310.207 35.12 310.095 35.408 309.871 35.664C309.647 35.888 309.359 36 309.007 36H303.439C303.087 36 302.799 35.888 302.575 35.664C302.351 35.44 302.239 35.152 302.239 34.8V21.504C302.239 19.936 301.887 18.8 301.183 18.096C300.511 17.36 299.647 16.992 298.591 16.992C297.567 16.992 296.703 17.36 295.999 18.096C295.327 18.8 294.991 19.92 294.991 21.456V34.8C294.991 35.12 294.879 35.408 294.655 35.664C294.431 35.888 294.143 36 293.791 36H288.079Z" fill="transparent"/>
        <path d="M331.856 34.08C331.6 34.08 331.376 33.984 331.184 33.792C330.992 33.6 330.896 33.36 330.896 33.072V27.888C330.896 27.44 331.008 27.088 331.232 26.832C331.456 26.576 331.792 26.32 332.24 26.064L342.656 19.152L332.24 12.288C331.824 12.032 331.488 11.776 331.232 11.52C331.008 11.232 330.896 10.864 330.896 10.416V5.23199C330.896 4.94399 330.992 4.71999 331.184 4.55999C331.376 4.368 331.6 4.272 331.856 4.272C332.08 4.272 332.352 4.368 332.672 4.55999L350 16.32C350.48 16.64 350.832 16.96 351.056 17.28C351.28 17.6 351.392 17.984 351.392 18.432V19.92C351.392 20.368 351.28 20.752 351.056 21.072C350.832 21.36 350.48 21.664 350 21.984L332.672 33.744C332.384 33.968 332.112 34.08 331.856 34.08Z" fill="white"/>
      </svg>
    </header>
  )
}

export default Header