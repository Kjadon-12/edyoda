
import React from 'react'
import { useState } from "react";

function RightSide() {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [totalPrice, setTotalPrice] = useState(149);
  const [selectedColor, setSelectedColor] = useState(''); // Add state for selected color
  // const [isChecked, setIsChecked] = useState(false);

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
    updateTotalPrice(event.target.value);
    setSelectedColor(event.target.dataset.color); // Set the selected color
    // setIsChecked(!isChecked);
  };

  const updateTotalPrice = (selectedPlan) => {
    let price = 0;

    if (selectedPlan === 'basic') {
      price = 179;
    } else if (selectedPlan === 'standard') {
      price = 149;
    } else if (selectedPlan === 'premium') {
      price = 99;
    }

    setTotalPrice(price -30);
  };

  return (
    <>
    <div style={{ paddingTop: "70px" }}>
       <div style={{height: "inherit" , paddingBottom:"45px",  backgroundColor:"white"}}>
           
         <div className='d-flex' style={{gap:"40%" , paddingTop:"30px" , paddingBottom:"20px"}}>
           <div style={{marginLeft:"18%"}}>
            <img alt='i1' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAYAAABH/4KQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKdSURBVHgBzZhPbtNAFMa/cSMCSEhZs0pZsG2OEFixKyxYN1kCqmhO0HKCtEJplwkSrJsTQHqC+gbJirUlWNCIZPq9cVy3cRJnbMfxT7I6dufPp/deZt48hSS0dQWP8BY72MMUdX6p8Kne6zGCMo/L/1/hBgO0lAdLlFXvr7pOQcfQqHFkxWqsQg//8Q2HarD+kHVo6xrKaLNVR1oUrfgPTVpyFNfVieuAjv5MYdeZCBM05yljiAt9HNd1ueUkrsq4zEzUYvqMx+ayeFQrhP1iq4bN41Lgq0UCF7s1P2Ew68h6YpA5ouLOdRv5CQsQgZEYfOjWjm7wSxfb4x0+qn7wEopr6+rMnVVsD4/xtxvEX+jWxzhASmH158DlG+D6PZIiJ89R8BJa7lwPkUCcCNp/ATRecuay/230B9j9jqTcWa9kXiXWLIWJqO5rDnqGrPHPbaDnu3UH+7BERAXCvBvfWpnhmBCbxdzE/hTwxsDgN9D8SRf+8P9mhva3shJdap9hkP7QfzZERXQ5zLeqKCYUpwoqjt50krg0F7SIKzAOFVrn9rmg4IlbiylugpG41UURcUTcJ+UW0LWe6PJ/EE7BrKd410VwfE15nywSU5iE0xc35ktxXDuiS3vS8FMmyTw7+oyt2LvkMiQJSJHDhejQi+EmPMZpWutJ2hQ8Saegoh4i4sR6U15wt4nGF3wIyxQPj69DJbF3hm0g685iLSB6to5xgvw3ZpfCjuY/RsWJe6U8kJ9AF0/MehEWZyWhwD42y8AIa9oUcu7T0SfslXiLWUGLt/vTVR3WKx5esBrAm6CpraVnwHla5kyPIUnZtcHWgdU42T+lPjzhVpF52XWeLstVf2nFkrHkHhevYr5gDSPoinuni6eM3aZ9wfoWW3HF/e7flEwAAAAASUVORK5CYII='></img>
            <p className='i_txt' >SignUp</p>
           </div>

           <div>
            <img alt="i2" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAYAAABH/4KQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANcSURBVHgBxZgxb9NAFMf/TiMCSEhBsLC5EyzQMDCxpExsLZ+gyQioavsJ2n6CUKG0Y1OJjaHhC9B0phIWE0z1xAQiEgy0ojn+z5erHSdOfI7b/qTIZ+fs++u9d+/dnYMsNFQZ17CIGcyhhyqflPlzIz18OMHP4/+HOEEHa04XljhWvd+qKgWtQ6HCN8tW7zpo4R/2sOx00r+ShoaqoIQGW1VMi0Mr/kWdlvQndS1M6oCmWqGwz7kIExS/U8IxdtT6pK7JlpO4KmE/N1GjaTMe60nx6IwRdsBWBRePR4HzowSOduvlCUMwjownBokxLG5bNXB5wgwicCgGB93aVDU+2cXV8QKvnLa5CcU1lNt3p4sMuLf0r3vKIPqBrHQZf7Mm/ornj69jidPchQXlErDyCFh9qNsG/zen4TGwecTRTmCDVJ5VXjfkJrTctuLn0osTKx0s6GsS3k9g/oO1wHPr6QkhsWbpzsbTUJhYqv5RC9n6Evap3NFWtUTXbRi3zmCBBTo1lbvA4mx4L6JEoND5rq/ibtPXmgJDDGhpy53ZVYHqvbAtYoyw6DPDXBZxSqeyIl1qvcJo+zqehLiwOJP+T6Asuop0p0u3WiEDjht06UHY3vuKrFQKtJqLHKndZzy6uh2kFB/ZoDcL1ovGMcjslVls2PxknUZClIjLCZP3TDIWYa1vmIoCFVqv7ZOEmbwnwjaOMB0OuuLWqcSJpaLCZAJMLUw4gy9u9ZCRuDBJL7UD5EMBvq6tTfUry8TYfx5WCpmZj99PMQEG6XLpdLvYV+kFGw8Ldp8NljBxp0khcUZVkbE43OvC1NYe95NOenHiRslnUdafJPeXRYHVzO0hWHDqVHLKmxxmbU74eO20pKEtJyvPptpia+JeMnibLpp9h9TI6jg1il7sE12myzrqOM+KkQE5X5nHS30aEFYIsV6PG9yrRGHTCBMGy9eyI7G3hatAxu3HmmG4tp4Gm4vMiTkjHoWtxh8OixP3yvHA5Qn0cCMYb4jRq5JQYBsXSycQVrc5yInSVBvslSrFWLLGEvVmXId0h4c7PA1gxbItcQl0+J01xtjEsMly7Fpja8nqPak+cj58xlSR+7FrnF0m7D+0YjGw5Fz/GMON9PCBQNAhc6eHm4zduv2B9X9zxArCOQ0pSwAAAABJRU5ErkJggg=='></img>
            <p className='i_txt'>Subscribe</p>
           </div>

         </div>

        <div className='form_head text-center mb-4'>Select your subcription plan</div>

        <div>
        <div className='plan_box' style={{backgroundColor:"#E7E7E7"}}>
         <label>
         <p className='offer_expired_txt small_txt_style' style={{backgroundColor: "#f77171"}}>Offer expired</p>
          <input
            disabled
            type="radio"
            name="plan"
            
          />
          
          <span className='text-muted plann_txt'> 12 Months Subscription </span>
          <span className='gap2 text-muted small_txt_style' >Total<span className='plann_txt text-muted'>₹99</span> </span>
          <p className='d-flex justify-content-end text-muted small_txt_style' >₹8/mo</p>
        </label>
        </div>
        <div className='plan_box' style={{ backgroundColor: selectedPlan === 'basic' ? selectedColor : 'white'  }} >
        <label>
        <p className='offer_expired_txt small_txt_style' style={{ backgroundColor:"#47BA68" }}>Recommended</p>
          <input
            type="radio"
            name="plan"
            value="basic"
            checked={selectedPlan === 'basic'}
            onChange={handlePlanChange}
             data-color="#D7EDDD"
            
          />
          <span className='plann_txt'> 12 Months Subscription </span>
          <span className='gap2  small_txt_style' >Total <span className='plann_txt'>₹179</span> </span>
          <p className='d-flex justify-content-end text-muted small_txt_style' >₹15/mo</p>
        </label>
      </div>
      <div className='plan_box' style={{ backgroundColor: selectedPlan === 'standard' ? selectedColor : 'white'  }}>
        <label style={{    marginTop: "5%"}}>
          <input
            type="radio"
            name="plan"
            value="standard"
            checked={selectedPlan === 'standard'}
            onChange={handlePlanChange}
            data-color="#D7EDDD"
          />
          <span style={{marginRigth:"15%"}} className='plann_txt'> 6 Months Subscription </span>
          <span className='gap2  small_txt_style'  >Total <span className='plann_txt'>₹149</span> </span>
          <p className='d-flex justify-content-end text-muted  small_txt_style' >₹25/mo</p>
        </label>
      </div>
      <div className='plan_box' style={{ backgroundColor: selectedPlan === 'premium' ? selectedColor : 'white'  }}>
        <label style={{    marginTop: "5%"}}>
          <input
            type="radio"
            name="plan"
            value="premium"
            checked={selectedPlan === 'premium'}
            onChange={handlePlanChange}
            data-color="#D7EDDD"
          />
          <span className='plann_txt'> 3 Months Subscription </span>
          <span className='gap2  small_txt_style' >Total <span className='plann_txt'>₹99</span></span>
          <p className='d-flex justify-content-end text-muted  small_txt_style' >₹33/mo</p>
        </label>
      </div>
      
     
    </div>
        

        <hr className='hor_line'></hr>

        <div>

            <div className='d-flex' style={{gap:"50%" , padding: "0 16px 10px 16px" }}>
                <div className='subFee_txt'>Subscription Fee</div>
                <div className='subFee_price'>₹18,500</div>

            </div>

            <div className='offer_box'  style={{margin: "0 10px 10px 16px", padding: "10px 0px 10px 16px" , height:"inherit" }}>
            <div className='d-flex' style={{gap:"38%"}}>
                <div  className='limited_offer_txt' >Limited time offer</div>
              
                <div className='subFee_price'>- ₹18,401</div>

            </div>
            <div>
                <img alt="offer" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH8SURBVHgBnVVLbtswEJ2hCnTVQrDTde2k6Nq9gSCn67gnqHuCxiewfYLkBklP0HafuskJ6l2BII616iof77oSmfcYKTAEKlYygGByOHyceXxDqwTsTxLHr0w0iFT2nEgPro5fUJ2rc1nu5Oe72fVxaK9WHRf99sCIHDyA1FtmnUyrwGZ9stzdGsPxvQA7dc6NNM+727+ulR/GHwDyRZAlY4zK0WJ36yB4HMEu+213mbZuEbQvG2yRtvZ9PL51UF/yRdoe8jTvQBbd09VcGtj6PlazM7s59CXDOfZO1VEIzGeRtiZVP/kjkE9EdczLNDxFyBl42Tm5OpQnGrMqOI1fG4OMIQ0uWNGpPNOcMd+KLJMXKq5DKiObN+ItmOXJ1QQ//CgbpXCl6UVsMtM0EOV8/pvEnbr1UkIEzOj4l8Zv64ILMcvLKFou+u2jx4ANetWX+l/Mp7ogymN7dtOFrKYQ7hDAvwt1BADR6H6guicbjOSzFTE8gzp6QUDc7g/qCJkmbKdNoLi8DH09NHk+CQIiYGXRIZxQ7ecf3/SkgXHfeRLXx6LBJw/N3iDTZb/1FbG3Vb9WQfGAjoupf+8sBP++0OgSt2uNGZBvUkQfn7VaQJp/QQSgqh15zJxboV1H5QPLyoKA68D3fwG+NUuuMmyYW+fOjLXH5LGMLwHvAP5g7oILj4SGAAAAAElFTkSuQmCC'></img>
                <span className='ms-2 valid_till'>Offer valid till 25th March 2023 </span>
            </div>
            </div>

            <div className='d-flex' style={{gap:"100px" , padding: "15px 16px 10px 16px" }}>
                <div className='subFee_txt'>Total (Incl. of 18% GST)</div>
                <div className='total_price'>₹{totalPrice}</div>
            </div>
           
           

        </div>

         <div className='d-flex' style={{gap:"10px" , margin: "0px 2%"}}>
            <div><button className='cancel_btn'>CANCLE</button></div>
            <div><button className='pay_btn'>PROCEED TO PAY</button></div>
         </div>
         <div style={{marginTop:"14px" , marginLeft:"2%"}}>
            <img  alt="payment" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAArCAYAAACzfkyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABK0SURBVHgB7VwJXJVl1j/3guwoLggCgiuCIqAi4r7hknsa7ppmNjalzkw5uNRXlji22ziVaY6Zftk3lTV9ueW+gwq4IqCi7Duy73Dn/M/lvVwQKpacmrn/3w/f7dnP+jznXFXE6NlzhL2xmXGgSkXd+NGKDPgtI5+o8mxZUeWuiIiTKSpPzxFO1ML4S/7gTRoyYSKryYDfLDQaqmQaFmqIblBZeYAxmRi/oNKQD38zJhUZ8BtHlYBaMSl9NC1avKdm4s4kENeA/zQYq0gzzJhF2l7VRMnt7eFOdu3bUcy9WP6LIwN+HWDatjOyd+iynpqAeXOm0/Lnl7B2V9HMmZOpsqKSIqPukgH/frDgqpqsmhfMm0GBa4MoNi6BOnZ0oDeC1tG33x0mA34daDKB7exs6cbNKKqoqKC8vALq0MGu3rJQ5f6jh8l9YWEBffPPQ5SWlkG/NCwtLaigoLDe7106u9DUKeMf+bimTRlH167f0pm13y2d3+x9N3pLNNCvH+3csZnVgIo+2faO3OOK57+9HyTfa8OZJTwhIZF27tpLx0+eoz+/8Ht5DwL09nDT3eNPuVeuIEJ7tvPKvT7wrJRVyijt4fnNTS/X+F67fuvWrai0tKTOcemXrT2uusao/155ru8bxoK+FUA4bFpa16hXu5+GAjb4VWoEFs5/gkYMH0RqtZpsbduKk4U/PGOgsXHxFH7lRo067m7dqaKygq5ei6Dy8nKWmnEUfDGMVrINZ4tB0x9/jNLTs7hdP+HstYHL6VbkbQp6fTVlZT6gZb9bQF158ubm5rRwQQAdPXZGfID2tu1EGi6HXqWX1qykNq1bkpubK3Xv1pmKS0po3JjhdDMiinr3cqOhQ3ype/eu5Ohgp/MVHB3sqYN9ezp77hLl5OTR4oWz6PTZEFq7erlopaeXzKULwaH04h+X0anTF2S8FpbmlM9a4enFc+hOzH252vI4Bvj2ofiEJKlbWVlJGTzuur9pRJtdvBROScmpMo5RI4dQ1y4u1K5dW5o9axolJaWS/6ihdP2Gdi3Qd0PRaAk2MzMjYyMjuS8pLqVLl67onlu0MOa/FnXW8x81jP648hl6ae0f6H/37qNMXoCTPPASliAwQGTUbZ74cOFuY2NjaTM3J4dOnblAUVF36OLlcDp4+Di1a9taOH0sE6+svIwlsJTG+g8nG5tW4gN8/c1+6tbVhW7dihb1HMl1wQiWlpbMYDfpQsjlGuMa6Ocj48LiHztxhlyZCU6fCZZ+z567KG1nPciRcamN1DSaidHHy0PG88T0CVRUXMzMkUuDB/nKmMtKy3icJ+hJZkT9b2gX88Acwq9cf2h9vv3ukIy9Xds2zAyJ5OXprluLxqBZ9r/7vt1POz/9P1qxfAlL0vgfLXs++CIdOnySjHgR8vMLaCRrgTZtWtMlXqipk8dRSUmpSP6T8wPoyLFTUqesrJxtYxEVF5fIVbGnYCRIXEpKujBKUnIKTZzgL1KXn18ofaA9SBKu0BZGYWomTG+ybddG7J0CLPann/2D1Co1M1spjRwxWN4r/Tl0aE9h4dfouWWLRLs4OLRnTTOQXn39HZG8q1cjRBLRBgCfBPWsra1EY2Gc+GZj01LmgW+41gbGnpeXL/cPmKHwBwZS1qKhaJZjSc/ePalHj65y/SkUFhZTdnauEASLbmFhTn379GbVOYA6uXSUMidOnqdBg/pTyMXwH20rJiZWFtLF2Yn6eHuQsbqaXzW8CVRgxVILm4wyY0YP5UW2pk6dnGu0hcXGuLIeZMvihzAzQGqhIqH+oaJhAgbzuEDosPDrrMVMZQ7HT5wl3/7eolV8fbxrtHv02GkaPnSgfOvV01XahbZAu7jWBkwO+ktNTZc5nGHtAY32U2tRH1Re/fw11Ai89uoqmjJprNxDwvLy86klOwiKmt667TP+212jjq1tG7nCzioAgXu6d+fFzZHnO3djydHRnlY8t0S2X5BCe3tbSkxMkWspq76srGypE3HrNttbG2aubmzz4yg9LYslC/Y/UdpCO6jn0asH5ebmUSbXc+3eWezfvfvx8g4wNTURZweaQLcw7CzCKbS3t+P3qZTA7YCZoPbv3U9glWnEqrMtxccnS/3OnZ2FwR7kZEs7ypj1v8WxyoV0urt3Y8liDVaYz2PIl/ko47WysiBTE1OKi08UhsMYnlw4k14P2kyNQaMJ/Nyzi2kpOx/14e13t9Kez7+u2VnVkZm+dAEt2L5U4pScVSkcNnix23fsoajoGF091NGvD8JjwQEsIgivlFHaV+6NqpgO5VtU2bIydvJqj632uPDOxKSFru3a5fTv0Yean8u5j9rjUL4pfeqX1V8P1IGTqpSF7cVafLx9N92+c48ag0YTGLZl8ECfOr/B/oVfvfGje8/6gMnDToF7FQL+t6I51qLRBAYgOXUBx5W1JcSAfw+a5EXDwTDg141HEtxXtXQkla0bGfDo8csSGOGMLiNJPf4N9moabo8NaDp+sUC/ytKWVH0WkMqZDwxK80mTl0IGPHo0P4Ehtd3Hksr9cVK3cuIeTEmTEMJ7lDIy4NGjWQmssrIjlQ8H/x19SGViyS+0FkCTGIp/5X7B3Onk09/7oboV5RWUkZHJ58DnGn1qY8DDaDYCq9ynkdptIjtUDqQpLWB6VmgJXFlGlWm3dOXGcHAAQYXaAPkrea83miMs6/l89/SZEDKg6WgeAvMxnNpjOttdO6q8d1JUstHQQPmkeRDLJx9a+2vPITkQF5Gm7/cf5SiNlog4mvPic+Lp08ZLlGoQH6AYCNw8aBYCq9p2ZUeqkCxuf0Q+dsV00tiMiV6lntM4JqyplPte7q66MOKBg8colA/tq1qgy+FXafy44WTBsV79/bUtx0Y9PXtKqC8xOZnOMOE9OK6LI0Sc4d67H0dt+SBfCVTUBcRTcdwIWFlZ8qF/D3JxceJzc2NJQLgcdp2DINVevhsHTszMzCUEiURCBCmcHDtIPFatNhJGBSKjosnOzo68eruTmbmpRJSiomvmo+F0tUvnThz2c6MWzMihHLC4HxvPc3Dnkyo1paali3ly4Jg0EH37rkSUFKCvqZO1Z/6nTgdL2LMhaB4Cl+ZSv/z9tGz5OIq4cYNOlbbTfdMkhOruhw/zkysO3K/xousT0turF5mz9OJcNjgkTN7NmD6R5nDgG5EYHNshSeCHI6do4MD+ZMlBioOHjtPb722lKbwA8+fMqHNspWWlNHP2Mg6IlNGoEUP54D5AiIVQI4A2Y5hJ1qzbSGlpmcI46//nRQm6JyWlUGp6Oke7PCW4cONmJM0KmMKRLz+Zw+EjJ6VvCwsLPj9mRcWhxfc2b5MxAtBGTy2aySHMMWTNjIWzZsSGv/r6e25nqpTZ9ObfZG6rXnhWnl957W2JP8u6cptz5zxOM6ZN4OBDAn21bz81FE0mMI4rFwaM4QFPIptW1vQtx4ap/RDtR7a/moxIXVlIIpDHceAhg32FmMbGanJycuSY5yRZgMuh1yg07BoNHNBPMiesrKzkTBtBeienDryg4yRMh7LIpADcOJqkVldv6c3MTCTrAwgNu0r5BQXkx+2tCXxeokbJyWkiCQhxdnRyIC8+V588cQzt2PmFSFK3bl1EuhAdc3XtKkygIW0Eqj+HA6ExoAkCZkySWC+0Sy+OWGGsAQGT6cjR0zK3ObOm0ry5M0QrISkxPi6J+vT1oIUc60Z9lMEc2nI8HG0CYD4FHh7uQlxE3Hbt/opjw9nUUDSJwF5MsBXLl5KbaxfJGcKBeNjdLFINsJXvmkyOgBRrw4BIiXFydJB7LMjqVc9rG1Fpo0mYBGKfQRvfZykyodWBy2WBI25F02qWLqgtSPiez7Yw8bSSjnQXYNObH4jkAd6evWj9Ky/I/aHDJ1jCP6LWNq1o3ZqVsoiQjo2btrAkFXGosTVt//gtWWCofcDXx0uIC0BdvvXORxKbteD5wVwgfAgkp6TRupf/wmYjVQj44V+DJMbc2cVZxgcT8NSi2axpLCRL48OtuySsCsbduGG1ro2EhCQqYakuZm1mxsKiJC1C4tcFrpB1/e7/f5AYOcKcDUWjCAyVtGTxHLENSJGB+gJiYxMoWc3Hksr2KCVcsq8Bn36eunLg+qKiYpF4j6rkuMOs1t58+wOxq1CDkCyED9/gd/HxSULQbJZaZDggBoycLyV+q3A2guhQdaampvTJ3/dyuPIricQ8tWiW5F1hgd57fzulpKZJe3l5hcyUWv9A0QB+vtpkQcSnA9cECRHAuNAYyFZRiP/u5q10K/KOjDEHiQL81wntqLRq/9lnFkjELSMzk7Z88HdJcADu3K0O+yGBAETPyMzmNnLIzM5WYsJQzStZcLp370JxLPlbPtzJ5qyEGoNGEfj5Z5+kaVPHC6H1cfHyFdLYe+l+4qRJrN7PKumyRUVFtOaljTIxNa/Gls0bOHjvypztI2oLCzF69FD5dp9V4s2b0bp4KaQcyXLApUtXZXEVLJz3BD21eLZIfdBf/io5T0q4ctTIoUKgyOg74uAo7YGJ2raxkXs4YjA33n16y3NwSDglsg1WyuLqN6Cv3Gfn5Ml3pX/kSzl3dJT7yKgY1hRtaMAALaMEB4frAvqAKxNNt15V+334BwmJyZKC7NjBnsb6j6BJE/2lT2gbnA80Fg0+i8ZCDR826CHiyoDDbpLarpf2gb1qTbrW/rZq1ZJ8qlJZkM+Unp4pUgdiwjYB1tYWvOCO4vy4VC1WBi9MuV7Ycfq0x0Q6AeRXyQRY8gJf/D0tfXo+GbOHvirwNfr+wJEasWhnZ61pyEjP0BEFUvL0kjni4CBd59APJ8SWt+b4q7b90BoJAGA4n35eco9MEHjYCiaMHylaBTh4+JhkYZiaaEOpadyn0g5MUcCMyXKPecHXAPD9bkys3Hfksa5h8wQ/Y9fuL6VM7USEhqDBEuzs7MR2ov1D7+ERX4lnNdJRu0CaDD7cKNcuMpwrC7ZLAE6p9AecnKRNGQXjOLL9wbfycm1wu1sXFxrDko9ktn6s4pcsmivl8D2MJw6b+vr6VZJEh+3XP/Z9T6a8MHDggLt349gxiqVclriW1tbUm7czSPWFmkc2pj9rCmAHq/OkpDR6bNwoaR9qG86ZPpAW1KZK2jvY2wqz3bl7X7Y7zyydJwxwk73so0fPkLt79UHOCBaGCyGhEiOHI9mrl6u8j4mJ4y1SdYJ7TBWBYbMxBnjsn+76oslx9QYTuD87Ifoeq4KLl65QjkXX6rSapCs6++vXv4/ufe1jyJS0NN09GAeLe/psMM2eOVUkH85ReYU2qxIeN4BcLKhJpKT6+vQRFQnGmDzBnyaMHalrL3DNBiHwl7wtQUosnK1XXv6TLLY5q3tI2bZP9tDnX3wjku1XpVbhSyQmptacdz9v3Rygcv+wYqmYGTh3sLX37sXxFucd2QZh74xn5GK5uDjSpqB1shY5ufm69NdLoVdqmBhFgtEH5gozg91GU9FgArexsaHIyIc32z/wnlBjytyZpXUiNMlXdN+srS2lTinbmujbMTXq3b59X9ceuBWE2smcC9U5bMgAWYQorrNj515aw543mOvYibNSDrYOW5e6UMb73+iqPKYvv95PBYXFkn6KFN1i9gPAaJ9/sU/qF/AhB0wO+kTuk9ZjrazRXt++nnKFR/3ntRtkFwCPF6m/R4+fpY+3fcbqWGsrkSL74urX6E8rl8mhCbZpx4+fp3uxsTR31uNS5vz5mnnZ+kLz8Se7H1qnxqLBKTsglmIH9YGJFmtMSGWktT0abI8qteoFeUWKlCnepAKo1lbsTQNQ8zhAABdb854Svx5AHdg7ZB9CAuHBFTGxQBQ4VCYmdacNQWIysx7ozAFsGpw4ZH3iHfrK5b6qbbJKtkswzsUshfl60oO6B77bIyoaxF/FxLNp1YosrXDqViYSh3HXtNlq0UDmfMKFk6oCLgO7izEAeTyfkio73rZda9ryLjubPV1p/4FjFLTpfWmzOdBgCdYmZtenOkqoLm7BVqU+wIPMyMiq8Q4LlZuXJwQgvRYzMmuWU9Jefw7gSNWVaK7fZ+32FfTgww7lN0SnTp8XHwBlM7NUVVbo4VmDceBIZmfXzNasawxLFs2RA5XklFTatmNPsxEX+JX/sr/x3mNzwrfKhwChrl2vPpn7Od7tT5VBkvu0KY9xOd7zv6Xd8zcnDP91w89APmuSAwe1+2okpDcXYPM78L7+5Knz8hPS8xcuP2T7mwqVt49/DjNZSzKgXsABM+H9OU7CYDqaC9AKsMlGbK9L5fdXzZ23pkkwsrXv0p77GUgG1Av4CfgZaklp86cJw4FE2+jjF8B2dUUxbWYDEEEG/EeBLX+wqqJig/HMmUMS9v7z3BhzVcXcSo4DkQG/eahJE1JWZLYnIuJo9r8ABHDd2L/sEtMAAAAASUVORK5CYII='></img>
         </div>

       </div>
       </div>
    </>
    
  )
}

export default RightSide