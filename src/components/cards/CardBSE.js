import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bse.styles.css';

import { BackSide, FrontSide } from './flippycards';
import Flippy from './flippy';

import techM from './images/techM.jpg';
import LT from './images/LT.png';
import infosys from './images/infosys.jpg';
import tcs from './images/tcs.jpg';
import reliance from './images/reliance.png';
import airtel from './images/airtel.jpg';
import hcl from './images/hcl.jpg';
import sbi from './images/sbi.png';

import microsoft from './images/microsoft.jpg';
import apple from './images/apple.png';
import amanzon from './images/amazon.png';
import alphabet from './images/alphabet.png';
import facebook from './images/facebook.png';
import intel from './images/intel.png';
import adobe from './images/adobe.png';
import netflix from './images/netflix.png';

const FlippyStyle = {
    width: '200px',
    height: '200px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center',
  }

  const TechMahindraCardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide className="front-card" >
        <img src={techM} className='img-style' />
        {/* <p className='img-heading'>Tech Mahindra</p> */}
      </FrontSide>
      <BackSide className="back-card">
        <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
        <Link to={{
                  pathname: '/companydetails/TECHMAHINDRA',
                  description:'TECHMAHINDRA'
                }}  className="card-button">Graph
        </Link>
      </BackSide>
    </React.Fragment>
    );

    const LTCardContents = ({ children }) => (
        <React.Fragment>
          <FrontSide className="front-card">
          <img src={LT} style={{maxWidth:"50%", maxHeight:"50%"}} className='img-style' />
          {/* <p className='img-heading'>Larsen & Tubro</p> */}
          </FrontSide>
          <BackSide className="back-card">

            <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
            <Link to={{
                    pathname: '/companydetails/LT',
                    description:'LT'
                  }}  className="card-button">Graph
              </Link>
            
          </BackSide>
        </React.Fragment>
        );
      
        const InfosysCardContents = ({ children }) => (
          <React.Fragment>
            <FrontSide className="front-card" >
            <img src={infosys} className='img-style' />
            {/* <p className='img-heading'>Tech Mahindra</p> */}
            </FrontSide>
            <BackSide className="back-card">

              <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
              <Link to={{
                    pathname: '/companydetails/INFOSYS',
                    description:'INFOSYS'
                  }}  className="card-button">Graph
              </Link>
              
            </BackSide>
          </React.Fragment>
          );
          
          const TCSCardContents = ({ children }) => (
            <React.Fragment>
              <FrontSide className="front-card" >
              <img src={tcs} className='img-style' />
              {/* <p className='img-heading'>Tech Mahindra</p> */}
              </FrontSide>
              <BackSide className="back-card">
                <div className="card-button">3Yr. return</div><br/><br/>
                <Link to={{
                    pathname: '/companydetails/TCS',
                    description:'TCS'
                  }}  className="card-button">Graph
                </Link>
                
              </BackSide>
            </React.Fragment>
            );
      
            const RelianceCardContents = ({ children }) => (
              <React.Fragment>
                <FrontSide className="front-card" >
                <img src={reliance} className='img-style' />
                {/* <p className='img-heading'>Tech Mahindra</p> */}
                </FrontSide>
                <BackSide className="back-card">

                  <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                  <Link to={{
                    pathname: '/companydetails/RELIANCE',
                    description: 'RELIANCE'
                  }}  className="card-button">Graph</Link>
                  
                </BackSide>
              </React.Fragment>
              );
      
              const AirtelCardContents = ({ children }) => (
                <React.Fragment>
                  <FrontSide className="front-card" >
                  <img src={airtel} className='img-style' />
                  {/* <p className='img-heading'>Tech Mahindra</p> */}
                  </FrontSide>
                  <BackSide className="back-card">

                    <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                    <Link to={{
                    pathname: '/companydetails/AIRTEL',
                    description:'AIRTEL'
                  }}  className="card-button">Graph</Link>
                    
                  </BackSide>
                </React.Fragment>
                );

                const HCLCardContents = ({ children }) => (
                  <React.Fragment>
                    <FrontSide className="front-card" >
                    <img src={hcl} className='img-style' />
                    {/* <p className='img-heading'>Tech Mahindra</p> */}
                    </FrontSide>
                    <BackSide className="back-card">
  
                      <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                      <Link to={{
                        pathname: '/companydetails/HCL',
                        description:'HCL'
                      }}  className="card-button">Graph
                      </Link>
                      
                    </BackSide>
                  </React.Fragment>
                  );

                  const SBICardContents = ({ children }) => (
                    <React.Fragment>
                      <FrontSide className="front-card" >
                      <img src={sbi} className='img-style' />
                      {/* <p className='img-heading'>Tech Mahindra</p> */}
                      </FrontSide>
                      <BackSide className="back-card">
    
                        <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                        <Link to={{
                          pathname: '/companydetails/SBI',
                          description:'SBI'
                          }}  className="card-button">Graph
                        </Link>
                        
                      </BackSide>
                    </React.Fragment>
                    );

