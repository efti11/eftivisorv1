import React, { useState } from 'react';
import {Wrapper,SiteForm,Tomato,Red,H1,TourFormBtn} from './TourFormCSS';

import TourFormModal from './TourFormModal';


const TourForm = () => {

    const [openPopup,setOpenPopup] = useState(false);

return (
<Wrapper>
    <SiteForm>
        <Tomato>
            <H1>Make your own Vacations.</H1>
            <H1>Fill our form and we ll come back to you at the best price</H1>
        </Tomato>
        <Red>
            <TourFormBtn onClick={()=>setOpenPopup(true)}>Book Now</TourFormBtn>
        </Red>
    </SiteForm>
    <TourFormModal openPopup={openPopup} setOpenPopup={setOpenPopup}></TourFormModal>
</Wrapper>

)
}

export default TourForm;
