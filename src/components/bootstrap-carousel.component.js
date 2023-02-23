import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuHeart1 from "./MenuHeart1";
import MenuHeart2 from "./MenuHeart2";
import MenuHeart3 from "./MenuHeart3";
class BootstrapCarouselComponent extends React.Component {
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
src="images/ttt-01.png"
alt="First slide" 
/>

<Carousel.Caption style={{width:"600px",height:"300px"}}>

<MenuHeart1 />

</Carousel.Caption>
</Carousel.Item>


<Carousel.Item>
<img
className="d-block w-100"
src="images/ttt-02.png"
alt="Second slide"
/>
<Carousel.Caption style={{width:"600px",height:"250px"}}>
  <MenuHeart2 />

</Carousel.Caption>
</Carousel.Item>



<Carousel.Item>
<img
className="d-block w-100"
src="images/ttt-03.png"
alt="Third slide"
/>
<Carousel.Caption style={{width:"600px",height:"250px"}}> 
<MenuHeart3 />
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
export default BootstrapCarouselComponent;