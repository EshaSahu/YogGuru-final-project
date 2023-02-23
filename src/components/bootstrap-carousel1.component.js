import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuHeart11 from "./MenuHeart11";
import MenuHeart22 from "./MenuHeart22";
import MenuHeart33 from "./MenuHeart33";
class BootstrapCarousel1Component extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row" >

</div>
<div className="row"style={{width:"1000px",height:"1px", padding:"0px 0px 0px 100px" }}>
<div className="col-12" >
<Carousel >
    
<Carousel.Item>
<img 
className="d-block w-100"
src="images/ttt-011.png"
alt="First slide" 
/>

<Carousel.Caption style={{width:"600px",height:"300px"}}>

<MenuHeart11 />

</Carousel.Caption>
</Carousel.Item>


<Carousel.Item>
<img
className="d-block w-100"
src="images/ttt-022.png"
alt="Second slide"
/>
<Carousel.Caption style={{width:"600px",height:"250px"}}>
  <MenuHeart22 />

</Carousel.Caption>
</Carousel.Item>



<Carousel.Item>
<img
className="d-block w-100"
src="images/ttt-033.png"
alt="Third slide"
/>
<Carousel.Caption style={{width:"600px",height:"250px"}}> 
<MenuHeart33 />
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default BootstrapCarousel1Component;