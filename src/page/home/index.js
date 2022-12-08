import { Box, Button, Container, Typography, Grid, } from '@mui/material'
import React from 'react'
import Navbar from '../../companent/navbar'
import './style.css'
import AOS from 'aos';

import 'aos/dist/aos.css';
import Pic from './12.png'
import Picture from './123.png'
import ReactDOM from "react-dom";

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import caro from "./project-item-01.jpg"
import caro1 from "./project-item-02.jpg"
import caro2 from "./project-item-03.jpg"
import caro3 from "./project-item-04.jpg"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Home() {
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    
    AOS.init();
    return (


        <Box >
            <Typography style={{ position: "fixed", marginTop: "5px",width:"150px"  }}>

                <Navbar />
            </Typography>
            <Box id="homebg" sx={{
                display: "flex",    
                justifyContent: "center",
                alignItems: "end",
                height: { sm: "100vh", xs: "100%", md: "120vh", lg: "100vh" },
                width: { xs: "100%" }



            }}>
                <Grid container spacing={1}>

                    <Grid id="xira" data-aos="flip-up" sx={{
                        display: "fixed", justifyContent: "center", alignItems: "center",
                        width: { xs: "100%", lg: "750px", md: "630px", sm: "92%" },
                        marginLeft: { xs: "1%", md: "18%", lg: "26.9%", sm: "4%" },
                        marginTop: { lg: "5%", md: "29%", xs: "18%", sm: "0" },
                        marginBottom: { xs: "3%", lg: "0%", md: "11%", sm: "0" },
                        padding: "20px",


                    }}>
                        <Typography sx={{
                            fontSize: { lg: "85px", md: "85px", sm: "35px", xs: "35px" },
                            position: "absolute",
                            textAlign: "start",
                            marginTop: { lg: "-45%", md: "-46%", sm: "-60%", xs: "-150%" },
                            marginLeft: { lg: "-24%", md: "-15%", xs: "7%" },
                            color: "white",
                            fontWeight: "800"
                        }}>
                            STAK <span style={{ fontSize: "30px", fontWeight: "500" }}>HTML CSS</span>
                        </Typography>


                        <Grid id='respon'>
                            <Box sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: { xs: "15px", lg: "100px", md: "100px" }

                            }}>


                                <Grid container spacing={1} sx={{
                                    width: "100%", background: "#455871", position: "relative",
                                    height: { sm: " 90%", xs: "90%", md: "100%", lg: "100%", },
                                    marginTop: { xs: "30%", md: "46%", sm: "16%", lg: "20%" },
                                    marginRight: { lg: "-20%", md: "0", sm: "0", xs: "0" },
                                    width: { lg: "110%", md: "100%", sm: "100%", xs: "100%" }
                                }}>
                                    <Grid item xs={12} lg={8} md={9} sm={12} >
                                        <Typography sx={{
                                            fontSize: { xs: "19px", md: "22px", lg: "25px", sm: "24px" },
                                            padding: "20px",
                                            textAlign: { xs: "center", md: "start" },
                                            color: "white"
                                        }}>
                                            NEW <span style={{ color: "crimson" }}> STACKED</span> TEMPLATE
                                            <hr />
                                            <Typography sx={{ padding: "0px", fontSize: { xs: "14px", md: "14px", lg: "14px", sm: "13px" }, color: "white" }}>
                                                Stacked HTML CSS Template is provided by TemplateMo website. You can edit and use this template for any purpose. Please mention your friends about our website. Thank you.
                                                <br />
                                                <br />
                                                <button style={{ cursor: "pointer", width: "120px", height: "40px", fontSize: "11px", backgroundColor: "crimson", border: "none ", color: "white" }}>DISCOVER MORE</button>
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={4} md={4} sm={12} sx={{
                                        display: "flex",
                                        justifyContent: "center ",
                                        alignItems: "center",
                                        marginLeft: { md: "55%", xs: "0", lg: "0", sm: "0" }
                                        // marginTop: { xs: "0", md: "0", lg: "0" },
                                        // width:{sm:"15%", xs:"25%", md:"35%"}

                                    }}>
                                        <img src={Pic} alt="" />
                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>


                    </Grid>

                </Grid>


            </Box >


            <Box container id="homebg1" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                height: { xs: "100vh", }
                // height:{sm:"1120px", }


            }}>
                <Grid >

                    <Grid id="xira-next" data-aos="flip-up" sx={{
                        display: "fixed", justifyContent: "center", alignItems: "center",
                        width: { xs: "100%", lg: "750px", md: "630px", sm: "93%" },
                        marginLeft: { xs: "0%", md: "-2%", lg: "2%", sm: "3%" },
                        marginBottom: { xs: "0%", lg: "0%", md: "0%", sm: "1%" },
                    }}>
                        <Typography sx={{
                            fontSize: { lg: "35px", md: "35px", sm: "22px", xs: "18px" },
                            position: "absolute",
                            textAlign: "start",
                            marginTop: { lg: "-25%", md: "-50%", sm: "-50%", xs: "-150%" },
                            marginLeft: { lg: "-2%" },
                            color: "white",
                            fontWeight: "500"
                        }}>
                            ABOUT US
                        </Typography>

                        <Grid id='respon'>
                            <Box sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                // marginLeft:{ xs:"0", lg:"100px", md:"100px" }

                            }}>
                                <Grid container spacing={2} sx={{
                                    position: "relative", height: {
                                        xs: "100%", md: "100%", lg: "100%",
                                        width: { lg: "100%", md: "100%", sm: "80%" }
                                    }
                                }}>
                                    <Grid item xs={12} lg={5.3} md={5.3}>
                                        <Typography sx={{
                                            fontSize: { xs: "40px", md: "28px", lg: "25px" },
                                            padding: "-20px",
                                            marginLeft: { sm: "0", md: "-55px", lg: "-65px", xs: "2%" },
                                            width: { lg: "650px", md: "525px", sm: "100%", xs: "280px" },
                                            marginTop: { lg: "105%", md: "102%", sm: "25%", xs: "12%" }
                                        }}>
                                            <img style={{ width: "100%", height: "100%" }} src={Picture} alt="" />

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={6.7} md={6.7} sx={{
                                        display: "flex",
                                        justifyContent: "center",

                                    }}>
                                        <Typography sx={{
                                            width: { xs: "90%", md: "230px", lg: "3000px", sm: "620px", xs: "200px" },
                                            height: { lg: "250px", md: "250px", sm: "170px", xs: "300px" },
                                            background: "white",
                                            padding: "20px",
                                            position: 'relative',
                                            marginTop: { lg: "100%", md: "100%", xs: "-20%", sm: "-11%" },
                                            marginRight: { lg: "35px", md: "35px", xs: "10px" },
                                            marginLeft: { sm: "1.3%", xs: "3.2%" },


                                            textAlign: { lg: "start", md: "center" },
                                            // fontSize:{  }
                                        }}>
                                            <Typography sx={{ fontSize: { xs: "22px", md: "23px", lg: "22px", sm: "22px" } }}>
                                                CURABITUR VARIUS SAPIEN
                                                <hr />
                                                <Typography sx={{ fontSize: { xs: " 11px", md: "13px", lg: "13px", sm: "12px" } }}>
                                                    Please feel free to contact us if you have br any question or suggestion about our free templates. Thank you. Template redistribution is <b> <br /> NOT allowed.</b> <br /> <br />
                                                    <button style={{ cursor: "pointer", width: "120px", height: "40px", fontSize: "11px", backgroundColor: "crimson", border: "none ", color: "white" }}>DISCOVER MORE</button>
                                                </Typography>
                                            </Typography>

                                        </Typography>

                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>


                    </Grid>

                </Grid>


            </Box >






            <Box container id="homebg2" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                height: { xs: "100vh", }
                // height:{sm:"1120px", }


            }}>
                <Grid >

                    <Grid id="xira-next" data-aos="flip-up" sx={{
                        display: "fixed", justifyContent: "center", alignItems: "center",
                        width: { xs: "100%", lg: "750px", md: "630px", sm: "98%" },
                        marginLeft: { xs: "0%", md: "-2%", lg: "2%", sm: "3%" },
                        marginBottom: { xs: "0%", lg: "0%", md: "0%", sm: "1%" },


                    }}>
                         <Typography sx={{
                            fontSize: { lg: "35px", md: "35px", sm: "22px", xs: "18px" },
                            position: "absolute",
                            textAlign: "start",
                            marginTop: { lg: "-40%", md: "-50%", sm: "-50%", xs: "-150%" },
                            marginLeft: { lg: "-2%" },
                            color: "white",
                            fontWeight: "500"
                        }}>
                            RECENT PROJECTS
                        </Typography>

                        <Box>
                            <Grid xs={12} sm={6} md={4} lg={3} xl={2} >


                                <Typography className="App" sx={{
                                    display:"flex",
                                    justifyContent:"start",
                                    marginLeft: { lg: "-19%", md:"-15%",sm:"0%" , xs:"0%"},
                                    alignItems:"center",
                                    width: { lg: "1200px", md:"900px", sm:"500px", xs:"500px"}
                                }}>
                                    <Carousel breakPoints={breakPoints}>
                                        <Item style={{
                                            position:"relative"
                                        }} >
                                                <img style={{ width: "100%", height: "100%" }} src={caro} alt="" />
                                        </Item>
                                        <Item>
                                            <img style={{ width: "100%", height: "100%" }} src={caro1} alt="" />
                                        </Item>
                                        <Item>
                                            <img style={{ width: "100%", height: "100%" }} src={caro2} alt="" />
                                        </Item>
                                        <Item>
                                            <img style={{ width: "100%", height: "100%" }} src={caro3} alt="" />
                                        </Item>
                                    </Carousel>
                                </Typography>




                            </Grid>
                        </Box>
                    </Grid>

                </Grid>


            </Box >






            <Box container id="homebg3" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "100vh", }


            }}>
                <Grid >

                    <Grid id="xira-grid" data-aos="flip-up" sx={{
                        display: "fixed", justifyContent: "center", alignItems: "center",
                        width: { xs: "300px", lg: "750px", md: "630px", sm: "720px" },
                        marginLeft: { xs: "0%", md: "-2%", lg: "2%", sm: "0%" },
                        marginBottom: { xs: "0%", lg: "0%", md: "10%", sm: "10%" },

                    }}>
                        <Typography sx={{
                            fontSize: { lg: "35px", md: "35px", sm: "0px", xs: "20px" },
                            position: "absolute",
                            textAlign: "start",
                            marginTop: { lg: "-35%", md: "-50%", xs: "-170%" },
                            marginLeft: { lg: "-2%" },
                            color: "white",
                            fontWeight: "500"
                        }}>
                            CONTACT US
                        </Typography>


                        <Grid id='respon'>
                            <Box sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                // marginLeft:{ xs:"0", lg:"100px", md:"100px" }

                            }}>

                                <Grid container spacing={2} sx={{
                                    width: { xs: "100%", md: "100%", lg: "750px" },
                                    height: { lg: "387px", md: "450px" },
                                    // background:"black",
                                    position: "relative",
                                    marginLeft: { lg: "0%", md: "0%", xs: "0", sm: "3%" },
                                    marginTop: { lg: "35%", md: "35%", xs: "-25%", },

                                }}>
                                    <Grid item sm={12} xs={12} lg={7} md={7} sx={{
                                        width: { xs: "95%", md: "650px ", lg: "110%", sm: "100%" },
                                        height: "387px",
                                        background: "rgba(250, 250, 250, 0.03)",
                                        marginLeft: { lg: "8%", md: "6%", xs: "3%", sm: "-2%" },
                                        // marginTop:{lg:"17%", md:"35%", xs:"0"},
                                        // position: "relativ"

                                    }}>
                                        <Typography>
                                            <Typography sx={{
                                                width: { lg: "85%", md: "85%", sm: "625px", xs: "240px" }
                                            }}>

                                                <input className='input' placeholder=' Your Name' type="text" />
                                            </Typography>
                                            <Typography sx={{
                                                width: { lg: "85%", md: "85%", sm: "625px", xs: "240px" }
                                            }}>

                                                <input className='input' placeholder=' Email' type="text" />
                                            </Typography>
                                            <textarea placeholder='Messenge' name="salom" border='none' id="" cols="32" rows="10" className='textarea'></textarea> <br />
                                            <br />
                                            <button style={{ width: "120px", height: "40px", fontSize: "13px", backgroundColor: "crimson", cursor: "pointer", border: "none ", color: "white" }}>Send Messege</button>
                                        </Typography>




                                    </Grid>
                                    <Grid item sm={12} xs={12} lg={5} md={5} sx={{

                                        width: { lg: "600px", md: "900px", sm: "100%", xs: "97%" },
                                        height: { lg: "220px", md: "220px", sm: "150px", xs: "180px" },
                                        background: "white",
                                        marginTop: { lg: "5%", md: "5%", xs: "64%", sm: "60%", xs: "125%" },
                                        position: "relative",
                                        marginLeft: { lg: "66%", md: "60%", xs: "3%", sm: "-2%" },
                                        position: "absolute"


                                    }}>
                                        <Typography sx={{
                                            fontSize: { xs: "12px", md: "13px", sm: "12px" }, padding: "10px",
                                            // marginTop:{sm:"-4%"}                                    
                                        }}>
                                            Nunc purus ligula, ullamcorper id velit id, vestibulum auc sapien. Sed quis mauris eget sem imperdiet rhoncus. <br /> <br />

                                            880 Etiam mauris erat, <br />
                                            Vestibulum eu augue nec, 10940


                                        </Typography>



                                    </Grid>


                                </Grid>
                            </Box>
                        </Grid>


                    </Grid>


                </Grid>


            </Box >
            {/* <Typography sx={{textAlign:"center", position:"relative", marginTop:"-40px",color:"white"}}>
            Copyright © 2020 Your Company | Design: TemplateMo
            </Typography> */}




        </Box >




    )
}

export default Home