///////////////////////////////////////////////    NASDAQ     ////////////////////////////////////////////////////////
                    const MicrosoftCardContents = ({ children }) => (
                      <React.Fragment>
                        <FrontSide className="front-card" >
                        <img src={microsoft} className='img-style' />
                        {/* <p className='img-heading'>Tech Mahindra</p> */}
                        </FrontSide>
                        <BackSide className="back-card">
      
                          <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                          <Link to={{
                            pathname: '/companydetails/MICROSOFT',
                            description:'MICROSOFT'
                            }}  className="card-button">Graph
                          </Link>
                          
                        </BackSide>
                      </React.Fragment>
                      );

                      const AppleCardContents = ({ children }) => (
                        <React.Fragment>
                          <FrontSide className="front-card" >
                          <img src={apple} className='img-style' />
                          {/* <p className='img-heading'>Tech Mahindra</p> */}
                          </FrontSide>
                          <BackSide className="back-card">
        
                            <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                            <Link to={{
                              pathname: '/companydetails/APPLE',
                              description:'APPLE'
                              }}  className="card-button">Graph
                            </Link>
                            
                          </BackSide>
                        </React.Fragment>
                        );

                        const AmazonCardContents = ({ children }) => (
                          <React.Fragment>
                            <FrontSide className="front-card" >
                            <img src={amanzon} className='img-style' /> 
                            {/* <p className='img-heading'>Tech Mahindra</p> */}
                            </FrontSide>
                            <BackSide className="back-card">
          
                              <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                              <Link to={{
                                pathname: '/companydetails/AMAZON',
                                }}  className="card-button">Graph
                              </Link>
                              
                            </BackSide>
                          </React.Fragment>
                          );

                          const AlphabetCardContents = ({ children }) => (
                            <React.Fragment>
                              <FrontSide className="front-card" >
                              <img src={alphabet} className='img-style' />
                              {/* <p className='img-heading'>Tech Mahindra</p> */}
                              </FrontSide>
                              <BackSide className="back-card" >
            
                                <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                                <Link to={{
                                  pathname: '/companydetails/ALPHABET',
                                  description:'ALPHABET'
                                  }}  className="card-button">Graph
                                </Link>
                                
                              </BackSide>
                            </React.Fragment>
                            );

                            const FacebookCardContents = ({ children }) => (
                              <React.Fragment>
                                <FrontSide className="front-card" >
                                <img src={facebook} className='img-style' />
                                {/* <p className='img-heading'>Tech Mahindra</p> */}
                                </FrontSide>
                                <BackSide className="back-card">
              
                                  <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                                  <Link to={{
                                    pathname: '/companydetails/FACEBOOK',
                                    description:'FACEBOOK'
                                    }}  className="card-button">Graph
                                  </Link>
                                  
                                </BackSide>
                              </React.Fragment>
                              );

                              const IntelCardContents = ({ children }) => (
                                <React.Fragment>
                                  <FrontSide className="front-card" >
                                  <img src={intel} className='img-style' />
                                  {/* <p className='img-heading'>Tech Mahindra</p> */}
                                  </FrontSide>
                                  <BackSide className="back-card">
                
                                    <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                                    <Link to={{
                                      pathname: '/companydetails/INTEL',
                                      description:'INTEL'
                                      }}  className="card-button">Graph
                                    </Link>
                                    
                                  </BackSide>
                                </React.Fragment>
                                );

                                const AdobeCardContents = ({ children }) => (
                                  <React.Fragment>
                                    <FrontSide className="front-card" >
                                    <img src={adobe} className='img-style' />
                                    {/* <p className='img-heading'>Tech Mahindra</p> */}
                                    </FrontSide>
                                    <BackSide className="back-card">
                  
                                      <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                                      <Link to={{
                                        pathname: '/companydetails/ADOBE',
                                        description:'ADOBE'
                                        }}  className="card-button">Graph
                                      </Link>
                                      
                                    </BackSide>
                                  </React.Fragment>
                                  );

                                  const NetflixCardContents = ({ children }) => (
                                    <React.Fragment>
                                      <FrontSide className="front-card">
                                      <img src={netflix} className='img-style' />
                                      {/* <p className='img-heading'>Tech Mahindra</p> */}
                                      </FrontSide>
                                      <BackSide className="back-card">
                    
                                        <Link to="/" className="card-button">3Yr. return</Link><br/><br/>
                                        <Link to={{
                                          pathname: '/companydetails/NETFLIX',
                                          description:'NETFLIX'
                                          }}  className="card-button">Graph
                                        </Link>
                                        
                                      </BackSide>
                                    </React.Fragment>
                                    );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipOnHover={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <TechMahindraCardContents> </TechMahindraCardContents>

        </Flippy>
        
      );
      
      const FlippyOH = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <LTCardContents></LTCardContents>
        </Flippy>
        
      );
      
      const FlippyInfosys = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <InfosysCardContents></InfosysCardContents>
        </Flippy>
        
      );
      
      const FlippyTCS = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
        <TCSCardContents></TCSCardContents>  
        </Flippy>
        
      );
      
      const FlippyReliance = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <RelianceCardContents></RelianceCardContents>
        </Flippy>
        
      );
      
      const FlippyAirtel = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <AirtelCardContents></AirtelCardContents>
        </Flippy>
        
      );
      
      const FlippyHCL = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <HCLCardContents></HCLCardContents>
        </Flippy>
        
      );
      
      const FlippySBI = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <SBICardContents></SBICardContents>
        </Flippy>
        
      );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FlippyMicrosoft = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <MicrosoftCardContents></MicrosoftCardContents>
  </Flippy>
  
);
const FlippyApple = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AppleCardContents></AppleCardContents>
  </Flippy>
  
);
const FlippyAmazon = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AmazonCardContents></AmazonCardContents>
  </Flippy>
  
);
const FlippyAlphabet = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AlphabetCardContents></AlphabetCardContents>
  </Flippy>
  
);
const FlippyFacebook = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <FacebookCardContents></FacebookCardContents>
  </Flippy>
  
);
const FlippyIntel = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <IntelCardContents></IntelCardContents>
  </Flippy>
  
);
const FlippyAdobe = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AdobeCardContents></AdobeCardContents>
  </Flippy>
  
);
const FlippyNetflix = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <NetflixCardContents></NetflixCardContents>
  </Flippy>
  
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CardBSE extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isFlipped: false
        };
    
        setInterval(() => {
          this.setState({
            isFlipped: !this.state.isFlipped
          });
        }, 3000);
      }
    render(){

        return(
            <>
                <div className="">
                      <div className="stock-head"><p className="market-head" style={{textAlign:'center'}}>Bombay Stock Exchange(INDIA)</p></div>
                    <div className="" style={{ display: 'flex',width: '75%',columnGap: '70px',marginLeft:'12.5%',marginTop: '-5%', justifyContent: 'space-around', 'flex-wrap': 'wrap'}}>
                        <FlippyOnHover flipDirection="horizontal" />
                        <FlippyOH flipDirection="horizontal" />
                        <FlippyInfosys flipDirection="horizontal" />
                        <FlippyTCS flipDirection="horizontal" />
                        <FlippyReliance flipDirection="horizontal"/>
                        <FlippyAirtel flipDirection="horizontal" />
                        <FlippyHCL flipDirection="horizontal" />
                        <FlippySBI flipDirection="horizontal" />
                    </div>
                </div>

                <div className="">
                <div className="stock-head" style={{marginTop:'5%', textAlign:'center'}}><p className="market-head">NASDAQ(USA)</p></div>
                    <div className="" style={{ display: 'flex',width: '75%',columnGap: '70px',marginLeft:'12.5%',marginTop: '-5%', marginBottom: '5%', justifyContent: 'space-around', 'flex-wrap': 'wrap'}}>
                        <FlippyMicrosoft flipDirection="horizontal" />
                        <FlippyApple flipDirection="horizontal" />
                        <FlippyAmazon flipDirection="horizontal" />
                        <FlippyAlphabet flipDirection="horizontal" />
                        <FlippyFacebook flipDirection="horizontal"/>
                        <FlippyIntel flipDirection="horizontal" />
                        <FlippyAdobe flipDirection="horizontal" />
                        <FlippyNetflix flipDirection="horizontal" />
                    </div>
                </div>
            </>
        )
    }
}

export default CardBSE;