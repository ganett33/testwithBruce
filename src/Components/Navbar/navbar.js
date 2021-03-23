import React, {useEffect} from 'react'
import './navbar.css';
import{ NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
    
    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("active");
          $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
      }
    
      useEffect(() => {
        
        animation();
        $(window).on('resize', function(){
          setTimeout(function(){ animation(); }, 500);
        });
        
      }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
    
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          Web Solutions
        </NavLink>

        <button
      className="navbar-toggler"
      onClick={ function(){
        setTimeout(function(){ animation(); });
      }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        araia-aria-controls="navabrSupportedConetnt" 
        aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-white"></i>
        </button>
        
        <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
                
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                  Home
              </NavLink>
            </li>

                <li className="nav-item">
                    <NavLink className="nav-link"
                    to="/scp-002" exact>SCP-002</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link"
                    to="/scp-003" exact>SCP-003</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link"
                    to="/scp-004" exact>SCP-004</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link"
                    to="/scp-005" exact>SCP-005</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link"
                    to="/scp-006" exact>SCP-006</NavLink>
                </li>
            </ul>            
        </div>
    </nav>
    )
}
export default Navbar;