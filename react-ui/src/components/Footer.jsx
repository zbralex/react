import React from 'react'

function Footer() {
    const footerList = {
        home: 'home',
        delivery: 'delivery',
        address: 'address',
        about: 'about us',
        payment: 'payment'

    }
 return (
     <footer>
         <ul>
             <li>{footerList.home}</li>
             <li>{footerList.delivery}</li>
             <li>{footerList.address}</li>
             <li>{footerList.about}</li>
             <li>{footerList.payment}</li>
         </ul>
     </footer>
 )
}

export default Footer